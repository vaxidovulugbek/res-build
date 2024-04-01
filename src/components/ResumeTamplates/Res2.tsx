import React from "react";
// import { FaPhoneAlt, FaEnvelope, FaLinkedinIn } from "react-icons/fa";
// import { ImLocation } from "react-icons/im";

export const Res2: React.FC = () => {
	return (
		<div style={{ maxWidth: "700px", minHeight: "800px" }}>
			<div className="bg-slate-700 w-full py-10">
				<h2 className="text-center text-amber-200 text-[30px] tracking-[9px] font-serif">
					EMMA WATSON
				</h2>
				<p className="text-center text-amber-200 text-[7px] font-medium tracking-[2px] font-mono">
					YOUR PROFESSIONAL TITLE
				</p>
			</div>
			<div className="bg-white shadow-xl flex content-center">
				<div className="p-9">
					<div className="mb-6">
						<p className="font-semibold uppercase tracking-widest text-[14px] mb-4">
							Contact
						</p>
						<ul className="grid gap-3 text-[11px] font-medium">
							<li className="flex gap-3 items-center">
								{/* <FaPhoneAlt /> */}
								<span>123-3940-399</span>
							</li>
							<li className="flex gap-3 items-center">
								{/* <FaEnvelope /> */}
								<span>youremail@gmail.com</span>
							</li>
							<li className="flex gap-3 items-center">
								{/* <ImLocation /> */}
								<span>City,State</span>
							</li>
							<li className="flex gap-3 items-center">
								{/* <FaLinkedinIn /> */}
								<span>Linkedin.com/username</span>
							</li>
						</ul>
					</div>

					<div className="mb-6">
						<p className="font-bold tracking-widest text-[14px] mb-4 uppercase">
							EDUCATION
						</p>
						<ul className="text-[11px] font-medium">
							<li>YOUR DEGREE NAME/MAJOR</li>
							<li>Education</li>
							<li>University Name</li>
							<li>2012-2014</li>
						</ul>
						<ul className="text-[11px] font-medium mt-3">
							<li>YOUR DEGREE NAME/MAJOR</li>
							<li>Education</li>
							<li>University Name</li>
							<li>2012-2014</li>
						</ul>
					</div>

					<div>
						<p className="font-bold uppercase mb-4 tracking-widest text-[14px] uppercase">
							SKILLs
						</p>
						<ul className="list-disc text-[11px] font-medium ml-[14px] gap-2">
							<li className="mb-2">Relevant Skill</li>
							<li className="mb-2">Relevant Skill</li>
							<li className="mb-2">Relevant Skill</li>
							<li className="mb-2">Relevant Skill</li>
							<li className="mb-2">Relevant Skill</li>
							<li className="mb-2">Relevant Skill</li>
						</ul>
					</div>
				</div>
				<div className="my-10 border border-amber-300 w-[1px] h-auto" />
				<div className="ps-6 pe-9 py-9">
					<h2 className="font-semibold tracking-widest text-[14px]">PROFILE</h2>
					<p className="mt-4 mb-4 text-[11px] font-medium">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque incidunt
						delectus aliquid explicabo! Ad temporibus nisi culpa ipsa eos quod impedit
						beatae quae. Voluptatem eius voluptatibus rem maxime hic id at voluptate,
						corrupti esse ipsum odit doloribus dolores eaque ducimus.
					</p>
					<p className="text-[11px] font-medium">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
						voluptates ducimus est doloremque accusamus fuga esse tempora suscipit sunt
						vero?
					</p>
					<p className="mt-8 mb-4 font-semibold tracking-widest text-[14px]">
						PROFESSIONAL EXPERIENCE
					</p>
					<div className="mb-5">
						<h3 className="text-[11px] font-medium uppercase">
							WRITE YOUR JOB TITLE HERE
						</h3>
						<p className="mb-2 text-[11px] font-medium capitalize">
							Company Name | City,State | Beginning Date-End Date
						</p>
						<p className="text-[11px] font-medium mb-1">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias illo
							iusto maxime molestias?
						</p>
						<ul className="text-[11px] font-medium">
							<li className="list-disc translate-x-6">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
								adipisci quibusdam eum corrupti dolores natus.
							</li>
							<li className="list-disc translate-x-6">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, enim.
							</li>
							<li className="list-disc translate-x-6">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum!
							</li>
							<li className="list-disc translate-x-6">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</li>
							<li className="list-disc translate-x-6">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum!
							</li>
						</ul>
					</div>
					<div className="mb-5">
						<h3 className="text-[11px] font-medium uppercase">
							WRITE YOUR JOB TITLE HERE
						</h3>
						<p className="mb-2 text-[11px] font-medium capitalize">
							Company Name | City,State | Beginning Date-End Date
						</p>
						<p className="text-[11px] font-medium mb-1">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias illo
							iusto maxime molestias?
						</p>
						<ul className="text-[11px] font-medium">
							<li className="list-disc translate-x-6">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
								adipisci quibusdam eum corrupti dolores natus.
							</li>
							<li className="list-disc translate-x-6">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, enim.
							</li>
							<li className="list-disc translate-x-6">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum!
							</li>
							<li className="list-disc translate-x-6">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</li>
							<li className="list-disc translate-x-6">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum!
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
