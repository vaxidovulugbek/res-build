import { useSelectorRedux } from "hooks";
import { isArray, isBoolean, isString } from "lodash";
import React, { useEffect } from "react";
import cn from "classnames";
import parse from "html-react-parser";
// import { ImMobile, ImLocation } from "react-icons/im";
// import { BsEnvelope, BsGlobe } from "react-icons/bs";

export const Res1: React.FC = () => {
	const {
		resumeName,
		resumeLastName,
		resumeEmail,
		resumePhone,
		resumeAdress,
		resumeJobTitle,
		resumeSocialLinks,
		resumeCompanyName,
		resumePosition,
		resumeStartDate,
		resumeEndDate,
		resumeAboutExpirience,
	} = useSelectorRedux();
	// useEffect(() => {
	// 	// console.log(parse(resumeAboutExpirience), resumePosition);
	// 	console.log("resumeAboutExpirience:", resumeAboutExpirience);
	// }, [resumeAboutExpirience, resumePosition]);

	return (
		<>
			<div className="main max-w-[700px] mx-auto pt-12 pb-6">
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
							<p className={cn("flex items-center", { hidden: !resumePhone })}>
								{/* <ImMobile className="me-2" /> */}
								{/* <i className="fa-solid fa-mobile-screen fa-xl w-6 text-center" /> */}
								{resumePhone}
							</p>
							<p className="flex items-center">
								{/* <BsEnvelope className="me-2" /> */}
								{/* <i className="fa-regular fa-envelope fa-xl w-6 text-center" /> */}
								{resumeEmail ? resumeEmail : "example@gmail.com"}
							</p>
							{/* <BsGlobe className="me-2" /> */}
							{/* <i className="fa-solid fa-globe fa-xl w-6 text-center" /> */}
							{isArray(resumeSocialLinks) &&
								resumeSocialLinks.map((item, index) => (
									<p key={index} className="flex items-center">
										{item?.value1
											? `${item?.value1}: ${item?.value2}`
											: item?.value2}
									</p>
								))}
							<p className={cn("flex items-center", { hidden: !resumeAdress })}>
								{/* <ImLocation className="me-2" /> */}
								{/* <i className="fa-solid fa-location-dot fa-xl w-6 text-center" /> */}
								{resumeAdress}
							</p>
						</div>
						<div className="border-dashed border-[1px] border-gray-400 rounded-full my-6" />
						<h3 className="uppercase text-gray-600 tracking-[0.25em] text-base font-semibold pb-3">
							skills
						</h3>
						<div className="flex flex-col gap-3">
							<p>Skill name here</p>
							<p>Your skill</p>
							<p>Special skills</p>
							<p>List your skills</p>
						</div>
						<div className="border-dashed border-[1px] border-gray-400 rounded-full my-6" />
						<h3 className="uppercase text-gray-600 tracking-[0.25em] text-base font-semibold pb-3">
							education
						</h3>
						<div className="flex flex-col gap-3 pb-10">
							<p className="font-semibold">Your Degree Name</p>
							<p className="font-semibold text-sm">Your Instruction Name</p>
							<p>2016-2018</p>
							<p>Lorem ipsum dolor sit amet adipisicing elit.</p>
						</div>
						<div className="flex flex-col gap-3">
							<p className="font-semibold">Your Degree Name</p>
							<p className="font-semibold text-sm">Your Instruction Name</p>
							<p>2016-2018</p>
							<p>Lorem ipsum dolor sit amet adipisicing elit.</p>
						</div>
						<div className="border-dashed border-[1px] border-gray-400 rounded-full my-6" />
						<h3 className="uppercase text-gray-600 tracking-[0.25em] text-base font-semibold pb-3">
							languages
						</h3>
						<div className="flex flex-col gap-3">
							<div className="flex items-center h-3">
								<span className="w-14">English</span>
								<div className="border-solid w-40 h-1.5 border-[1px] bg-gray-700 border-gray-700 rounded-full" />
							</div>
							<div className="flex items-center h-3">
								<span className="w-14">German</span>
								<div className="border-solid w-28 h-1.5 border-[1px] bg-gray-700 border-gray-700 rounded-full" />
							</div>
							<div className="flex items-center h-3">
								<span className="w-14">Spanish</span>
								<div className="border-solid w-36 h-1.5 border-[1px] bg-gray-700 border-gray-700 rounded-full" />
							</div>
							<div className="flex items-center h-3">
								<span className="w-14">Spanish</span>
								<div className="border-solid w-36 h-1.5 border-[1px] bg-gray-700 border-gray-700 rounded-full" />
							</div>
							<div className="flex items-center h-3">
								<span className="w-14">Spanish</span>
								<div className="border-solid w-36 h-1.5 border-[1px] bg-gray-700 border-gray-700 rounded-full" />
							</div>
						</div>
					</div>
					<div className="w-[60%] py-3 pl-5 px-10 text-gray-600">
						<h3 className="uppercase tracking-[0.25em] text-base font-semibold pb-3">
							profile
						</h3>
						<p className="profile-info text-xs font-medium tracking-tighter">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quo
							esse, deserunt tenetur et adipisci recusandae totam asperiores!
							Molestias corporis fugit iusto neque, itaque molestiae magni. Aliquid,
							praesentium animi doloremque repellat earum excepturi consequuntur
							necessitatibus quo at natus, molestias.
						</p>
						<div className="border-dashed border-[1px] border-gray-400 rounded-full my-6" />
						<h3 className="uppercase tracking-[0.25em] text-base font-semibold pb-3">
							work experience
						</h3>
						<p className="font-semibold text-sm capitalize">{resumePosition}</p>
						<p className="flex justify-between py-3">
							<span className="text-xs capitalize">{resumeCompanyName}</span>
							<span className="text-xs">
								{resumeStartDate} <span> </span> {resumeEndDate}
							</span>
						</p>
						<div className="text-xs">
							{resumeAboutExpirience ? parse(resumeAboutExpirience) : null}
						</div>
						{/* <div dangerouslySetInnerHTML={{ __html: resumeAboutExpirience }} */}
						{/* <ul className="list-disc text-xs pl-4 tracking-tighter">
							<li>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
								aut.
							</li>
							<li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
							<li>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
								aut.
							</li>
							<li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
							<li>Lorem ipsum dolor sit amet.</li>
							<li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
							<li>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic,
								officiis?
							</li>
							<li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
						</ul> */}
						<p className="font-semibold text-sm pt-5">Your Instruction Name</p>
						<p className="flex justify-between py-3">
							<span className="text-xs">Company name</span>
							<span className="text-xs">2020-2022</span>
						</p>
						<ul className="list-disc text-xs pl-4 tracking-tighter">
							<li>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
								aut.
							</li>
							<li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
							<li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
							<li>Lorem ipsum dolor sit amet.</li>
							<li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
							<li>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic,
								officiis?
							</li>
							<li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
						</ul>
					</div>
				</div>
				<div className="border-solid border-[1px] border-gray-400 rounded-full mx-10 mb-5" />
			</div>
		</>
	);
};
