import { style } from "@vanilla-extract/css"
import { atoms } from "../styles"

export const container = style({
  position: "relative",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  scrollbarWidth: "none",
  "::-webkit-scrollbar": {
    display: "none",
  },
})

export const layoutContainer = style([
  atoms({ fontFamily: "body" }),
  {
    scrollbarWidth: "none",
    "::-webkit-scrollbar": {
      display: "none",
    },
  },
])

export const links = style({
  cursor: "pointer",
  padding: "14px 20px",
  borderRadius: "40px",
  background: "rgba(0, 0, 0, 0.04)",
})

export const widgetContainer = style({ zIndex: 1 })

export const connectContainer = style({
  borderRadius: "110px",
  background: "rgba(190, 190, 190, 0.3)",
  padding: "15px 25px",
})

export const dividerContainer = style({
  alignSelf: "stretch",
})

export const fixedContainer = style({
  position: "fixed",
  top: "-40%",
  right: "-40%",
})
