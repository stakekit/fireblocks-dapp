import { globalStyle } from "@vanilla-extract/css";
import { container } from "../app/style.css";
import { maxMediaQuery } from "./tokens/breakpoints";
import { vars } from "./vars.css";

globalStyle("html, body", {
	margin: 0,
});

globalStyle("body", {
	fontFamily: vars.fonts.body,
	background: vars.color.bodyBackground,
	minHeight: "100vh",
});

globalStyle("a", {
	textDecoration: "none",
});

globalStyle(`${container} > [data-rk='stakekit']`, {
	"@media": {
		[maxMediaQuery("tablet")]: {
			display: "flex",
			flex: "1",
		},
	},
});

globalStyle(`${container} > [data-rk='stakekit']`, {
	"@media": {
		[maxMediaQuery("tablet")]: {
			display: "flex",
			flex: "1",
		},
	},
});

globalStyle(`${container} button[data-rk='footer-button-primary']`, {
	border: "none",
});

globalStyle(`${container} button[data-rk='footer-button-secondary']`, {
	border: "none",
});

globalStyle(`${container} button[data-rk='footer-button-primary']:hover`, {
	boxShadow:
		"0px 10px 50px -8px rgb(3 72 162 / 25%), 0px 10px 35px -10px rgb(3 72 162 / 35%)",
});

globalStyle(`${container} div[data-rk='token-network-logo']`, {
	background: vars.color.whiteTransparent,
});

globalStyle(
	`${container} div[data-rk='tabs-section'] > div > div:nth-child(2)`,
	{
		bottom: "unset",
		top: 5,
	},
);

globalStyle(
	`${container} div[data-rk='tabs-section'] p[data-state='selected']`,
	{
		color: vars.color.vibrantBlue,
	},
);

globalStyle(`${container} div[data-rk='widget-wrapper'] > div`, {
	minHeight: "unset",
});

globalStyle(`${container} div[data-rk='widget-container']`, {
	boxShadow: "0px 8px 10px 4px rgba(0,0,0,0.13)",
});
