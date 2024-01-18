import React from "react";
import cn from "classnames";

// import { ControlError, ControlLabel } from "ui/atoms";

import { InputProps } from "./Input.types";

import "./Input.scss";

export const Input: React.FC<InputProps> = ({
	size,
	variant,
	label,
	errorMessage,
	outerClass = "",
	innerClass = "",
	className = "",
	isDisabled = false,
	...restProps
}) => {
	return (
		<div className={cn("control", outerClass)}>
			{/* <ControlLabel label={label} /> */}
			<label>{label}</label>
			<div className={cn("input__container", innerClass)}>
				<input
					disabled={isDisabled}
					className={cn(
						"input__field",
						`input__field_${variant}`,
						`input__field_${size}`,
						className,
						{
							input__field_disabled: isDisabled,
							input__field_error: errorMessage,
						}
					)}
					{...restProps}
				/>
			</div>
			<span>{errorMessage}</span>
			{/* <ControlError errorMessage={errorMessage} /> */}
		</div>
	);
};
