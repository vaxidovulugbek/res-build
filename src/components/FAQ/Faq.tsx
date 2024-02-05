// import React, { useRef, useState } from "react";
// import "./Faq.scss";

// const Faq: React.FC = () => {
// 	const faqs = [
// 		{
// 			id: 1,
// 			header: "Muvozanat qanday loyiha?",
// 			text: `Muvozanat O'zbekiston respublikasi qishloq ho'jaligini tartibga solib turuvchi hamda dehqonlarning daromadini oshishidan ko'zlangan loyiha`,
// 		},
// 		{
// 			id: 2,
// 			header: "Biz bilan qanday bog'lansa bo'ladi?",
// 			text: `Biz bilan telegram ijtimoiy tarmoq orqali yoki 1090 qisqa raqami orqali aloqaga chiqishingiz mumkin.`,
// 		},
// 		{
// 			id: 3,
// 			header: "Loyiha kimlar uchun",
// 			text: `Loyiha asosan dehqonlar va fermer hojaliklari uchun mo'ljallangan.Ushbu loyiha orqali siz O'zbekiston respublikasida qayerda qancha miqtorda qanday ekin ekilayotganini ko'rib borishingiz mumkin.`,
// 		},
// 		{
// 			id: 4,
// 			header: "Loyihadan ko'zlangan maqsad",
// 			text: `Loyihadan asosiy ko'zlangan maqsad qishloq ho'jaligini rivojlantirish va fermer hojaligi daromadlarini oshirish.`,
// 		},
// 	];

// 	const contentEl = useRef<HTMLDivElement>(null);
// 	const [active, setActive] = useState(null);

// 	const handleToggle = (index: any) => {
// 		if (active === index) {
// 			setActive(null);
// 		} else {
// 			setActive(index);
// 		}
// 	};
// 	return (
// 		<section id="faq" className="m-auto gap-10 pb-16 justify-center flex-column w-8/12">
// 			<div className="container">
// 				<h2 className="text-3xl mb-4 subpixel-antialiased font-sans font-semibold text-center">
// 					FAQ
// 				</h2>
// 				<p className="text-center mb-6 text-gray-600 text-sm">
// 					Ko’p berilayotgan savollarga qisqa javoblar
// 				</p>
// 				{faqs.map((el, i) => {
// 					return (
// 						<div className="rc-accordion-card" key={i}>
// 							<div className="rc-accordion-header">
// 								<div
// 									className={`rc-accordion-toggle p-5 ${
// 										active === el?.id ? "active" : ""
// 									}`}
// 									onClick={() => handleToggle(el.id)}
// 								>
// 									{active !== el?.id ? (
// 										<svg
// 											width="24"
// 											height="24"
// 											viewBox="0 0 24 24"
// 											fill="none"
// 											xmlns="http://www.w3.org/2000/svg"
// 										>
// 											<path
// 												d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
// 												stroke="#98A2B3"
// 												stroke-width="2"
// 												stroke-linecap="round"
// 												stroke-linejoin="round"
// 											/>
// 										</svg>
// 									) : (
// 										<svg
// 											xmlns="http://www.w3.org/2000/svg"
// 											width="24"
// 											height="24"
// 											viewBox="0 0 24 24"
// 											fill="none"
// 										>
// 											<path
// 												d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
// 												stroke="#98A2B3"
// 												stroke-width="2"
// 												stroke-linecap="round"
// 												stroke-linejoin="round"
// 											/>
// 										</svg>
// 									)}

// 									<h5 className="rc-accordion-title ms-5">{el?.header}</h5>
// 									{/* <FontAwesomeIcon icon="fa-solid fa-chevron-down" /> */}
// 								</div>
// 							</div>
// 							<div
// 								ref={contentEl}
// 								className={`rc-collapse ${active === el?.id ? "show" : ""}`}
// 								style={
// 									active === el?.id
// 										? {
// 												height: contentEl?.current?.scrollHeight
// 													? contentEl.current.scrollHeight + 25
// 													: undefined,
// 											}
// 										: { height: "0px" }
// 								}
// 							>
// 								<div className="rc-accordion-body">
// 									<p className="mb-0">{el?.text}</p>
// 								</div>
// 							</div>
// 						</div>
// 					);
// 				})}
// 			</div>
// 		</section>
// 	);
// };

// export default Faq;
// Faq.tsx
// Faq.tsx

import React, { useState } from "react";
import { Title } from "ui/Title/Title";
import Accordion from "./Accardion";
import "./Faq.scss";

const Faq: React.FC = () => {
	return (
		<section className="section">
			<div className="container">
				<Title
					className="text-center title-color font-header text-3xl md:text-5xl mb-8"
					as="h2"
					text="FAQ"
				/>
				<div className="rounded-lg">
					<Accordion
						data-aos="fade-up"
						data-aos-anchor-placement="center-center"
						title="How can I use Resume.io for free?"
						answer="Resume.io has a few different tools you can use 100% for free without entering any credit card details. "
					/>
					<Accordion
						title="Can I download my resume to Word or PDF?"
						answer="Once your resume is ready there are a number of ways you can export your resumes or cover letters to start applying for jobs. You can download a PDF, DOCX(Word), or TXT file of your resume either directly from your Dashboard or from the Resume Editor. "
					/>
					<Accordion
						title="What should be on a resume?"
						answer="Personal and contact information.Regardless of the industry you're applying to, personal details are critical on a resume. Always include your name, address, telephone number, email address and date of birth. Other additional details could include your marital status, gender, nationality, driver's license, and even links to websites or social media accounts, as well as a professional photo."
					/>
				</div>
			</div>
		</section>
	);
};

export default Faq;
