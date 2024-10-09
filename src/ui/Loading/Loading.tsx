import React, { ReactElement } from "react";

import "./styles.scss";
import Typography from "@mui/material/Typography";

export const Loading = (): ReactElement =>
	(
		<div className="loader">
			<svg xmlns="http://www.w3.org/2000/svg">
				<defs>
					<filter id="goo">
						<feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
						<feColorMatrix
							in="blur"
							values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
							result="goo"
						/>
						<feBlend in="SourceGraphic" in2="goo" />
					</filter>
				</defs>
			</svg>
			<div className="drops">
				<div className="drop"></div>
				<div className="drop"></div>
				<div className="drop"></div>
				<div className="drop"></div>
			</div>

			<Typography variant="subtitle1" component="span">
				loading
			</Typography>
		</div>
	) as React.ReactElement<any, string | React.JSXElementConstructor<any>>;
