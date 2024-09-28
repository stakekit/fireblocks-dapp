"use client"

import "@stakekit/widget/style.css"
import { SKApp, lightTheme } from "@stakekit/widget"
import { config } from "../../config"
import { vars } from "../../styles"
import firebaseLogo from "../firebase-logo.png"

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
}

export const Widget = () => {
  return (
    <SKApp
      apiKey={config.apiKey}
      theme={theme}
      wagmi={{ forceWalletConnectOnly: true }}
      disableInjectedProviderDiscovery
      mapWalletFn={() => ({
        iconUrl: firebaseLogo.src,
        name: "Wallet Link",
        iconBackground: "transparent",
      })}
    />
  )
}
