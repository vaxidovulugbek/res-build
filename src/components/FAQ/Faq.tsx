import React, { useState } from "react";
import { Title } from "ui/Title/Title";
import Accordion from "./Accardion";
import "./Faq.scss";

const Faq: React.FC = () => {
	return (
		<section className="section">
			<div className="container">
				<Title
					className="text-center section__title title-color font-header text-3xl md:text-5xl mb-8 max-[660px]:mb-6"
					as="h2"
					text="FAQ"
				/>
				<div className="rounded-lg">
					<div
						data-aos="fade-up"
						data-aos-anchor-placement="center-center"
						data-aos-duration={500}
					>
						<Accordion
							title="How can I use Resume.io for free?"
							answer="Resume.io has a few different tools you can use 100% for free without entering any credit card details. "
						/>
					</div>
					<div
						data-aos="fade-up"
						data-aos-anchor-placement="center-center"
						data-aos-duration={500}
					>
						<Accordion
							title="Can I download my resume to Word or PDF?"
							answer="Once your resume is ready there are a number of ways you can export your resumes or cover letters to start applying for jobs. You can download a PDF, DOCX(Word), or TXT file of your resume either directly from your Dashboard or from the Resume Editor. "
						/>
					</div>
					<div
						data-aos="fade-up"
						data-aos-anchor-placement="center-center"
						data-aos-duration={500}
					>
						<Accordion
							title="What should be on a resume?"
							answer="Personal and contact information.Regardless of the industry you're applying to, personal details are critical on a resume. Always include your name, address, telephone number, email address and date of birth. Other additional details could include your marital status, gender, nationality, driver's license, and even links to websites or social media accounts, as well as a professional photo."
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Faq;
