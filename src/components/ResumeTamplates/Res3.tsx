import { useExperienceEducation, useSelectorRedux } from "hooks";
import { isArray } from "lodash";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useStore from "../../zustand/store";
import parse from "html-react-parser";
import globe from "assets/imgs/icons/globe.svg";
import letter from "assets/imgs/icons/letter.svg";
import phone from "assets/imgs/icons/phone.svg";
import location from "assets/imgs/icons/location.svg";
import { useLocation } from "react-router-dom";

export const Res3: React.FC = () => {
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
				className="p-10"
				style={{
					maxWidth: "700px",
					minWidth: "700px",
					minHeight: "800px",
					boxShadow: "0px 0px 7.41692px rgba(0,0,0,.15)",
				}}
			>
				<h2 className="uppercase text-[32px] tracking-[8px] font-medium">
					{resumeName ? resumeName : "jennifer"}{" "}
					{resumeLastName ? resumeLastName : "carter"}
				</h2>
				<p className="text-base uppercase tracking-widest text-gray-500">
					{pathName === "download-resume"
						? resumeJobTitle
						: resumeJobTitle
							? resumeJobTitle
							: "managing director"}
				</p>
				<ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-500 my-2">
					<li className="text-[12px]">
						{pathName === "download-resume" ? (
							resumePhone ? (
								<p className="flex items-center">
									<img className="me-2 w-3" src={phone} alt="phone icon" />{" "}
									<a href={`tel:${{ resumePhone }}`}>{resumePhone}</a>
								</p>
							) : null
						) : resumePhone ? (
							<p className="flex items-center">
								<img className="me-2 w-3" src={phone} alt="phone icon" />{" "}
								<a href={`tel:${{ resumePhone }}`}>{resumePhone}</a>
							</p>
						) : (
							<p className="flex items-center">
								<img className="me-2 w-3" src={phone} alt="phone icon" /> (90)
								123-45-67
							</p>
						)}
					</li>
					<li className="text-[12px]">
						{pathName === "download-resume" ? (
							resumeEmail ? (
								<p className="flex items-center">
									<img className="me-2 w-3" src={letter} alt="envelope icon" />
									{resumeEmail}
								</p>
							) : null
						) : resumeEmail ? (
							<p className="flex items-center">
								{" "}
								<img className="me-2 w-3" src={letter} alt="envelope icon" />
								{resumeEmail}
							</p>
						) : (
							<p className="flex items-center">
								<img className="me-2 w-3" src={letter} alt="envelope icon" />{" "}
								example@email.com
							</p>
						)}
					</li>
					<li className="text-[12px]">
						{pathName === "download-resume" ? (
							resumeAdress ? (
								<p className="flex items-center capitalize">
									{" "}
									<img className="me-2 w-3" src={location} alt="location icon" />
									{resumeAdress}
								</p>
							) : null
						) : resumeAdress ? (
							<p className="flex items-center capitalize">
								{" "}
								<img className="me-2 w-3" src={location} alt="location icon" />
								{resumeAdress}
							</p>
						) : (
							<p className="flex items-center">
								<img className="me-2 w-3" src={location} alt="location icon" /> 43w
								13 street Tashkent
							</p>
						)}
					</li>
					{pathName === "download-resume" ? (
						isArray(resumeSocialLinks) &&
						resumeSocialLinks.map((item, index) => (
							<li key={index} className="flex items-center text-[12px]">
								<img className="me-2 w-3" src={globe} alt="globe icon" />
								{item?.value1 ? `${item?.value1}: ${item?.value2}` : item?.value2}
							</li>
						))
					) : isArray(resumeSocialLinks) ? (
						resumeSocialLinks.map((item, index) => (
							<li key={index} className="flex items-center text-[12px]">
								<img className="me-2 w-3" src={globe} alt="globe icon" />
								{item?.value1 ? `${item?.value1}: ${item?.value2}` : item?.value2}
							</li>
						))
					) : (
						<li className="flex items-center text-[12px]">
							<img className="me-2 w-3" src={globe} alt="globe icon" />
							https://www.linkedin.com/
						</li>
					)}
				</ul>
				<div className="w-full border-solid inline-block border-t-1 mt-2 border-gray-400">
					<p className="text-base my-2 uppercase tracking-widest font-semibold">
						profile
					</p>
					<p className="w-full text-[12px] text-gray-500 tracking-wide">
						{pathName === "download-resume"
							? resumeAbout
							: resumeAbout
								? resumeAbout
								: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, officiis.
						Saepe, amet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
						molestiae quia sapiente itaque numquam nisi fuga voluptas et?`}
					</p>
				</div>
				<div className="w-full border-solid inline-block border-t-1 mt-6 border-gray-400">
					<div className="flex items-center">
						<p className="text-base my-2 uppercase tracking-widest font-semibold">
							experience
						</p>
						{/* <p className="text-[14px] ms-4">2 years 1 month</p> */}
					</div>
					{pathName === "download-resume"
						? isArray(filteredExperience) &&
							filteredExperience.map((el, idx) => {
								return (
									<div key={idx} className="[&:not(:last-child)]:mb-4">
										<p className="text-[14px] mb-2 capitalize tracking-widest">
											{el?.position}
										</p>
										<div className="flex items-center justify-between">
											<span className="text-[14px] text-gray-500 capitalize">
												{el?.companyName}
											</span>
											<span className="text-[12px] text-gray-500">
												{el?.startDate} <span> - </span> {el?.endDate}
											</span>
										</div>
										<p className="text-[12px] text-gray-500 mt-2">
											{el?.experienceAbout
												? parse(el?.experienceAbout)
												: null}
										</p>
									</div>
								);
							})
						: isArray(filteredExperience) &&
							filteredExperience.map((el, idx) => {
								return (
									<div key={idx} className="[&:not(:last-child)]:mb-4">
										<p className="text-[14px] mb-2 capitalize tracking-widest">
											{el?.position ? el?.position : "job position"}
										</p>
										<div className="flex items-center justify-between">
											<span className="text-[14px] text-gray-500 capitalize">
												{el?.companyName ? el?.companyName : "Company name"}
											</span>
											<span className="text-[12px] text-gray-500">
												{el?.startDate ? el?.startDate : "January 2016"}{" "}
												<span> - </span>{" "}
												{el?.endDate ? el?.endDate : "2023"}
											</span>
										</div>
										<p className="text-[12px] text-gray-500 mt-2">
											{el?.experienceAbout
												? parse(el?.experienceAbout)
												: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
											Quis id a harum numquam ab praesentium aut iste nam. Lorem
											ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
											consectetur adipisicing elit. Esse dolorem numquam hic
											dolor, optio aspernatur quos omnis doloremque delectus.`}
										</p>
									</div>
								);
							})}
				</div>
				<div className="w-full border-solid inline-block border-t-1 mt-6 border-gray-400">
					<p className="text-[base] my-2 uppercase tracking-widest font-semibold">
						education
					</p>
					{pathName === "download-resume"
						? isArray(filteredEducation) &&
							filteredEducation.map((item, idx) => {
								return (
									<div key={idx} className="[&:not(:last-child)]:mb-4">
										<p className="text-[14px] mb-2 capitalize tracking-widest">
											{item?.position}{" "}
										</p>
										<div className="flex items-center justify-between">
											<span className="text-[14px] text-gray-500 capitalize">
												{item?.instructionName}
											</span>
											<span className="text-[12px] text-gray-500">
												{item?.educationStartDate} <span> - </span>{" "}
												{item?.educationEndDate}
											</span>
										</div>
										<p className="text-[12px] text-gray-500 mt-2">
											{item?.educationAbout
												? parse(item?.educationAbout)
												: null}
										</p>
									</div>
								);
							})
						: isArray(filteredEducation) &&
							filteredEducation.map((item, idx) => {
								return (
									<div key={idx} className="[&:not(:last-child)]:mb-4">
										<p className="text-[14px] mb-2 capitalize tracking-widest">
											{item?.position ? item?.position : "your degree"}{" "}
										</p>
										<div className="flex items-center justify-between">
											<span className="text-[14px] text-gray-500 capitalize">
												{item?.instructionName
													? item?.instructionName
													: "name of university"}
											</span>
											<span className="text-[12px] text-gray-500">
												{item?.educationStartDate
													? item?.educationStartDate
													: "September 2007"}{" "}
												<span> - </span>{" "}
												{item?.educationEndDate
													? item?.educationEndDate
													: "May 2011"}
											</span>
										</div>
										<p className="text-[12px] text-gray-500 mt-2">
											{item?.educationAbout
												? parse(item?.educationAbout)
												: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
											Quis id a harum numquam ab praesentium aut iste nam. Lorem
											ipsum dolor sit amet consectetur.`}
										</p>
									</div>
								);
							})}
				</div>
				{dataVolunteering.length > 0 && (
					<div className="w-full border-solid inline-block border-t-1 mt-6 border-gray-400">
						<p className="text-[base] my-2 uppercase tracking-widest font-semibold">
							Volunteering
						</p>
						<div>
							<p className="text-[14px] my-2 capitalize tracking-widest">
								{pathName === "download-resume"
									? resumeVolunteeringActivityName
									: resumeVolunteeringActivityName
										? resumeVolunteeringActivityName
										: "WRITE YOUR Volunteering Activity Name HERE"}
							</p>
							<div className="flex items-center justify-between">
								<span className="text-[14px] text-gray-500 capitalize">
									{pathName === "download-resume"
										? resumeVolunteeringAddress
										: resumeVolunteeringAddress
											? resumeVolunteeringAddress
											: "Volunteering Address"}
								</span>
								<span className="text-[12px] text-gray-500">
									{pathName === "download-resume"
										? resumeVolunteeringStartDate
										: resumeVolunteeringStartDate
											? resumeVolunteeringStartDate
											: "January 2016"}{" "}
									<span> - </span>{" "}
									{resumeVolunteeringEndDate ? resumeVolunteeringEndDate : "2023"}
								</span>
							</div>
							{pathName === "download-resume" ? (
								<p className="text-[12px] text-gray-500 mt-2">
									{resumeVolunteeringAbout
										? parse(resumeVolunteeringAbout)
										: null}
								</p>
							) : (
								<p className="text-[12px] text-gray-500 mt-2">
									{resumeVolunteeringAbout
										? parse(resumeVolunteeringAbout)
										: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
											Quis id a harum numquam ab praesentium aut iste nam. Lorem
											ipsum dolor sit amet consectetur.`}
								</p>
							)}
						</div>
					</div>
				)}
				<div className="w-full border-solid inline-block border-t-1 mt-6 border-gray-400">
					<div className="flex justify-between">
						<div className="w-1/2 pe-1">
							<p className="text-[base] my-2 uppercase tracking-widest font-semibold">
								languages
							</p>
							{pathName === "download-resume" ? (
								<ul>
									{resumeLanguages?.map((el: any, index: number) => {
										return (
											<li
												className="text-[12px] text-gray-500 mt-1 capitalize"
												key={index}
											>
												{el?.value1
													? `${el?.value1}: ${el?.value2}`
													: el?.value2}
											</li>
										);
									})}
								</ul>
							) : (
								<ul>
									{resumeLanguages?.length > 0
										? resumeLanguages?.map((el: any, index: number) => {
												return (
													<li
														className="text-[12px] text-gray-500 mt-1 capitalize"
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
															className="text-[12px] text-gray-500 mt-1 capitalize"
															key={index}
														>
															{el}
														</li>
													);
												}
											)}
								</ul>
							)}
						</div>
						<div className="w-1/2 ps-1">
							<p className="text-[base] my-2 uppercase tracking-widest font-semibold">
								skills
							</p>
							<ul className="flex flex-wrap ">
								{pathName === "download-resume"
									? resumeSkills?.map((el: any, index: number) => {
											return (
												<li
													className="text-[12px] text-gray-500 mt-2 me-4 capitalize"
													key={index}
												>
													{el}
												</li>
											);
										})
									: resumeSkills?.length > 0
										? resumeSkills?.map((el: any, index: number) => {
												return (
													<li
														className="text-[12px] text-gray-500 mt-2 me-4 capitalize"
														key={index}
													>
														{el}
													</li>
												);
											})
										: [
												"Communication",
												"Leadership",
												"Decision-making",
												"Strategy",
												"Management",
											].map((el, index) => {
												return (
													<li
														className="text-[12px] text-gray-500 mt-2 me-4 capitalize"
														key={index}
													>
														{el}
													</li>
												);
											})}
							</ul>
						</div>
					</div>
				</div>
				{dataInterests.length > 0 && (
					<div className="w-1/2 ps-1 mt-6">
						<p className="text-[base] my-2 uppercase tracking-widest font-semibold">
							interests
						</p>
						<ul className="flex flex-wrap ">
							<li className="text-[12px] text-gray-500 mt-2 me-4">
								{resumeInterests ? parse(resumeInterests) : null}
							</li>
						</ul>
					</div>
				)}
			</div>
			{/* <div className="p-10">
				<div className="h-2 bg-black mt-[10px] mb-[30px]" />
				<h1 className="text-center text-[38px] font-semibold text-gray-700">
					Ibrohimov Shohobiddin
				</h1>
				<h3 className="text-center text-[28px] font-medium text-gray-700 mb-[30px]">
					Frontend Devoloper
				</h3>
				<div className="h-1 bg-gray-700" />
				<div className="w-full flex justify-between gap-[40px]">
					<div className="w-1/2">
						<h6 className="text-[14px] text-gray-600 font-semibold my-[5px]">
							<span>E-mail:</span>
							<span className="text-black">shohoimov@gmail.com</span>
						</h6>
						<h6 className="text-[14px] text-gray-600 font-semibold my-[5px]">
							<span>Phone number:</span>
							<span className="text-black">+998942836006</span>
						</h6>
						<h6 className="text-[14px] text-gray-600 font-semibold my-[5px]">
							<span>Location:</span>
							<span className="text-black">Fergana Kokand</span>
						</h6>
					</div>
					<div className="w-1/2">
						<h6 className="text-[14px] text-gray-600 font-semibold my-[5px]">
							<span>Linkedin:</span>
							<span className="text-black">
								www.linkedin.com/in/shohobiddin-ibrohimov-4b7569286
							</span>
						</h6>
						<h6 className="text-[14px] text-gray-600 font-semibold my-[5px]">
							<span>Telegram:</span>
							<span className="text-black">@Shohobiddin6006</span>
						</h6>
						<h6 className="text-[14px] text-gray-600 font-semibold my-[5px]">
							<span>GitHub:</span>
							<span className="text-black">@Shohobiddinn</span>
						</h6>
					</div>
				</div>
				<div className="h-1 bg-gray-700" />
				<div className="flex gap-[50px] pb-[100px]">
					<div className="w-2/3">
						<h2 className="text-[23px] text-gray-500 mb-[5px] font-semibold">
							Work Experience
						</h2>
						<div className="flex justify-between">
							<div>
								<div className="flex justify-between">
									<h3 className="text-[18px] text-gray-500 font-semibold underline">
										Frontend Devoloper at Frelance
									</h3>
									<div className="flex flex-col">
										<h6 className="self-start text-[16px] text-gray-500 font-medium">
											May 2023
										</h6>
										<span className="self-end text-[14px] text-gray-500 font-medium">
											Frelance
										</span>
									</div>
								</div>
								<p className="text-[14px] text-gray-500 font-normal leading-[18px] pb-[30px]">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
									totam corrupti, reprehenderit deleniti ipsa perspiciatis, illo
									alias consequatur praesentium dolor eaque possimus dolorem
									expedita reiciendis repellendus itaque, odio voluptatibus vero
									saepe quis. Possimus, vitae.
								</p>
								<div className="flex justify-between">
									<h3 className="text-[18px] text-gray-500 font-semibold underline">
										Frontend Devoloper at Frelance
									</h3>
									<div className="flex flex-col">
										<h6 className="self-start text-[16px] text-gray-500 font-medium">
											May 2023
										</h6>
										<span className="self-end text-[14px] text-gray-500 font-medium">
											Frelance
										</span>
									</div>
								</div>
								<p className="text-[14px] text-gray-500 font-normal leading-[18px] pb-[30px]">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
									totam corrupti, reprehenderit deleniti ipsa perspiciatis, illo
									alias consequatur praesentium dolor eaque possimus dolorem
									expedita reiciendis repellendus itaque, odio voluptatibus vero
									saepe quis. Possimus, vitae.
								</p>
								<div className="flex justify-between">
									<h3 className="text-[18px] text-gray-500 font-semibold underline">
										Frontend Devoloper at Frelance
									</h3>
									<div className="flex flex-col">
										<h6 className="self-start text-[16px] text-gray-500 font-medium">
											May 2023
										</h6>
										<span className="self-end text-[14px] text-gray-500 font-medium">
											Frelance
										</span>
									</div>
								</div>
								<p className="text-[14px] text-gray-500 font-normal leading-[18px] pb-[30px]">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
									totam corrupti, reprehenderit deleniti ipsa
								</p>
								<h2 className="text-[23px] text-gray-600 mb-[5px] font-bold">
									Education
								</h2>
								<h3 className="text-[19px] text-gray-500 mb-[5px] font-semibold">
									TUIT(Tashkent University of Informotion and Technologies)
								</h3>
								<div className="flex justify-between">
									<h3 className="text-[18px] text-gray-500 font-semibold">
										E-commerce
									</h3>
									<div className="flex flex-col">
										<h6 className="self-start text-[16px] text-gray-500 font-medium">
											May 2023
										</h6>
										<span className="self-end text-[14px] text-gray-500 font-medium">
											Frelance
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="w-1/3 border-l-[4px] border-gray-700 pl-[20px]">
						<div>
							<h2 className="text-[23px] text-gray-600 mb-[5px] font-bold">
								About Me
							</h2>
							<p className="text-[14px] text-gray-500 font-medium leading-[18px] pb-[30px]">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
								totam corrupti, reprehenderit deleniti ipsa perspiciatis, illo alias
								consequatur praesentium dolor eaque possimus dolorem expedita
								reiciendis repellendus itaque, odio voluptatibus vero saepe quis.
								Possimus, vitae.
							</p>
						</div>
						<div>
							<h2 className="text-[23px] text-gray-600 mb-[5px] font-bold">
								Languages
							</h2>
							<p className="text-[14px] text-gray-700 font-medium leading-[18px] mb-[5px]">
								Russian-Native
							</p>
							<p className="text-[14px] text-gray-700 font-medium leading-[18px] mb-[5px]">
								English-Native
							</p>
							<p className="text-[14px] text-gray-700 font-medium leading-[18px] mb-[5px]">
								Uzbek-Native
							</p>
						</div>
						<div>
							<h2 className="text-[23px] text-gray-600 mb-[5px] font-bold">Skills</h2>
							<div className="flex justify-between">
								<div>
									<p className="text-[14px] text-gray-500 font-medium leading-[18px] mb-[5px]">
										React.js
									</p>
									<p className="text-[14px] text-gray-500 font-medium leading-[18px] mb-[5px]">
										Vue.js
									</p>
									<p className="text-[14px] text-gray-500 font-medium leading-[18px] mb-[5px]">
										Nuxt.js
									</p>
									<p className="text-[14px] text-gray-500 font-medium leading-[18px] mb-[5px]">
										Tailwind
									</p>
								</div>
								<div>
									<p className="text-[14px] text-gray-500 font-medium leading-[18px] mb-[5px]">
										Java Script
									</p>
									<p className="text-[14px] text-gray-500 font-medium leading-[18px] mb-[5px]">
										Bootstrap
									</p>
									<p className="text-[14px] text-gray-500 font-medium leading-[18px] mb-[5px]">
										Axios
									</p>
									<p className="text-[14px] text-gray-500 font-medium leading-[18px] mb-[5px]">
										HTML
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="h-2 bg-black mb-[10px]" />
			</div> */}
		</>
	);
};
