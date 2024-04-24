import React from "react";
import { CardProps } from "types/interface";
import { Text, Title } from "ui";
import "./HowItWorks.scss";

const Card: React.FC<CardProps> = ({ id, title, text }) => {
	return (
		<div
			className={`flex max-[660px]:p-3 p-6 card-shadow max-[660px]:rounded-[14px] rounded-[26px] min-h-[150px] max-[480px]:min-h-[130px] ${
				id !== "1"
					? "lg:ms-7 md:ms-0 sm:ms-0 xl:mb-0 md:mb-8 sm:mb-6 max-[660px]:mb-5"
					: "xl:mb-0 md:mb-8 sm:mb-6 max-[660px]:mb-5"
			}`}
		>
			<Text
				className="text-gray relative border-transparent flex justify-center rounded-full w-12 h-12 flex-grow-0 lg:me-2"
				as="span"
				text={id}
				size="xlg"
				weight="medium"
			/>
			<div className="mt-4 lg:mt-0 text-center lg:text-start">
				<Title
					className="text-xl fade-up-title text-gray mb-3 font-medium transition-colors"
					as="h4"
					text={title}
				/>
				<Text
					className="text-lg text-gray fade-up-text transition-colors"
					as="p"
					text={text}
					size="md"
				/>
			</div>
		</div>
	);
};

export default Card;
