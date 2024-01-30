// import gsap from "gsap";
// import React, { useEffect, useRef } from "react";
// import { Text } from "ui/Text/Text";
// import { Title } from "ui/Title/Title";
// import { useSpring, animated } from "react-spring";

// interface CardProps {
// 	id: string;
// 	title: string;
// 	text: string;
// 	isVisible: boolean;
// }

// const Card: React.FC<CardProps> = ({ id, title, text, isVisible }) => {
// 	const animationProps = useSpring({
// 		opacity: isVisible ? 1 : 0,
// 		transform: isVisible ? "translateY(0)" : "translateY(100%)",
// 	});

// 	return (
// 		<animated.div style={animationProps} className={`flex p-4 ${id !== "1" ? "ms-4" : ""}`}>
// 			<Text
// 				className="me-3 text-gray relative border-transparent flex items-center justify-center rounded-full w-12 h-12 flex-grow-0 lg:me-5 "
// 				as="span"
// 				text={id}
// 				size="xlg"
// 				weight="medium"
// 			/>
// 			<div className="mt-4 lg:mt-0 text-center lg:text-start">
// 				<Title
// 					className="text-xl text-gray mb-3 font-medium can-hover:group-hover:text-gray-700 transition-colors"
// 					as="h4"
// 					text={title}
// 				/>
// 				<Text
// 					className="text-lg text-gray can-hover:group-hover:text-gray-700 transition-colors"
// 					as="p"
// 					text={text}
// 				/>
// 			</div>
// 		</animated.div>
// 	);
// };

// export default Card;

import React from "react";
import { Text } from "ui/Text/Text";
import { Title } from "ui/Title/Title";
import { useSpring, animated } from "react-spring";

interface CardProps {
	id: string;
	title: string;
	text: string;
	isVisible: boolean;
}

const Card: React.FC<CardProps> = ({ id, title, text, isVisible }) => {
	const animationProps = useSpring({
		opacity: isVisible ? 1 : 0,
		transform: isVisible ? "translateY(0)" : "translateY(100%)",
	});

	return (
		<animated.div style={animationProps} className={`flex p-2 ${id !== "1" ? "ms-2" : ""}`}>
			<Text
				className="me-3 text-gray relative border-transparent flex items-center justify-center rounded-full w-12 h-12 flex-grow-0 lg:me-5 "
				as="span"
				text={id}
				size="xlg"
				weight="medium"
			/>
			<div className="mt-4 lg:mt-0 text-center lg:text-start">
				<Title
					className="text-xl text-gray mb-3 font-medium can-hover:group-hover:text-gray-700 transition-colors"
					as="h4"
					text={title}
				/>
				<Text
					className="text-lg text-gray can-hover:group-hover:text-gray-700 transition-colors"
					as="p"
					text={text}
				/>
			</div>
		</animated.div>
	);
};

export default Card;
