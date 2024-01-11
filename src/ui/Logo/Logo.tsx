import React from "react";
import cn from "classnames";

interface ImageProps {
	alt: string;
	href: string;
}

interface HeaderProps {
	className: string;
	size: string;
	src: string;
}

const Logo: React.FC<HeaderProps & ImageProps> = ({ className, size, src, alt, href }) => {
	const imageClasses = cn(
		"image",
		{
			size,
			// Boshqa shart bo'yicha klasslar
		},
		className
	);

	return (
		<a href={href}>
			<img className={imageClasses} src={src} alt={alt} />
		</a>
	);
};

export default Logo;
