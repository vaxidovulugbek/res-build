import React from "react";
import cn from "classnames";

interface ImageProps {
	rounded?: boolean;
	bordered?: boolean;
	className?: string;
	src: any;
	alt: string;
	href: any;
	size: string;
}

const Logo: React.FC<ImageProps> = ({ size, className, src, alt, href }) => {
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

// function Logo({ type, alt = "logo" }) {
// 	return (
// 		<a href="#">
// 			<img src="logo" alt={alt} />
// 		</a>
// 	);
// }

// export default Logo;
