import React from "react";
import cn from "classnames";

import { TitleProps } from "./Title.types";

import "./Title.scss";

export const Title: React.FC<TitleProps> = ({ as, text, children, className, ...restProps }) => {
	const Component = as;

	const classNames = cn("title", `title_${as.charAt(1)}`, className);

	return (
		<Component className={classNames} {...restProps}>
			{children || text}
		</Component>
	);
};
