import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import { isString } from "lodash";

interface ImageProps {
	alt?: string;
	href?: string;
}

interface HeaderProps {
	className?: string;
	size?: string;
	src?: string;
	link?: string;
}

export const Logo: React.FC<HeaderProps & ImageProps> = ({
	className,
	size,
	src,
	alt,
	href,
	link,
}) => {
	const imageClasses = cn(
		"image",
		{
			size,
		},
		className
	);

	return isString(link) ? (
		<Link to={link}>
			<img className={imageClasses} src={src} alt={alt} />
		</Link>
	) : (
		<a href={href}>
			<img className={imageClasses} src={src} alt={alt} />
		</a>
	);
};
