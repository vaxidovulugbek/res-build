import RoutesPath from "helpers/RoutesPath";
import React from "react";
import { Title, Text, Button } from "../../ui";
import ResumesAnimation from "./ResumesAnimation";
import "./Making_Resume.scss";

const Making_Resume: React.FC = () => {
	return (
		<section className="section">
			<div className="container mt-16">
				<div className="mres h-[400px] flex rounded-[40px] shadow-white">
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
						<Button link={RoutesPath.resume} text="Try Our Builder" />
					</div>
					<div className="mres__resumes">
						<ResumesAnimation />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Making_Resume;
