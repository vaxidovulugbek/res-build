import React, { useState, useEffect } from "react";
import Card from "./Card";
import { Title } from "ui/Title/Title";
import { useTranslation } from "react-i18next";

const HowItWorks: React.FC = () => {
	const { t } = useTranslation();
	const data = [
		{
			id: "1",
			title: `${t("HowItWorks_title_1")}`,
			text: `${t("HowItWorks_text_1")}`,
		},
		{
			id: "2",
			title: `${t("HowItWorks_title_2")}`,
			text: `${t("HowItWorks_text_2")}`,
		},
		{
			id: "3",
			title: `${t("HowItWorks_title_3")}`,
			text: `${t("HowItWorks_text_3")}`,
		},
	];

	return (
		<section className="section">
			<div className="container">
				<Title
					weight="medium"
					className="text-center title-color font-header section__title sm:mb-8 max-[660px]:mb-6 max-[480px]:mt-0 w-full inline-block"
					as="h2"
					text={t("How_it_works")}
				/>
				<ul className="max-[660px]:flex-col md:flex-col sm:flex-col lg:flex-row flex items-center justify-between">
					{data &&
						data.map((props, index) => (
							<li
								key={props.id}
								data-aos="fade-up"
								data-aos-anchor-placement="center-center"
								data-aos-duration={index * 500}
								className="lg:w-4/12 sm:w-9/12 md:w-9/12 max-[660px]:w-full"
							>
								<Card id={props.id} title={props.title} text={props.text} />
							</li>
						))}
				</ul>
			</div>
		</section>
	);
};

export default HowItWorks;
