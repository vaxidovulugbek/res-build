import React, { useState } from "react";
import { Button, Text } from "ui";
import { AccordionProps } from "types/interface";
import "./Faq.scss";

// interface AccordionProps {
// 	title: string;
// 	answer: string;
// }

const Accordion: React.FC<AccordionProps> = ({ title, answer }) => {
	const [accordionOpen, setAccordionOpen] = useState(false);

	return (
		<div className="bg-gray-200 p-5 mb-4 rounded-lg max-[480px]:p-4">
			<Button
				onClick={() => setAccordionOpen(!accordionOpen)}
				className="flex justify-between w-full items-center"
				children={
					<>
						<Text
							as="span"
							text={title}
							className="text-lg text-gray-700 max-[660px]:text-md"
						/>
						<svg
							className="accardion-svg shrink-0 ml-8"
							width="16"
							height="16"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect
								y="7"
								width="16"
								height="2"
								rx="1"
								className={`transform origin-center transition duration-200 ease-out ${
									accordionOpen && "!rotate-180"
								}`}
							/>
							<rect
								y="7"
								width="16"
								height="2"
								rx="1"
								className={`transform origin-center rotate-90 transition duration-200 ease-out ${
									accordionOpen && "!rotate-180"
								}`}
							/>
						</svg>
					</>
				}
			/>
			{/* <button
				onClick={() => setAccordionOpen(!accordionOpen)}
				className="flex justify-between w-full items-center"
			></button> */}
			<div
				className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
					accordionOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
				}`}
			>
				<div className={"overflow-hidden text-base max-[660px]:text-sm"}>{answer}</div>
			</div>
		</div>
	);
};

export default Accordion;
