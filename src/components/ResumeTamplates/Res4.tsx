import React from "react";
import "./style.scss";

export const Res4: React.FC = () => {
	return (
		<>
			{" "}
			<div className="bg-white mx-auto p-8" style={{ maxWidth: "700px" }}>
				<div
					className="bg-amber-500 mx-auto py-4 px-10 flex justify-between items-center mb-6"
					style={{ maxWidth: "700px", borderRadius: "50px 0 0 50px" }}
				>
					<div>
						<h1 className="text-2xl font-bold text-white">Chris Candidate</h1>
						<p className="text-white">Human Resource Manager</p>
					</div>
					<div className="text-right">
						<p className="text-white text-sm">4759 Sunnydale Lane, Plano, TX 75071</p>
						<p className="text-white text-sm">(469) 385-2948 | email@youremail.com</p>
					</div>
				</div>
				<div>
					<h2 className="text-[16px] font-bold mb-2">Professional Summary</h2>
					<p className="text-gray-700 font-bold text-[14px]">
						Human resources generalist with 8 years of experience in HR, including
						hiring and terminating, disciplining employees and helping department
						managers improve employee performance. Worked with labor unions to negotiate
						compensation packages for workers. Organized new hire training to ensure
						that all satety regulations are followe do workplace safety standards.
						Worked with OSHA
					</p>
				</div>
				<div className="max-w-700 mx-auto">
					<div>
						<div className="pt-6">
							<div className="mb-4">
								<div className="bg-white mx-auto " style={{ maxWidth: "700px" }}>
									<div>
										<div className="flex items-center">
											<h2 className="text-xl text-amber-500 font-bold pr-3">
												Professional Experience
											</h2>
											<div className="flex-1 h-1 bg-amber-500"></div>
										</div>
										<div className="flex justify-between items-center mt-2">
											<div>
												<h3 className="text-[16px] font-bold text-gray-800">
													Jim s Widget Factory, Plano, TX
												</h3>
												<h3 className="text-[14px] text-gray-800 font-bold">
													Human Resources Manager
												</h3>
											</div>
											<span className="text-[14px] text-gray-600">
												January 2016 - Present
											</span>
										</div>
									</div>
								</div>
								<ul className="list-disc list-inside text-[13px] text-gray-700 mt-1">
									<li className="custom-bullet">
										Implement effective company policies to ensure that all
										practices comply with labor and employment regulations
									</li>
									<li className="custom-bullet">
										Increased employee retention rates by managing workplace
										satisfaction to an over 90% success rate by creating and
										maintaining a positive work environment
									</li>
									<li className="custom-bullet">
										Develop targeted outreach practices to increase minority
										recruitment and ensure compliance with affirmative action
										policies
									</li>
									<li className="custom-bullet">
										Monitor scheduled in and out times as well as employee
										breaks to ensure that proper employment laws are met
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-6">
					<div className="flex items-center">
						<h2 className="text-xl text-amber-500 font-bold pr-3">Education</h2>
						<div className="flex-1 h-1 bg-amber-500"></div>
					</div>
					<h3 className="text-gray-700 text-[14px] mt-2">
						Masters in Human Resources September 2007 - May 2011
						<span className="block text-sm font-normal">
							The University of Texas, Dallas
						</span>
						<span className="block text-sm font-normal"></span>
					</h3>
					<ul className="list-disc list-inside text-gray-700 text-[13px]">
						<li className="custom-bullet">Academic Awardee of AY 2007-2008</li>
					</ul>
				</div>
				<div className="mt-6">
					<div className="flex items-center">
						<h2 className="text-xl text-amber-500 font-bold pr-3">Key Skills</h2>
						<div className="flex-1 h-1 bg-amber-500"></div>
					</div>
					<ul className="list-disc list-inside text-gray-700 text-[13px] mt-2">
						<li className="custom-bullet">Detail oriented</li>
						<li className="custom-bullet">Well-versed in Texas employment law</li>
						<li className="custom-bullet">
							Excellent written and oral communication skills
						</li>
						<li className="custom-bullet">Develops positive workplace relationships</li>
					</ul>
				</div>
			</div>
		</>
	);
};
