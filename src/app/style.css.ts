import { style } from "@vanilla-extract/css"
import { atoms } from "../styles"

export const container = style({
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

export const forText = style({
  fontSize: "20px",
  marginTop: "9.5px",
  marginLeft: "3px",
})
