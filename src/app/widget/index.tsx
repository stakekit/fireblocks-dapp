"use client"

import "@stakekit/widget/package/css"
import { SKApp, lightTheme } from "@stakekit/widget"
import { config } from "../../config"
import { vars } from "../../styles"

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
      connectKitForceTheme="lightMode"
      forceWalletConnectOnly
    />
  )
}
