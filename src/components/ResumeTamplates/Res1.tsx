import { useExperienceEducation, useSelectorRedux } from "hooks";
import { isArray, isBoolean, isString } from "lodash";
import React, { useEffect, useState } from "react";
import cn from "classnames";
import parse from "html-react-parser";
import useStore from "../../zustand/store";
import { useDispatch } from "react-redux";
import globe from "assets/imgs/icons/globe.svg";
import letter from "assets/imgs/icons/letter.svg";
import phone from "assets/imgs/icons/phone.svg";
import location from "assets/imgs/icons/location.svg";
export const Res1: React.FC = () => {
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
		resumeCompanyName,
		resumeStartDate,
		resumeEndDate,
		resumeAboutExpirience,
		resumeSkills,
		resumeEducationName,
		resumeEducationPosition,
		resumeEducationStartDate,
		resumeEducationEndDate,
		resumeAboutEducation,
		resumeInterests,
		resumeLanguages,
		resumeVolunteeringActivityName,
		resumeVolunteeringAddress,
		resumeVolunteeringStartDate,
		resumeVolunteeringEndDate,
		resumeVolunteeringAbout,
	} = useSelectorRedux();
	const dispatch = useDispatch();
	const { getExperienceData, getEducationData } = useExperienceEducation();
	const experience = getExperienceData();
	const education = getEducationData();
	const {
		countExpirence,
		countEducation,
		idExpirence,
		dataVolunteering,
		dataInterests,
		idEducation,
		setIdExpirence,
		setIdEducation,
		setDataVolunteering,
		setDataInterests,
	} = useStore();

	// const experience: {
	// 	id?: number | string;
	// 	position: string;
	// 	companyName: string;
	// 	startDate: string;
	// 	endDate: string;
	// 	experienceAbout: string;
	// }[] = [];
	// const education: {
	// 	id?: number | string;
	// 	position: string;
	// 	instructionName: string;
	// 	educationStartDate: string;
	// 	educationEndDate: string;
	// 	educationAbout: string;
	// }[] = [];
	// for (let i = 0; i < countExpirence.length; i++) {
	// 	experience.push({
	// 		id: countExpirence[i]?.id,
	// 		position: resumePosition[countExpirence[i]?.id],
	// 		companyName: resumeCompanyName[countExpirence[i]?.id],
	// 		startDate: resumeStartDate[countExpirence[i]?.id],
	// 		endDate: resumeEndDate[countExpirence[i]?.id],
	// 		experienceAbout: resumeAboutExpirience[countExpirence[i]?.id],
	// 	});
	// }
	// for (let i = 0; i < countEducation.length; i++) {
	// 	education.push({
	// 		id: countEducation[i]?.id,
	// 		position: resumeEducationName[countEducation[i]?.id],
	// 		instructionName: resumeEducationPosition[countEducation[i]?.id],
	// 		educationStartDate: resumeEducationStartDate[countEducation[i]?.id],
	// 		educationEndDate: resumeEducationEndDate[countEducation[i]?.id],
	// 		educationAbout: resumeAboutEducation[countEducation[i]?.id],
	// 	});
	// }

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
				className="main max-w-[700px] mx-auto pt-12 pb-6"
				style={{ boxShadow: "0px 0px 7.41692px rgba(0,0,0,.15)" }}
			>
				<h1 className="text-center uppercase tracking-[0.23em] text-[34px] text-gray-600 font-medium">
					{isString(resumeName)
						? resumeName.length < 1
							? "JONATHAN"
							: resumeName.trim()
						: "JONATHAN "}
					<span> </span>
					{isString(resumeLastName)
						? resumeLastName.length < 1
							? "PATTERSON"
							: resumeLastName.trim()
						: "PATTERSON"}
				</h1>
				<h5 className="text-center uppercase tracking-[0.25em] text-sm text-gray-600 mt-2">
					{resumeJobTitle ? resumeJobTitle : "graphic designer"}
				</h5>
				<div className="border-solid border-[1px] border-gray-400 rounded-full mx-10 mt-5" />
				<div className="main-info flex">
					<div className="w-[40%] bg-gray-100 text-gray-600 px-10 text-xs py-3 font-medium">
						<h3 className="uppercase text-gray-600 tracking-[0.25em] text-base font-semibold pb-3">
							contact
						</h3>
						<div className="flex flex-col gap-3">
							{/* <p className={cn("flex items-center", { hidden: !resumePhone })}> */}
							<p className={cn("flex items-center")}>
								<img className="me-2 w-3" src={phone} alt="phone icon" />
								{resumePhone ? resumePhone : "(90) 123 45 67"}
							</p>
							<p className="flex items-center">
								<img className="me-2 w-3" src={letter} alt="envelope icon" />
								{resumeEmail ? resumeEmail : "example@gmail.com"}
							</p>

							{isArray(resumeSocialLinks) && resumeSocialLinks.length > 1 ? (
								resumeSocialLinks.map((item, index) => (
									<p key={index} className="flex items-center">
										<img className="me-2 w-3" src={globe} alt="globe icon" />
										{item?.value1
											? `${item?.value1}: ${item?.value2}`
											: item?.value2}
									</p>
								))
							) : (
								<p className="flex items-center">
									<img className="me-2 w-3" src={globe} alt="globe icon" />
									https://www.linkedin.com/
								</p>
							)}
							<p className={cn("flex items-center")}>
								<img className="me-2 w-3" src={location} alt="location icon" />
								{resumeAdress ? resumeAdress : "43w 13 street Tashkent"}
							</p>
						</div>
						<div className="border-dashed border-[1px] border-gray-400 rounded-full my-6" />
						<h3 className="uppercase text-gray-600 tracking-[0.25em] text-base font-semibold pb-3">
							skills
						</h3>
						<div className="flex flex-col gap-3">
							{resumeSkills?.length > 0
								? resumeSkills?.map((el: any, index: number) => {
										return <p key={index}>{el}</p>;
									})
								: ["react", "angular", ".net"].map((el, index) => {
										return <p key={index}>{el}</p>;
									})}
						</div>
						<div className="border-dashed border-[1px] border-gray-400 rounded-full my-6" />
						<h3 className="uppercase text-gray-600 tracking-[0.25em] text-base font-semibold pb-3">
							education
						</h3>
						{isArray(filteredEducation) &&
							filteredEducation.map((item, index) => {
								return (
									<div
										className={cn("flex flex-col gap-3", {
											"pt-10": index > 0,
										})}
										key={index}
									>
										<p className="font-semibold capitalize">
											Your Degree Name: {item?.position}
										</p>
										<p className="font-semibold text-sm capitalize">
											{item?.instructionName
												? item?.instructionName
												: "industry, profession"}
										</p>
										<p>
											{item?.educationStartDate
												? item?.educationStartDate
												: "2020"}
											-
											{item?.educationEndDate
												? item?.educationEndDate
												: "2024"}
										</p>
										<p>
											{item?.educationAbout
												? parse(item?.educationAbout)
												: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."}
										</p>
									</div>
								);
							})}

						{/* <div className="flex flex-col gap-3">
							<p className="font-semibold">Your Degree Name</p>
							<p className="font-semibold text-sm">Your Instruction Name</p>
							<p>2016-2018</p>
							<p>Lorem ipsum dolor sit amet adipisicing elit.</p>
						</div> */}
						<div className="border-dashed border-[1px] border-gray-400 rounded-full my-6" />
						<h3 className="uppercase text-gray-600 tracking-[0.25em] text-base font-semibold pb-3">
							languages
						</h3>
						<div className="flex flex-col gap-3">
							{isArray(resumeLanguages) ? (
								resumeLanguages.map((item, index) => (
									<p key={index} className="flex items-center">
										{item?.value1
											? `${item?.value1}: ${item?.value2}`
											: item?.value2}
									</p>
								))
							) : (
								<div className="flex flex-col gap-3">
									<p className="flex items-center">English: Beginner</p>
									<p className="flex items-center">Uzbek: Native</p>
									<p className="flex items-center">Russian: B1</p>
								</div>
							)}
						</div>
					</div>
					<div className="w-[60%] py-3 pl-5 px-10 text-gray-600">
						<div>
							<h3 className="uppercase tracking-[0.25em] text-base font-semibold pb-3">
								profile
							</h3>
							<p className="profile-info text-xs font-medium tracking-tighter">
								{resumeAbout
									? resumeAbout
									: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quo
							esse, deserunt tenetur et adipisci recusandae totam asperiores!
							Molestias corporis fugit iusto neque, itaque molestiae magni. Aliquid,
							praesentium animi doloremque repellat earum excepturi consequuntur
							necessitatibus quo at natus, molestias.`}
							</p>
						</div>
						<div className="border-dashed border-[1px] border-gray-400 rounded-full my-6" />
						<div>
							<h3 className="uppercase tracking-[0.25em] text-base font-semibold pb-3">
								work experience
							</h3>
							{isArray(filteredExperience) &&
								filteredExperience.map((el, idx) => {
									return (
										<div key={idx} className="mb-4">
											<p className="font-semibold text-sm capitalize">
												{el?.position
													? el?.position
													: "Your Instruction Name"}
											</p>
											<p className="flex justify-between py-3">
												<span className="text-xs capitalize">
													{el?.companyName
														? el?.companyName
														: "Company name"}
												</span>
												<span className="text-xs">
													{el?.startDate ? el?.startDate : "2020"}{" "}
													<span> </span>{" "}
													{el?.endDate ? el?.endDate : "2023"}
												</span>
											</p>
											<div className="text-xs">
												{el?.experienceAbout
													? parse(el?.experienceAbout)
													: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}
											</div>
										</div>
									);
								})}
						</div>
						{dataInterests.length > 0 && (
							<div>
								<h3 className="uppercase tracking-[0.25em] text-base font-semibold pb-3">
									interests
								</h3>
								<p className="text-xs">
									{resumeInterests ? parse(resumeInterests) : null}
								</p>
							</div>
						)}
						{dataVolunteering.length > 0 && (
							<div>
								<h3 className="uppercase tracking-[0.25em] text-base font-semibold">
									Volunteering
								</h3>
								<div className="mb-4">
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
										{resumeVolunteeringAbout
											? parse(resumeVolunteeringAbout)
											: null}
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
				<div className="border-solid border-[1px] border-gray-400 rounded-full mx-10 mb-5" />
			</div>
		</>
	);
};
