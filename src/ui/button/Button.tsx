import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import { isString } from "lodash";

import { ButtonProps } from "./Button.props";

import "./Button.css";

export const Button: React.FC<ButtonProps> = ({
	text,
	isDisabled = false,
	isLoading = false,
	variant,
	size,
	className = "",
	roundness = "half",
	link,
	children,
	...restProps
}) => {
	const classNames = cn(
		"btn",
		variant && `btn_variant-${variant}`,
		size && `btn_size-${size}`,
		roundness && `radius_${roundness}`,
		{
			btn_disabled: isDisabled,
		},
		className
	);

	return isString(link) ? (
		<Link to={link} className={classNames}>
			{text}
			{children}

			{isLoading && <span className="btn-spinner"></span>}
		</Link>
	) : (
		<button className={classNames} disabled={isDisabled || isLoading} {...restProps}>
			{text}
			{children}

			{isLoading && <span className="btn-spinner"></span>}
		</button>
	);
};
