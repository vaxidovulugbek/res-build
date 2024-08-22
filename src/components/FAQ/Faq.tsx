import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Title } from "ui/Title/Title";
import Accordion from "./Accardion";
import "./Faq.scss";

const Faq: React.FC = () => {
	const { t } = useTranslation();
	return (
		<section className="faq py-10" id="faq">
			<div className="container">
				<Title
					className="text-center section__title title-color font-header mb-8 max-[660px]:mb-6"
					as="h2"
					text={t("faq")}
				/>
				{/* <p>faq</p> */}
				<div className="rounded-lg">
					<div
						data-aos="fade-up"
						data-aos-anchor-placement="center-center"
						data-aos-duration={500}
					>
						<Accordion title={t("faq_title_1")} answer={t("faq_text_1")} />
					</div>
					<div
						data-aos="fade-up"
						data-aos-anchor-placement="center-center"
						data-aos-duration={500}
					>
						<Accordion title={t("faq_title_2")} answer={t("faq_text_2")} />
					</div>
					<div
						data-aos="fade-up"
						data-aos-anchor-placement="center-center"
						data-aos-duration={500}
					>
						<Accordion title={t("faq_title_3")} answer={t("faq_text_3")} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Faq;
