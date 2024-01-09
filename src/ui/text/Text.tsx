import React from "react";
import cn from "classnames";

import { TextProps } from "./Text.types";

import "./Text.scss";

export const Text: React.FC<TextProps> = ({
	as,
	text,
	weight,
	size,
	children,
	className,
	...restProps
}) => {
	const Component = as;

	const classNames = cn(
		"text",
		weight && `text-weight_${weight}`,
		size && ` text-size_${size}`,
		className
	);

	return (
		<Component className={classNames} {...restProps}>
			{children || text}
		</Component>
	);
};
