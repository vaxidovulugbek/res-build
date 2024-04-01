import React from "react";
// import { FaPhoneAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";
// import { FaLocationDot } from "react-icons/fa6";

export const Res5: React.FC = () => {
	return (
		<div className="flex bg-white" style={{ maxWidth: "700px", minHeight: "800px" }}>
			<div className="w-[36%] bg-amber-500 p-4">
				<h2 className="uppercase text-[28px] tracking-[.2em] mb-1">Lauren Chen</h2>
				<h3 className="uppercase text-[13px]">Digital marketing specialist</h3>
				<div className="mt-5">
					<p className="uppercase w-full border-b-2 border-black pb-1 text-[16px]">
						contact
					</p>
					<div className="flex items-center text-xs mt-4 font-medium">
						{/* <FaPhoneAlt className="me-3" /> */}
						(90) 053 11 02
					</div>
					<div className="flex items-center text-xs mt-4 font-medium">
						{/* <FaLocationDot className="me-3" /> */}
						43w 13 street Tashkent
					</div>
					<div className="flex items-center text-xs mt-4 font-medium">
						{/* <FaEnvelope className="me-3" /> */}
						lauren.chen@mail.com
					</div>
					<div className="flex items-center text-xs mt-4 font-medium">
						{/* <FaLinkedin className="me-3" /> */}
						linkedin.com/lauren.chen
					</div>
				</div>
				<div className="mt-5">
					<p className="uppercase w-full border-b-2 border-black pb-1 text-[16px]">
						summary
					</p>
					<p className="mt-4 font-medium text-sm tracking-[.05em]">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque autem
						suscipit ab ratione nihil soluta quasi accusamus, et quisquam itaque!
					</p>
				</div>
				<div className="mt-5">
					<p className="uppercase w-full border-b-2 border-black pb-1 text-[16px] mb-3">
						languages
					</p>
					<ul className="capitalize">
						<li className="w-full mb-2 text-sm custom-bullet-res5">uzbek</li>
						<li className="w-full mb-2 text-sm custom-bullet-res5">russian</li>
						<li className="w-full mb-2 text-sm custom-bullet-res5">english</li>
					</ul>
				</div>
			</div>
			<div className="w-[64%] p-6">
				<div>
					<p className="uppercase tracking-[.07em] w-full border-b-2 border-amber-500 pb-1 text-[16px] mb-4">
						Professional experience
					</p>
					<div className="mb-5">
						<p className="capitalize w-full text-xs text-gray mb-1">
							January 12 2022 - present
						</p>
						<h3 className="capitalize font-semibold text-xs mb-1">
							digital marketing specialist
						</h3>
						<p className="capitalize text-xs mb-2">trangle music group, new york</p>
						<div>
							<p className="text-xs mb-2 custom-bullet-res5 ps-3">
								manage degital sales, and streming accaunts to improve brand
								positioning and growth
							</p>
							<p className="text-xs mb-2 custom-bullet-res5 ps-3">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
								architecto!
							</p>
						</div>
					</div>
					<div className="mb-5">
						<p className="capitalize w-full text-xs text-gray mb-1">
							January 12 2022 - present
						</p>
						<h3 className="capitalize font-semibold text-xs mb-1">
							digital marketing specialist
						</h3>
						<p className="capitalize text-xs mb-2">trangle music group, new york</p>
						<div>
							<p className="text-xs mb-2 custom-bullet-res5 ps-3">
								manage degital sales, and streming accaunts to improve brand
								positioning and growth
							</p>
							<p className="text-xs mb-2 custom-bullet-res5 ps-3">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
								architecto!
							</p>
						</div>
					</div>
				</div>
				<div>
					<p className="uppercase tracking-[.07em] w-full border-b-2 border-amber-500 pb-1 text-[16px] mb-4">
						education
					</p>
					<div className="mb-5">
						<p className="capitalize w-full text-xs text-gray mb-1">
							January 2020 - may 2024
						</p>
						<h3 className="capitalize font-semibold text-xs mb-1">
							bachelor of arts, communications
						</h3>
						<p className="capitalize text-xs mb-2">new-york university, new york</p>
					</div>
				</div>
				<div>
					<p className="uppercase tracking-[.07em] w-full border-b-2 border-amber-500 pb-1 text-[16px] mb-4">
						skills
					</p>
					<ul className="capitalize text-xs flex flex-wrap">
						<li className="custom-bullet-res5 ps-2 mb-3 w-1/2">adobe photoshop</li>
						<li className="custom-bullet-res5 ps-2 mb-3 w-1/2">adobe illustrator</li>
						<li className="custom-bullet-res5 ps-2 mb-3 w-1/2">figma</li>
						<li className="custom-bullet-res5 ps-2 mb-3 w-1/2">adobe reader</li>
						<li className="custom-bullet-res5 ps-2 mb-3 w-1/2">digital marketing</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
