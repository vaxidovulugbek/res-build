import RoutesPath from "helpers/RoutesPath";
import React from "react";
import { Title, Text, Button } from "../../ui";
import ResumesAnimation from "./ResumesAnimation";
import "./Making_Resume.scss";

const Making_Resume: React.FC = () => {
	return (
		<section className="section">
			<div className="container mt-16">
				<div
					data-aos="fade-up"
					data-aos-anchor-placement="center-center"
					data-aos-duration={500}
					className="mres h-[400px] flex rounded-[40px] shadow-white"
				>
					<div>
						<svg
							className="mres__l-img"
							width={73}
							height={69}
							viewBox="0 0 73 69"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect
								width="14.438"
								height="14.0034"
								rx={4}
								transform="matrix(1 0 0.00843759 0.999964 0.611328 0)"
								fill="#F4A07C"
							/>
							<path
								d="M8.62227 25.7093C3.78124 32.542 0.334565 44.3069 13.2991 45.6371C25.2987 45.6082 36.5558 40.5033 33.95 34.7904C32.4722 32.9863 29.4884 30.6626 23.8125 37.0282C20.6489 42.268 16.8973 53.3317 32.7622 54.4408C54.8358 56.9042 51.295 44.0617 71.3425 55.3565"
								stroke="#F4A07C"
								strokeWidth={2}
								strokeLinecap="round"
							/>
						</svg>
						<svg
							className="mres__r-img"
							width={95}
							height={71}
							viewBox="0 0 95 71"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M61.8823 28.7076C59.1658 33.7377 52.6143 42.344 48.1404 36.5293C45.7436 33.4142 43.407 28.5241 40.5636 36.4781L38.8792 42.2317C37.6944 45.5457 35.7656 43.1096 35.0127 38.8834C33.6953 31.4873 28.3277 29.0475 23.0991 32.8424C18.7752 35.8421 9.51666 43.3423 7.07305 49.3448"
								stroke="#8C80F6"
								strokeWidth={2}
								strokeLinecap="round"
							/>
							<rect
								width="13.9124"
								height="13.9069"
								rx={4}
								transform="matrix(0.429535 -0.905358 0.898763 0.433658 68.9102 27.3242)"
								fill="#AC9BF6"
							/>
						</svg>
					</div>

					<div className="mres__info flex flex-col justify-between p-12">
						<div>
							<Title
								className="mres__info-title mb-5 w-4/5 font-semibold"
								as="h2"
								text="Ready to start making your resume?"
							/>
							<Text
								className="mres__info-text w-11/12"
								as="p"
								size="lg"
								text="Dont let your resume hold you back from getting the job you want. Our builder software helps you create a resume that highlights your qualifications and lands you more interviews"
							/>
						</div>
						<Button
							className="hover:underline decoration-1"
							link={RoutesPath.resume}
							text="Try Our Builder"
						/>
					</div>
					<div className="mres__resumes flex overflow-hidden">
						<ResumesAnimation className="mt-0" num="1" />
						<ResumesAnimation className="ml-3" num="2" />
					</div>
				</div>
			</div>
		</section>
	);
};
// overflow-hidden
export default Making_Resume;
