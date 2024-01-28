import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { Text } from "ui/Text/Text";
import { Title } from "ui/Title/Title";

interface CardProps {
	id: string;
	title: string;
	text: string;
}

const Card: React.FC<CardProps> = ({ id, title, text }) => {
	const cardRef = useRef<HTMLLIElement>(null);

	useEffect(() => {
		if (cardRef.current) {
			gsap.from(cardRef.current, {
				opacity: 0,
				y: 50,
				duration: 1,
				ease: "power3.out",
			});
		}
	}, [cardRef.current]);

	return (
		<li key={id} ref={cardRef} className={`flex p-4 ${id !== "1" ? "ms-4" : ""}`}>
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
		</li>
	);
};

export default Card;
