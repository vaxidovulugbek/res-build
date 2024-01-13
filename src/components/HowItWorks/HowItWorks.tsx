import React from "react";
import { Text } from "ui/Text/Text";
import { Title } from "ui/Title/Title";

const HowItWorks: React.FC = () => {
	const data = [
		{
			id: "1",
			title: "Enter details",
			text: "Start by filling out the relevant sections that make up the content of your resume.",
		},
		{
			id: "2",
			title: "Select a template",
			text: "Choose a template and customize your resume to suit your style and personality.",
		},
		{
			id: "3",
			title: "Download resume",
			text: "Quickly download your resume and edit it at any time.",
		},
	];
	return (
		<section className="section">
			<div className="container">
				<Title
					weight="medium"
					className="text-center text-gray-900 font-header text-3xl md:text-5xl mb-8"
					as="h2"
					text="How it works?"
				/>
				<ul className="flex items-center juntify-between">
					{data.map((el, i) => {
						return (
							<li className={`flex p-4 ${el?.id != "1" ? "ms-4" : ""}`} key={el?.id}>
								<Text
									className="me-3 text-gray-500 relative border-transparent flex items-center justify-center rounded-full w-12 h-12 flex-grow-0 lg:me-5 "
									as="span"
									text={el?.id}
									size="xlg"
									weight="medium"
								/>
								<div className="mt-4 lg:mt-0 text-center lg:text-start">
									<Title
										className="text-xl mb-3 font-medium text-gray-500 can-hover:group-hover:text-gray-700 transition-colors"
										as="h4"
										text={el?.title}
									/>
									<Text
										className="text-lg text-gray-500 can-hover:group-hover:text-gray-700 transition-colors"
										as="p"
										text={el?.text}
									/>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
};

export default HowItWorks;