import { useExperienceEducation, useSelectorRedux } from "hooks";
import { isArray } from "lodash";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useStore from "../../zustand/store";
import cn from "classnames";
import parse from "html-react-parser";
// import { FaPhoneAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";
// import { FaLocationDot } from "react-icons/fa6";

export const Res5: React.FC = () => {
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
		<div className="flex bg-white" style={{ maxWidth: "700px", minHeight: "800px" }}>
			<div className="w-[36%] bg-amber-500 p-4">
				<h2 className="uppercase text-[28px] tracking-[.2em] mb-1">
					{resumeName ? resumeName : "Lauren"} {resumeLastName ? resumeLastName : "Chen"}
				</h2>
				<h3 className="uppercase text-[13px]">
					{resumeJobTitle ? resumeJobTitle : "Digital marketing specialist"}
				</h3>
				<div className="mt-5">
					<p className="uppercase w-full border-b-2 border-black pb-1 text-[16px]">
						contact
					</p>
					<div className="flex items-center text-xs mt-4 font-medium">
						{/* <FaPhoneAlt className="me-3" /> */}
						{resumePhone ? resumePhone : "(90) 053 11 02"}
					</div>
					<div className="flex items-center text-xs mt-4 font-medium">
						{/* <FaLocationDot className="me-3" /> */}
						{resumeAdress ? resumeAdress : "43w 13 street Tashkent"}
					</div>
					<div className="flex items-center text-xs mt-4 font-medium">
						{/* <FaEnvelope className="me-3" /> */}
						{resumeEmail ? resumeEmail : "lauren.chen@mail.com"}
					</div>
					<div className="flex items-center text-xs mt-4 font-medium">
						{/* <FaLinkedin className="me-3" /> */}
						{/* linkedin.com/lauren.chen */}
						{isArray(resumeSocialLinks) &&
							resumeSocialLinks.map((item, index) => (
								<p key={index} className="flex items-center">
									{item?.value1
										? `${item?.value1}: ${item?.value2}`
										: item?.value2}
								</p>
							))}
					</div>
				</div>
				<div className="mt-5">
					<p className="uppercase w-full border-b-2 border-black pb-1 text-[16px]">
						summary
					</p>
					<p className="mt-4 font-medium text-sm tracking-[.05em]">
						{resumeAbout
							? resumeAbout
							: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque autem
						suscipit ab ratione nihil soluta quasi accusamus, et quisquam itaque!`}
					</p>
				</div>
				<div className="mt-5">
					<p className="uppercase w-full border-b-2 border-black pb-1 text-[16px] mb-3">
						languages
					</p>
					<ul className="capitalize">
						{resumeLanguages?.length > 0
							? resumeLanguages?.map((el: any, index: number) => {
									return (
										<li
											className="w-full mb-2 text-sm custom-bullet-res5"
											key={index}
										>
											{el?.value1
												? `${el?.value1}: ${el?.value2}`
												: el?.value2}
										</li>
									);
								})
							: ["English: Beginner", "Uzbek: Native", "Russian: B1"].map(
									(el, index) => {
										return (
											<li
												className="w-full mb-2 text-sm custom-bullet-res5"
												key={index}
											>
												{el}
											</li>
										);
									}
								)}
						{/* <li className="w-full mb-2 text-sm custom-bullet-res5">uzbek</li>
						<li className="w-full mb-2 text-sm custom-bullet-res5">russian</li>
						<li className="w-full mb-2 text-sm custom-bullet-res5">english</li> */}
					</ul>
				</div>
			</div>
			<div className="w-[64%] p-6">
				<div>
					<p className="uppercase tracking-[.07em] w-full border-b-2 border-amber-500 pb-1 text-[16px] mb-4">
						Professional experience
					</p>
					{isArray(filteredExperience) &&
						filteredExperience.map((el, idx) => {
							return (
								<div className="mb-5">
									<p className="capitalize w-full text-xs text-gray mb-1">
										{el?.startDate ? el?.startDate : "January 2016"}{" "}
										<span> - </span> {el?.endDate ? el?.endDate : "2023"}
									</p>
									<h3 className="capitalize font-semibold text-xs mb-1">
										{el?.position ? el?.position : "Your Instruction Name"}
									</h3>
									<p className="capitalize text-xs mb-2">
										{el?.companyName ? el?.companyName : "Company name"}
									</p>
									<p className="text-xs mb-2 custom-bullet-res5 ps-3">
										{el?.experienceAbout
											? parse(el?.experienceAbout)
											: `manage degital sales, and streming accaunts to improve
											brand positioning and growth`}
									</p>
								</div>
							);
						})}
				</div>
				<div>
					<p className="uppercase tracking-[.07em] w-full border-b-2 border-amber-500 pb-1 text-[16px] mb-4">
						education
					</p>
					{isArray(filteredEducation) &&
						filteredEducation.map((item, index) => {
							return (
								<div className="mb-5">
									<p className="capitalize w-full text-xs text-gray mb-1">
										{item?.educationStartDate
											? item?.educationStartDate
											: "September 2007"}{" "}
										-{" "}
										{item?.educationEndDate
											? item?.educationEndDate
											: "May 2011"}
									</p>
									<h3 className="capitalize font-semibold text-xs mb-1">
										{item?.position
											? item?.position
											: "Masters in Human Resources"}
										,{" "}
										{item?.instructionName
											? item?.instructionName
											: "The University of Texas, Dallas"}
									</h3>
									<p className="capitalize text-xs mb-2">
										{item?.instructionName
											? item?.instructionName
											: "The University of Texas, Dallas"}
									</p>
									<p className="text-xs mb-2 custom-bullet-res5 ps-3">
										{item?.educationAbout
											? parse(item?.educationAbout)
											: `manage degital sales, and streming accaunts to improve
											brand positioning and growth`}
									</p>
								</div>
							);
						})}
				</div>
				<div>
					<p className="uppercase tracking-[.07em] w-full border-b-2 border-amber-500 pb-1 text-[16px] mb-4">
						skills
					</p>
					<ul className="capitalize text-xs flex flex-wrap">
						{resumeSkills?.length > 0
							? resumeSkills?.map((el: any, index: number) => {
									return (
										<li
											className="custom-bullet-res5 ps-2 mb-3 w-1/2"
											key={index}
										>
											{el}
										</li>
									);
								})
							: [
									"adobe photoshop",
									"adobe illustrator",
									"figma",
									"digital marketing",
								].map((el, index) => {
									return (
										<li
											className="custom-bullet-res5 ps-2 mb-3 w-1/2"
											key={index}
										>
											{el}
										</li>
									);
								})}
					</ul>
				</div>
				{dataVolunteering.length > 0 && (
					<div className="mt-2">
						<p className="uppercase tracking-[.07em] w-full border-b-2 border-amber-500 pb-1 text-[16px] mb-4">
							Volunteering
						</p>
						<div className="mb-5">
							<p className="capitalize w-full text-xs text-gray mb-1">
								{resumeVolunteeringStartDate
									? resumeVolunteeringStartDate
									: "15 mart 2021"}{" "}
								<span> </span>{" "}
								{resumeVolunteeringEndDate
									? resumeVolunteeringEndDate
									: "13 iyul 2022"}
							</p>
							<h3 className="capitalize font-semibold text-xs mb-1">
								{resumeVolunteeringActivityName}
							</h3>
							<p className="capitalize text-xs mb-2">{resumeVolunteeringAddress}</p>
							<p className="text-xs mb-2 ps-3">
								{resumeVolunteeringAbout ? parse(resumeVolunteeringAbout) : null}
							</p>
						</div>
					</div>
				)}

				{dataInterests.length > 0 && (
					<div className="mt-2">
						<p className="uppercase tracking-[.07em] w-full border-b-2 border-amber-500 pb-1 text-[16px] mb-4">
							interests
						</p>
						<p className="text-xs mt-2">
							{resumeInterests ? parse(resumeInterests) : null}
						</p>
					</div>
				)}
			</div>
		</div>
	);
};
