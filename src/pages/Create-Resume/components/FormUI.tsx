import React, { useState } from "react";
import { GrLinkNext } from "react-icons/gr";
import "./styles.scss";
import ModalResumes from "./ModalResumes";
import { DrawerProps } from "antd";
import { Title, Text, Button } from "ui";
import FormFields from "./FormFields";
import useStore from "Store";

const FormUI: React.FC = () => {
	const [modal, setModal] = useState({ open: "" });
	const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");
	// const [resumeTamplate, setResumeTamplate] = useStore();
	return (
		<section>
			<ModalResumes modal={modal} setModal={setModal} placement={placement} />
			<div className="container-box">
				<div className="flex editor">
					<div className="flex flex-col w-1/2 pe-16">
						<div className="flex justify-between">
							<Button
								className="radius_half text-cyan-700 border-solid border-1 border-cyan-700 hover:bg-cyan-700 delay-100 hover:text-white px-4 py-1.5 rounded-lg shadow-xl"
								text="Templates"
								onClick={() => setModal({ open: "resumeTamplates" })}
							/>
							<Button
								className="flex items-center text-white bg-cyan-700 px-4 py-1.5 rounded-lg shadow-xl"
								text="Next"
								link="/"
								children={<GrLinkNext className="ms-2" />}
							/>
						</div>
						<div className="xl:mt-5 md:mt-3 sm:mt-2 min-[320px]:mt-2 editor__form">
							<div className="min-[320px]:mb-3 xl:mb-5">
								<Title
									className="editor__title title-color"
									as="h1"
									text="Personal Details"
								/>
								<Text
									className="text-gray"
									as="p"
									text="Get started with the basics: your name and contact information."
								/>
							</div>
							<FormFields />
						</div>
					</div>
					<div
						className="w-1/2"
						style={{ boxShadow: "0px 0px 7.41692px rgba(0,0,0,.15)" }}
					>
						<div className="main container max-w-[700px] mx-auto">
							<h1 className="text-center uppercase tracking-[0.25em] text-4xl text-gray-600 font-medium mt-5">
								jonathan patterson
							</h1>
							<h5 className="text-center uppercase tracking-[0.25em] text-sm text-gray-600 mt-2">
								graphic designer
							</h5>
							<div className="border-solid border-[1px] border-gray-400 rounded-full mx-10 mt-5" />
							<div className="main-info flex">
								<div className="w-[40%] bg-gray-100 text-gray-600 pl-10 text-xs py-3 font-medium">
									<h3 className="uppercase text-gray-600 tracking-[0.25em] text-base font-semibold pb-3">
										contact
									</h3>
									<div className="flex flex-col gap-3">
										<p className="tel">
											<i className="fa-solid fa-mobile-screen fa-xl w-6 text-center" />
											123-456-7890
										</p>
										<p className="email">
											<i className="fa-regular fa-envelope fa-xl w-6 text-center" />
											hello@reallygreatsite.com
										</p>
										<p className="wesite">
											<i className="fa-solid fa-globe fa-xl w-6 text-center" />
											www.reallygreatsite.com
										</p>
										<p className="location">
											<i className="fa-solid fa-location-dot fa-xl w-6 text-center" />
											123 Aynwhere St, Any City
										</p>
									</div>
									<div className="border-dashed border-[1px] border-gray-400 rounded-full my-6 mr-5" />
									<h3 className="uppercase text-gray-600 tracking-[0.25em] text-base font-semibold pb-3">
										skills
									</h3>
									<div className="flex flex-col gap-3">
										<p>Skill name here</p>
										<p>Your skill</p>
										<p>Special skills</p>
										<p>List your skills</p>
									</div>
									<div className="border-dashed border-[1px] border-gray-400 rounded-full my-6 mr-5" />
									<h3 className="uppercase text-gray-600 tracking-[0.25em] text-base font-semibold pb-3">
										education
									</h3>
									<div className="flex flex-col gap-3 pb-10">
										<p className="font-semibold">Your Degree Name</p>
										<p className="font-semibold text-sm">
											Your Instruction Name
										</p>
										<p>2016-2018</p>
										<p>Lorem ipsum dolor sit amet adipisicing elit.</p>
									</div>
									<div className="flex flex-col gap-3">
										<p className="font-semibold">Your Degree Name</p>
										<p className="font-semibold text-sm">
											Your Instruction Name
										</p>
										<p>2016-2018</p>
										<p>Lorem ipsum dolor sit amet adipisicing elit.</p>
									</div>
									<div className="border-dashed border-[1px] border-gray-400 rounded-full my-6 mr-5" />
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
									</div>
								</div>
								<div className="w-[60%] py-3 pl-5 px-10 text-gray-600">
									<h3 className="uppercase tracking-[0.25em] text-base font-semibold pb-3">
										profile
									</h3>
									<p className="profile-info text-xs font-medium tracking-tighter">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Facere quo esse, deserunt tenetur et adipisci recusandae
										totam asperiores! Molestias corporis fugit iusto neque,
										itaque molestiae magni. Aliquid, praesentium animi
										doloremque repellat earum excepturi consequuntur
										necessitatibus quo at natus, molestias.
									</p>
									<div className="border-dashed border-[1px] border-gray-400 rounded-full my-6 mr-5" />
									<h3 className="uppercase tracking-[0.25em] text-base font-semibold pb-3">
										work experience
									</h3>
									<p className="font-semibold text-sm">Your Instruction Name</p>
									<p className="flex justify-between py-3">
										<span className="text-xs">Company name</span>
										<span className="text-xs">2020-2022</span>
									</p>
									<ul className="list-disc text-xs pl-4 tracking-tighter">
										<li>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Molestias, aut.
										</li>
										<li>
											Lorem ipsum dolor sit amet consectetur, adipisicing
											elit.
										</li>
										<li>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Molestias, aut.
										</li>
										<li>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
										</li>
										<li>Lorem ipsum dolor sit amet.</li>
										<li>
											Lorem ipsum dolor sit, amet consectetur adipisicing
											elit.
										</li>
										<li>
											Lorem ipsum, dolor sit amet consectetur adipisicing
											elit. Hic, officiis?
										</li>
										<li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
										<li>
											Lorem ipsum dolor sit amet, consectetur adipisicing.
										</li>
										<li>
											Lorem ipsum dolor sit amet, consectetur adipisicing.
										</li>
									</ul>
									<p className="font-semibold text-sm pt-5">
										Your Instruction Name
									</p>
									<p className="flex justify-between py-3">
										<span className="text-xs">Company name</span>
										<span className="text-xs">2020-2022</span>
									</p>
									<ul className="list-disc text-xs pl-4 tracking-tighter">
										<li>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Molestias, aut.
										</li>
										<li>
											Lorem ipsum dolor sit amet consectetur, adipisicing
											elit.
										</li>
										<li>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
										</li>
										<li>Lorem ipsum dolor sit amet.</li>
										<li>
											Lorem ipsum dolor sit, amet consectetur adipisicing
											elit.
										</li>
										<li>
											Lorem ipsum, dolor sit amet consectetur adipisicing
											elit. Hic, officiis?
										</li>
										<li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
										<li>
											Lorem ipsum dolor sit amet, consectetur adipisicing.
										</li>
										<li>
											Lorem ipsum dolor sit amet, consectetur adipisicing.
										</li>
									</ul>
								</div>
							</div>
							<div className="border-solid border-[1px] border-gray-400 rounded-full mx-10 mb-5" />
						</div>

						{/* <div>
							<div className="bg-slate-700 w-full py-10">
								<h2 className="text-center text-amber-200 text-[30px] tracking-[9px] font-serif">
									EMMA WATSON
								</h2>
								<p className="text-center text-amber-200 text-[7px] font-medium tracking-[2px] font-mono">
									YOUR PROFESSIONAL TITLE
								</p>
							</div>
						</div>
						<div className="bg-white shadow-xl flex content-center">
							<div className="p-9">
								<h2 className="font-semibold tracking-widest text-[12-px]">
									Contact
								</h2>
								<ul className="mt-2 grid gap-3 text-[11px] font-medium">
									<li className="flex gap-3">
										<span>
											<i className="fas fa-phone" />
										</span>
										<span>123-3940-399</span>
									</li>
									<li className="flex gap-3">
										<span>
											<i className="fas fa-envelope" />
										</span>
										<span>youremail@gmail.com</span>
									</li>
									<li className="flex gap-3">
										<span>
											<i className="fas fa-map-marker-alt" />
										</span>
										<span>City,State</span>
									</li>
									<li className="flex gap-3">
										<span>
											<i className="fab fa-linkedin" />
										</span>
										<span>Linkedin.com/username</span>
									</li>
								</ul>
								<h2 className="mt-8 font-bold tracking-widest text-[13px]">
									EDUCATION
								</h2>
								<ul className="mt-5 mb-6 text-[11px] font-medium">
									<li>YOUR DEGREE NAME/MAJOR</li>
									<li>Education</li>
									<li>University Name</li>
									<li>2012-2014</li>
								</ul>
								<ul className="mt-5 mb-6 text-[11px] font-medium">
									<li>YOUR DEGREE NAME/MAJOR</li>
									<li>Education</li>
									<li>University Name</li>
									<li>2012-2014</li>
								</ul>
								<h2 className="mt-8 font-bold tracking-widest text-[13px]">
									SKILLS
								</h2>
								<ul className="mt-6 list-disc text-[11px] font-medium">
									<li>Relevant Skill</li>
									<li>Relevant Skill</li>
									<li>Relevant Skill</li>
									<li>Relevant Skill</li>
									<li>Relevant Skill</li>
									<li>Relevant Skill</li>
									<li>Relevant Skill</li>
									<li>Relevant Skill</li>
									<li>Relevant Skill</li>
									<li>Relevant Skill</li>
									<li>Relevant Skill</li>
									<li>Relevant Skill</li>
								</ul>
							</div>
							<div className="mt-10 ml-4 border border-amber-300 w-[1px] h-[690px]" />
							<div className="p-9">
								<h2 className="font-semibold tracking-widest text-[12-px]">
									PROFILE
								</h2>
								<ul className="mt-4 mb-4 text-[11px] font-medium">
									<li>
										Lorem ipsum dolor sit, amet consectetur adipisicing elit.
										Cumque incidunt delectus aliquid explicabo! Ad temporibus
										nisi culpa ipsa eos quod impedit beatae quae. Voluptatem
										eius voluptatibus rem maxime hic id at voluptate, corrupti
										esse ipsum odit doloribus dolores eaque ducimus.
									</li>
								</ul>
								<ul className="text-[11px] font-medium">
									<li>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Laboriosam voluptates ducimus est doloremque accusamus fuga
										esse tempora suscipit sunt vero?
									</li>
								</ul>
								<h2 className="mt-8 font-semibold tracking-widest text-[12-px]">
									PROFESSIONAL EXPERIENCE
								</h2>
								<ul className="mt-4 mb-4 text-[11px] font-medium">
									<li>WRITE YOUR JOB TITLE HERE</li>
									<li>Company Name | City,State | Beginning Date-End Date</li>
								</ul>
								<ul className="text-[11px] font-medium">
									<li>
										Lorem ipsum dolor sit, amet consectetur adipisicing elit.
										Animi harum cumque sequi voluptatum ducimus similique
										repellat ea alias aut!
									</li>
									<li className="list-disc translate-x-6">
										Lorem ipsum dolor, sit amet consectetur adipisicing elit.
										Autem adipisci quibusdam eum corrupti dolores natus.
									</li>
									<li className="list-disc translate-x-6">
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Ea, enim.
									</li>
									<li className="list-disc translate-x-6">
										Lorem, ipsum dolor sit amet consectetur adipisicing elit.
										Rerum!
									</li>
									<li className="list-disc translate-x-6">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
									</li>
									<li className="list-disc translate-x-6">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Illum!
									</li>
								</ul>
								<ul className="mt-4 mb-4 text-[11px] font-medium">
									<li>WRITE YOUR JOB TITLE HERE</li>
									<li>Company Name | City,State | Beginning Date-End Date</li>
								</ul>
								<ul className="text-[11px] font-medium">
									<li>
										Lorem ipsum dolor sit, amet consectetur adipisicing elit.
										Animi harum cumque sequi voluptatum ducimus similique
										repellat ea alias aut!
									</li>
									<li className="list-disc translate-x-6">
										Lorem ipsum dolor, sit amet consectetur adipisicing elit.
										Autem adipisci quibusdam eum corrupti dolores natus.
									</li>
									<li className="list-disc translate-x-6">
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Ea, enim.
									</li>
									<li className="list-disc translate-x-6">
										Lorem, ipsum dolor sit amet consectetur adipisicing elit.
										Rerum!
									</li>
									<li className="list-disc translate-x-6">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
									</li>
									<li className="list-disc translate-x-6">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Illum!
									</li>
								</ul>
							</div>
						</div> */}

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
												Lorem ipsum dolor sit amet consectetur, adipisicing
												elit. Nobis totam corrupti, reprehenderit deleniti
												ipsa perspiciatis, illo alias consequatur
												praesentium dolor eaque possimus dolorem expedita
												reiciendis repellendus itaque, odio voluptatibus
												vero saepe quis. Possimus, vitae.
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
												Lorem ipsum dolor sit amet consectetur, adipisicing
												elit. Nobis totam corrupti, reprehenderit deleniti
												ipsa perspiciatis, illo alias consequatur
												praesentium dolor eaque possimus dolorem expedita
												reiciendis repellendus itaque, odio voluptatibus
												vero saepe quis. Possimus, vitae.
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
												Lorem ipsum dolor sit amet consectetur, adipisicing
												elit. Nobis totam corrupti, reprehenderit deleniti
												ipsa
											</p>
											<h2 className="text-[23px] text-gray-600 mb-[5px] font-bold">
												Education
											</h2>
											<h3 className="text-[19px] text-gray-500 mb-[5px] font-semibold">
												TUIT(Tashkent University of Informotion and
												Technologies)
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
											Lorem ipsum dolor sit amet consectetur, adipisicing
											elit. Nobis totam corrupti, reprehenderit deleniti ipsa
											perspiciatis, illo alias consequatur praesentium dolor
											eaque possimus dolorem expedita reiciendis repellendus
											itaque, odio voluptatibus vero saepe quis. Possimus,
											vitae.
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
										<h2 className="text-[23px] text-gray-600 mb-[5px] font-bold">
											Skills
										</h2>
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

						{/* <div className="bg-white mx-auto p-9" style={{ maxWidth: "700px" }}>
							<div
								className="bg-amber-500 mx-auto p-4 mb-3 flex justify-between items-center"
								style={{ maxWidth: "700px", borderRadius: "30px 0 0 30px" }}
							>
								<div>
									<h1 className="text-3xl font-bold text-white">
										Chris Candidate
									</h1>
									<p className="text-white">Human Resource Manager</p>
								</div>
								<div className="text-right">
									<p className="text-white text-sm">
										4759 Sunnydale Lane, Plano, TX 75071
									</p>
									<p className="text-white text-sm">
										(469) 385-2948 | email@youremail.com
									</p>
								</div>
							</div>
							<div>
								<h2 className="text-xl font-bold mb-2">Professional Summary</h2>
								<p className="text-gray-700 font-bold">
									Human resources generalist with 8 years of experience in HR,
									including hiring and terminating, disciplining employees and
									helping department managers improve employee performance. Worked
									with labor unions to negotiate compensation packages for
									workers. Organized new hire training to ensure that all satety
									regulations are followe do workplace safety standards. Worked
									with OSHA
								</p>
							</div>
							<div className="max-w-700 mx-auto">
								<div className="my-4">
									<div className=" pt-2">
										<div className="mb-4">
											<div
												className="bg-white mx-auto "
												style={{ maxWidth: "700px" }}
											>
												<div className="mt-4">
													<div className="flex items-center">
														<h2 className="text-2xl text-amber-500 font-bold pr-3">
															Professional Experience
														</h2>
														<div className="flex-1 h-1 bg-amber-500"></div>
													</div>
													<div className="flex justify-between items-center mt-4">
														<div>
															<h3 className="text-lg font-bold text-gray-800">
																Jim s Widget Factory, Plano, TX
															</h3>
															<p className="text-base text-gray-800">
																Human Resources Manager
															</p>
														</div>
														<span className="text-sm text-gray-600">
															January 2016 - Present
														</span>
													</div>
												</div>
											</div>
											<p className="text-sm font-semibold mt-1">
												Human Resources Manager
											</p>
											<ul className="list-disc list-inside text-sm text-gray-700 mt-1">
												<li className="custom-bullet">
													Implement effective company policies to ensure
													that all practices comply with labor and
													employment regulations
												</li>
												<li className="custom-bullet">
													Increased employee retention rates by managing
													workplace satisfaction to an over 90% success
													rate by creating and maintaining a positive work
													environment
												</li>
												<li className="custom-bullet">
													Develop targeted outreach practices to increase
													minority recruitment and ensure compliance with
													affirmative action policies
												</li>
												<li className="custom-bullet">
													Monitor scheduled in and out times as well as
													employee breaks to ensure that proper employment
													laws are met
												</li>
											</ul>
										</div>
										<div>
											<div className="flex justify-between">
												<h3 className="font-bold text-lg text-gray-800">
													Jim s Widget Factory, Plano, TX
												</h3>
												<span className="text-sm text-gray-600">
													March 2015 - January 2016
												</span>
											</div>
											<p className="text-lg font-semibold mt-1 text-gray-800">
												Human Resources Associate
											</p>
											<ul className="list-disc list-inside text-sm text-gray-700 mt-1">
												<li className="custom-bullet">
													Implement effective company policies to ensure
													that all practices comply with labor and
													employment regulations
												</li>
												<li className="custom-bullet">
													Increased employee retention rates by managing
													workplace satisfaction to an over 90% success
													rate by creating and maintaining a positive work
													environment
												</li>
												<li className="custom-bullet">
													Develop targeted outreach practices to increase
													minority recruitment and ensure compliance with
													affirmative action policies
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="mt-6">
								<div className="flex items-center">
									<h2 className="text-2xl text-amber-500 font-bold pr-3">
										Education
									</h2>
									<div className="flex-1 h-1 bg-amber-500"></div>
								</div>
								<p className="text-gray-700">
									Masters in Human Resources September 2007 - May 2011
									<span className="block text-sm font-normal">
										The University of Texas, Dallas
									</span>
									<span className="block text-sm font-normal"></span>
								</p>
								<ul className="list-disc list-inside text-gray-700">
									<li className="custom-bullet">
										Academic Awardee of AY 2007-2008
									</li>
								</ul>
							</div>
							<div className="mt-6">
								<div className="flex items-center">
									<h2 className="text-2xl text-amber-500 font-bold pr-3">
										Key Skills
									</h2>
									<div className="flex-1 h-1 bg-amber-500"></div>
								</div>
								<ul className="list-disc list-inside text-gray-700">
									<li className="custom-bullet">Detail oriented</li>
									<li className="custom-bullet">
										Well-versed in Texas employment law
									</li>
									<li className="custom-bullet">
										{" "}
										Excellent written and oral communication skills
									</li>
									<li className="custom-bullet">
										Develops positive workplace relationships
									</li>
								</ul>
							</div>
						</div> */}
					</div>
				</div>
			</div>
		</section>
	);
};

export default FormUI;
