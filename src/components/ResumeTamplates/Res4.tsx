import { useExperienceEducation, useSelectorRedux } from "hooks";
import { isArray } from "lodash";
import React, { useEffect, useState } from "react";
import useStore from "../../zustand/store";
import cn from "classnames";
import parse from "html-react-parser";
import "./style.scss";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

export const Res4: React.FC = () => {
	const {
		resumeName,
		resumeLastName,
		resumeEmail,
		resumePhone,
		resumeAdress,
		resumeJobTitle,
		resumeSocialLinks,
		resumeAbout,
		resumePosition,
		resumeSkills,
		resumeEducationPosition,
		resumeInterests,
		resumeLanguages,
		resumeVolunteeringActivityName,
		resumeVolunteeringAddress,
		resumeVolunteeringStartDate,
		resumeVolunteeringEndDate,
		resumeVolunteeringAbout,
	} = useSelectorRedux();

	const {
		idExpirence,
		dataVolunteering,
		dataInterests,
		idEducation,
		setIdExpirence,
		setIdEducation,
	} = useStore();

	const dispatch = useDispatch();
	const { getExperienceData, getEducationData } = useExperienceEducation();
	const experience = getExperienceData();
	const education = getEducationData();
	const path = useLocation();
	const pathName = path.pathname.split("/").at(-1);

	const [filteredExperience, setFilteredExperience] = useState<
		{
			id?: number | string;
			position: string;
			companyName: string;
			startDate: string;
			endDate: string;
			experienceAbout: string;
		}[]
	>([]);
	const [filteredEducation, setFilteredEducation] = useState<
		{
			id?: number | string;
			position: string;
			instructionName: string;
			educationStartDate: string;
			educationEndDate: string;
			educationAbout: string;
		}[]
	>([]);

	useEffect(() => {
		if (idExpirence !== undefined) {
			const filtered = experience?.filter((el) => el.id !== idExpirence);
			setFilteredExperience(filtered);
			setIdExpirence(null);
		}
	}, [idExpirence, dispatch, resumePosition]);
	useEffect(() => {
		if (idEducation !== undefined) {
			const filtered = education?.filter((el) => el.id !== idEducation);
			setFilteredEducation(filtered);
			setIdEducation(null);
		}
	}, [idEducation, dispatch, resumeEducationPosition]);
	return (
		<>
			<div
				className="bg-white mx-auto p-8"
				style={{
					minWidth: "700px",
					maxWidth: "700px",
					minHeight: "800px",
					boxShadow: "0px 0px 7.41692px rgba(0,0,0,.15)",
				}}
			>
				<div
					className="bg-amber-500 mx-auto py-4 px-10 flex justify-between items-center mb-6 w-full"
					style={{ borderRadius: "50px 0 0 50px" }}
				>
					<div>
						<h1 className="text-2xl font-bold text-white capitalize">
							{resumeName ? resumeName : "Chris"}{" "}
							{resumeLastName ? resumeLastName : "Candidate"}
						</h1>
						<p className="text-white capitalize">
							{pathName === "download-resume"
								? resumeJobTitle
								: resumeJobTitle
									? resumeJobTitle
									: "Human Resource Manager"}
						</p>
					</div>
					<div className="text-right">
						<p className="text-white text-sm capitalize">
							{pathName === "download-resume"
								? resumeAdress
								: resumeAdress
									? resumeAdress
									: "4759 Sunnydale Lane"}
						</p>
						{pathName === "download-resume" ? (
							<p className="text-white text-sm">
								{resumePhone} {resumePhone ? <span> | </span> : null}
								{resumeEmail}
							</p>
						) : (
							<p className="text-white text-sm">
								{resumePhone ? resumePhone : "(90) 123-4567"} <span> | </span>
								{resumeEmail ? resumeEmail : "email@youremail.com"}
							</p>
						)}

						<p className="text-white text-sm flex flex-wrap text-right justify-end w-full">
							{isArray(resumeSocialLinks) &&
								resumeSocialLinks.map((item, index) => (
									<p key={index} className="flex items-center ms-3 text-right">
										{item?.value1
											? `${item?.value1}: ${item?.value2}`
											: item?.value2}
									</p>
								))}
						</p>
					</div>
				</div>
				<div>
					<h2 className="text-[16px] font-bold mb-2 capitalize">Professional Summary</h2>
					<p className="text-gray-700 font-bold text-[14px]">
						{pathName === "download-resume"
							? resumeAbout
							: resumeAbout
								? resumeAbout
								: `Human resources generalist with 8 years of experience in HR, including
						hiring and terminating, disciplining employees and helping department
						managers improve employee performance. Worked with labor unions to negotiate
						compensation packages for workers. Organized new hire training to ensure
						that all satety regulations are followe do workplace safety standards.
						Worked with OSHA`}
					</p>
				</div>
				<div className="max-w-700 mx-auto mt-6">
					<div className="flex items-center">
						<h2 className="text-xl text-amber-500 font-bold pr-3 capitalize">
							Professional Experience
						</h2>
						<div className="flex-1 h-1 bg-amber-500"></div>
					</div>
					{pathName === "download-resume"
						? isArray(filteredExperience) &&
							filteredExperience.map((el, idx) => {
								return (
									<div className="mb-4">
										<div
											className="bg-white mx-auto flex justify-between items-center mt-2"
											style={{ maxWidth: "700px" }}
										>
											<div>
												<h3 className="text-[16px] font-bold text-gray-800 capitalize">
													{el?.position}
												</h3>
												<h3 className="text-[14px] text-gray-800 font-bold capitalize">
													{el?.companyName}
												</h3>
											</div>
											<span className="text-[14px] text-gray-600">
												{el?.startDate} <span> </span> {el?.endDate}
											</span>
										</div>
										<div className="text-xs text-gray-700 mt-1">
											{el?.experienceAbout
												? parse(el?.experienceAbout)
												: null}
										</div>
									</div>
								);
							})
						: isArray(filteredExperience) &&
							filteredExperience.map((el, idx) => {
								return (
									<div className="mb-4">
										<div
											className="bg-white mx-auto flex justify-between items-center mt-2"
											style={{ maxWidth: "700px" }}
										>
											<div>
												<h3 className="text-[16px] font-bold text-gray-800 capitalize">
													{el?.position
														? el?.position
														: "Your Instruction Name"}
												</h3>
												<h3 className="text-[14px] text-gray-800 font-bold capitalize">
													{el?.companyName
														? el?.companyName
														: "Company name"}
												</h3>
											</div>
											<span className="text-[14px] text-gray-600">
												{el?.startDate ? el?.startDate : "January 2016"}{" "}
												<span> </span> {el?.endDate ? el?.endDate : "2023"}
											</span>
										</div>
										<div className="text-xs text-gray-700 mt-1">
											{el?.experienceAbout
												? parse(el?.experienceAbout)
												: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}
										</div>
									</div>
								);
							})}
				</div>
				<div className="mt-6">
					<div className="flex items-center">
						<h2 className="text-xl text-amber-500 font-bold pr-3 capitalize">
							Education
						</h2>
						<div className="flex-1 h-1 bg-amber-500"></div>
					</div>
					{pathName === "download-resume"
						? isArray(filteredEducation) &&
							filteredEducation.map((item, index) => {
								return (
									<div
										className={cn("flex flex-col gap-3", {
											"pt-10": index > 0,
										})}
										key={index}
									>
										<div className="text-gray-700 text-[14px] mt-2">
											<div className="flex justify-between">
												<h3 className="text-[16px] font-bold text-gray-800">
													{item?.position}{" "}
												</h3>
												<div className="flex items-center">
													{item?.educationStartDate} -{" "}
													{item?.educationEndDate}
												</div>
											</div>
											<span className="text-[16px] font-bold text-gray-800">
												{item?.instructionName}
											</span>
										</div>
										<p className="text-gray-700 text-[13px]">
											{item?.educationAbout
												? parse(item?.educationAbout)
												: null}
										</p>
									</div>
								);
							})
						: isArray(filteredEducation) &&
							filteredEducation.map((item, index) => {
								return (
									<div
										className={cn("flex flex-col gap-3", {
											"pt-10": index > 0,
										})}
										key={index}
									>
										<div className="text-gray-700 text-[14px] mt-2">
											<div className="flex justify-between">
												<h3 className="text-[16px] font-bold text-gray-800">
													{item?.position
														? item?.position
														: "Masters in Human Resources"}{" "}
												</h3>
												<div className="flex items-center">
													{item?.educationStartDate
														? item?.educationStartDate
														: "September 2007"}{" "}
													-{" "}
													{item?.educationEndDate
														? item?.educationEndDate
														: "May 2011"}
												</div>
											</div>
											<span className="text-[16px] font-bold text-gray-800">
												{item?.instructionName
													? item?.instructionName
													: "The University of Texas, Dallas"}
											</span>
										</div>
										<p className="text-gray-700 text-[13px]">
											{item?.educationAbout
												? parse(item?.educationAbout)
												: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."}
										</p>
									</div>
								);
							})}
				</div>
				<div className="mt-6">
					<div className="flex items-center">
						<h2 className="text-xl text-amber-500 font-bold pr-3 capitalize">
							Key Skills
						</h2>
						<div className="flex-1 h-1 bg-amber-500"></div>
					</div>
					<ul className="list-disc list-inside text-gray-700 text-[13px] mt-2">
						{/* {resumeSkills?.length > 0
							? resumeSkills?.map((el: any, index: number) => {
									return (
										<li className="custom-bullet" key={index}>
											{el}
										</li>
									);
								})
							: [
									"Detail oriented",
									"Well-versed in Texas employment law",
									"Excellent written and oral communication skills",
									"Develops positive workplace relationships",
								].map((el, index) => {
									return (
										<li className="custom-bullet" key={index}>
											{el}
										</li>
									);
								})} */}
						{pathName === "download-resume"
							? resumeSkills?.map((el: any, index: number) => {
									return (
										<li className="custom-bullet capitalize" key={index}>
											{el}
										</li>
									);
								})
							: resumeSkills?.length > 0
								? resumeSkills?.map((el: any, index: number) => {
										return (
											<li className="custom-bullet capitalize" key={index}>
												{el}
											</li>
										);
									})
								: [
										"Detail oriented",
										"Well-versed in Texas employment law",
										"Excellent written and oral communication skills",
										"Develops positive workplace relationships",
									].map((el, index) => {
										return (
											<li className="custom-bullet capitalize" key={index}>
												{el}
											</li>
										);
									})}
					</ul>
				</div>
				<div className="mt-6">
					<div className="flex items-center">
						<h2 className="text-xl text-amber-500 font-bold pr-3 capitalize">
							Languages
						</h2>
						<div className="flex-1 h-1 bg-amber-500"></div>
					</div>
					<ul className="list-disc list-inside text-gray-700 text-[13px] mt-2">
						{/* {resumeLanguages?.length > 0
							? resumeLanguages?.map((el: any, index: number) => {
									return (
										<li className="custom-bullet" key={index}>
											{el?.value1
												? `${el?.value1}: ${el?.value2}`
												: el?.value2}
										</li>
									);
								})
							: ["English: Beginner", "Uzbek: Native", "Russian: B1"].map(
									(el, index) => {
										return (
											<li className="custom-bullet" key={index}>
												{el}
											</li>
										);
									}
								)} */}
						{pathName === "download-resume"
							? isArray(resumeLanguages) &&
								resumeLanguages.map((el, index) => (
									<li className="custom-bullet capitalize" key={index}>
										{el?.value1 ? `${el?.value1}: ${el?.value2}` : el?.value2}
									</li>
								))
							: isArray(resumeLanguages)
								? resumeLanguages.map((el, index) => (
										<li className="custom-bullet capitalize" key={index}>
											{el?.value1
												? `${el?.value1}: ${el?.value2}`
												: el?.value2}
										</li>
									))
								: ["English: Beginner", "Uzbek: Native", "Russian: B1"].map(
										(el, index) => {
											return (
												<li
													className="custom-bullet capitalize"
													key={index}
												>
													{el}
												</li>
											);
										}
									)}
					</ul>
				</div>
				{dataVolunteering.length > 0 && (
					<div className="mt-6">
						<div className="flex items-center">
							<h2 className="text-xl text-amber-500 font-bold pr-3 capitalize">
								Volunteering
							</h2>
							<div className="flex-1 h-1 bg-amber-500"></div>
						</div>
						<div className="mb-4 mt-2">
							<p className="font-semibold text-sm capitalize">
								{resumeVolunteeringActivityName}
							</p>
							<p className="flex justify-between py-3">
								<span className="text-xs capitalize">
									{resumeVolunteeringAddress}
								</span>
								<span className="text-xs">
									{resumeVolunteeringStartDate} <span> </span>{" "}
									{resumeVolunteeringEndDate}
								</span>
							</p>
							<div className="text-xs">
								{resumeVolunteeringAbout ? parse(resumeVolunteeringAbout) : null}
							</div>
						</div>
					</div>
				)}
				{dataInterests.length > 0 && (
					<div className="mt-6">
						<div className="flex items-center">
							<h2 className="text-xl text-amber-500 font-bold pr-3 capitalize">
								interests
							</h2>
							<div className="flex-1 h-1 bg-amber-500"></div>
						</div>
						<p className="text-xs mt-2">
							{resumeInterests ? parse(resumeInterests) : null}
						</p>
					</div>
				)}
			</div>
		</>
	);
};
