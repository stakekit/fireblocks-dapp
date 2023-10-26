import React from "react"
import { container, widgetContainer } from "./style.css"
import { Box } from "../components/atoms/box"
import { Header } from "./header"
import { Widget } from "./widget"
import { HelpModals } from "./widget/help-modals"
import { DottedBackground } from "../components/molecules/dotted-background"

export default function Home() {
  return (
    <>
      <Box className={container}>
        <DottedBackground />

        <Box className={widgetContainer}>
          <Header />
          <Widget />
          <HelpModals />
        </Box>
      </Box>
    </>
  )
}
