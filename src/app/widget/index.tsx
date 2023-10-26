"use client"

import "@stakekit/widget/package/css"
import { SKApp, lightTheme } from "@stakekit/widget"
import { config } from "../../config"

export const Widget = () => {
  return (
    <SKApp
      apiKey={config.apiKey}
      theme={lightTheme}
      connectKitForceTheme="lightMode"
    />
  )
}
