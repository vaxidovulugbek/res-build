import { DrawerProps } from "antd";
import cn from "classnames";
import { Res1, Res2, Res3, Res4, Res5, Res6 } from "components/ResumeTamplates";
import { isArray } from "lodash";
import React, { useRef, useState } from "react";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { useSelector } from "react-redux";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Button, Text, Title } from "ui";
import useStore from "../../../zustand/store";
import FormFields from "./FormFields";
import ModalResumes from "./ModalResumes";
import "./styles.scss";

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
		) : resumeTemplate === +"4" ? (
			<Res4 />
		) : resumeTemplate === +"5" ? (
			<Res5 />
		) : resumeTemplate === +"6" ? (
			<Res6 />
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
					</div>
				</div>
			</div>
		</section>
	);
};

export default FormUI;
