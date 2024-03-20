import React, { useEffect, useMemo, useRef, useState } from "react";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import "./styles.scss";
import ModalResumes from "./ModalResumes";
import { DrawerProps } from "antd";
import { Title, Text, Button } from "ui";
import FormFields from "./FormFields";
import useStore from "../../../zustand/store";
import { useSelector } from "react-redux";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Res1, Res2, Res3 } from "components/ResumeTamplates";
import { isArray } from "lodash";
import cn from "classnames";

const FormUI: React.FC = () => {
	const [modal, setModal] = useState({ open: "" });
	const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");
	const resumeTemplate = useSelector((state: any) => state.resumeTemplate);

	const componentToRender =
		resumeTemplate === +"1" ? (
			<Res1 />
		) : resumeTemplate === +"2" ? (
			<Res2 />
		) : resumeTemplate === +"3" ? (
			<Res3 />
		) : (
			<Res1 /> // default return component
		);

	interface CustomSlider extends Slider {
		slickNext(): void;
		slickPrev(): void;
	}

	const sliderRef = useRef<CustomSlider>(null);

	const changeStatusSlider = useStore((state) => state.changeStatusSlider);
	const setChangeStatusSlider = useStore((state) => state.setChangeStatusSlider);

	const handleNextSlide = () => {
		sliderRef?.current?.slickNext();
	};

	const handlePrevSlide = () => {
		sliderRef?.current?.slickPrev();
	};

	const settings: Settings = {
		dots: false,
		infinite: false,
		speed: 100,
		slidesToShow: 1,
		slidesToScroll: 1,
		afterChange: (currentSlide) => {
			if (currentSlide === 0) {
				setChangeStatusSlider(true);
			} else {
				setChangeStatusSlider(false);
			}
		},
	};

	const data = [<FormFields />, <FormFields />];

	return (
		<section>
			<ModalResumes modal={modal} setModal={setModal} placement={placement} />
			<div className="container-box">
				<div className="flex editor sm:items-center max-[540px]:pt-20 max-[640px]:flex-col sm:flex-col xl:flex-row xl:items-start">
					<div className="flex flex-col sm:w-full md:w-9/12 lg:w-1/2 max-[640px]:mb-6 max-[480px]:mb-4 sm:mb-6 xl:mb-0 2xl:pe-16 xl:pe-10">
						<div className="flex justify-between">
							<Button
								className="radius_half h-10 max-[480px]:text-sm text-cyan-700 border-solid border-1 border-cyan-700 hover:bg-cyan-700 delay-100 hover:text-white px-4 py-1.5 rounded-3xl editor__btn-shadow"
								text="Templates"
								onClick={() => setModal({ open: "resumeTamplates" })}
							/>
							<div className="flex items-center">
								<Button
									className={cn(
										"ms-3 editor__btn-shadow flex items-center shadow-xl p-3 w-10 h-10 rounded-full",
										{
											hidden: changeStatusSlider === true,
										}
									)}
									onClick={handlePrevSlide}
									children={<GrLinkPrevious />}
								/>
								<Button
									className="ms-3 flex items-center h-10 text-white bg-cyan-700 px-4 py-1.5 rounded-3xl editor__btn-shadow max-[480px]:text-sm"
									text="Next"
									onClick={handleNextSlide}
									children={<GrLinkNext className="ms-2" />}
								/>
							</div>
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
							<Slider {...settings} ref={sliderRef}>
								{isArray(data) &&
									data.map((component, index) => {
										return <div key={index}>{component}</div>;
									})}
							</Slider>
						</div>
					</div>
					<div
						className="lg:w-1/2 md:w-9/12 sm:w-full"
						style={{ boxShadow: "0px 0px 7.41692px rgba(0,0,0,.15)" }}
					>
						<div>{componentToRender}</div>

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
