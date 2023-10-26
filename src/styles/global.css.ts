import { globalStyle } from "@vanilla-extract/css"
import { container } from "../app/style.css"
import { maxMediaQuery } from "./tokens/breakpoints"
import { vars } from "./vars.css"

globalStyle("html, body", {
  margin: 0,
})

globalStyle("body", {
  fontFamily: "var(--sk-font-garamond)",
  background: vars.color.white,
  minHeight: "100vh",
})

globalStyle("a", {
  textDecoration: "none",
})

globalStyle(`${container} > [data-rk='stakekit']`, {
  "@media": {
    [maxMediaQuery("tablet")]: {
      display: "flex",
      flex: "1",
    },
  },
})
