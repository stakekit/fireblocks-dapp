"use client";

import "@stakekit/widget/style.css";
import {
	createWallet,
	evmChainGroup,
	lightTheme,
	SKApp,
} from "@stakekit/widget";
import { createStore } from "mipd";
import { injected } from "wagmi";
import { config } from "../../config";
import { vars } from "../../styles";
import firebaseLogo from "../firebase-logo.png";

const theme: typeof lightTheme = {
	...lightTheme,

	color: {
		...lightTheme.color,
		tabBorder: vars.color.vibrantBlue,
		primaryButtonBackground: vars.color.accentColor,
		primaryButtonOutline: vars.color.accentColor,
		primaryButtonHoverBackground: vars.color.hoverColor,
		primaryButtonHoverOutline: vars.color.hoverColor,
		primaryButtonActiveBackground: vars.color.accentColor,
		primaryButtonActiveOutline: vars.color.accentColor,

		secondaryButtonColor: vars.color.vibrantBlue,
		secondaryButtonBackground: vars.color.lightDenimBlue,
		secondaryButtonOutline: vars.color.accentColor,
		secondaryButtonHoverColor: vars.color.lightDenimBlue,
		secondaryButtonHoverBackground: vars.color.hoverColor,
		secondaryButtonHoverOutline: vars.color.hoverColor,
		secondaryButtonActiveBackground: vars.color.accentColor,
		secondaryButtonActiveOutline: vars.color.accentColor,
	},
};

const fireblocksProvider = createStore()
	.getProviders()
	.find((provider) => provider.info.rdns === "com.fireblocks");

export const Widget = () => {
	return (
		<SKApp
			apiKey={config.apiKey}
			theme={theme}
			disableInjectedProviderDiscovery
			mapWalletListFn={(walletList) => {
				return walletList.flatMap((walletGroup: (typeof walletList)[number]) =>
					walletGroup.groupName === "Ethereum"
						? {
								...walletGroup,
								wallets: [
									() => ({
										...createWallet({
											id: "fireblocks",
											iconBackground: "#FFF",
											iconUrl: firebaseLogo.src,
											name: "Fireblocks",
											downloadUrls: {
												ios: "https://apps.apple.com/us/app/fireblocks/id1439296596",
												android:
													"https://play.google.com/store/apps/details?id=com.fireblocks.client",
											},
											qrCode: "https://fireblocks.com/qrcode",
											mobile: false,
											createConnector: injected({
												target: {
													id: "fireblocks",
													name: "Fireblocks",
													provider: () => fireblocksProvider?.provider,
													icon: fireblocksProvider?.info.icon,
												},
											}),
										})(),
										installed: !!fireblocksProvider,
										rdns: "com.fireblocks",
										downloadUrls: {
											android:
												"https://play.google.com/store/apps/details?id=com.fireblocks.client",
											ios: "https://apps.apple.com/us/app/fireblocks/id1439296596",
											qrCode: "https://fireblocks.com/",
											browserExtension:
												"https://chromewebstore.google.com/detail/fireblocks-defi-extension/mpmfkenmdhemcjnkfndoiagglhpenolg",
											chrome:
												"https://chromewebstore.google.com/detail/fireblocks-defi-extension/mpmfkenmdhemcjnkfndoiagglhpenolg",
										},
										chainGroup: evmChainGroup,
									}),
								],
							}
						: [],
				);
			}}
		/>
	);
};
