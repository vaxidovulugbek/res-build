import React from "react";
import "./Loading.scss";
export function Loading() {
	return (
		<div className="lds-content">
			<div className="lds-ring">
				<div />
				<div />
				<div />
				<div />
			</div>
		</div>
	);
}
