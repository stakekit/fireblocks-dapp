import React from "react";
import { Box } from "../components/atoms/box";
import { DottedBackground } from "../components/molecules/dotted-background";
import { GradientContainer } from "../components/molecules/gradient-container";
import { Header } from "./header";
import { container, fixedContainer, widgetContainer } from "./style.css";
import { Widget } from "./widget";
import { HelpModals } from "./widget/help-modals";

export default function Home() {
	return (
		<>
			<Box className={container}>
				<DottedBackground />

				<Box className={fixedContainer}>
					<GradientContainer />
				</Box>

				<Box className={widgetContainer}>
					<Header />
					<Box data-rk="widget-wrapper">
						<Widget />
					</Box>
					<HelpModals />
				</Box>
			</Box>
		</>
	);
}
