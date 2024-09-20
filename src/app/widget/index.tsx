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
    tabBorder: vars.color.accentColor,
    primaryButtonBackground: vars.color.accentColor,
    primaryButtonOutline: vars.color.accentColor,
    primaryButtonHoverBackground: vars.color.accentColor,
    primaryButtonHoverOutline: vars.color.accentColor,
    primaryButtonActiveBackground: vars.color.accentColor,
    primaryButtonActiveOutline: vars.color.accentColor,
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
