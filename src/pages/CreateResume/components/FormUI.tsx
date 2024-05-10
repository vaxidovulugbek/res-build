import { DrawerProps } from "antd";
import cn from "classnames";
import { Res1, Res2, Res3, Res4, Res5, Res6 } from "components/ResumeTamplates";
import { useSelectorRedux } from "hooks";
import { isArray } from "lodash";
import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
// import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { useSelector } from "react-redux";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Button, Text, Title } from "ui";
import useStore from "../../../zustand/store";
import FormFields from "./FormFields";
import FormFields2 from "./FormFields2";
import FormFields3 from "./FormFields3";
import FormFields4 from "./FormFields4";
import ModalResumes from "./ModalResumes";
import "./styles.scss";

const FormUI: React.FC = () => {
	const [modal, setModal] = useState({ open: "" });
	const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");
	const { resumeTemplate } = useSelectorRedux();
	const { t } = useTranslation();

	const resumeComponents: { [key: number]: JSX.Element } = {
		1: <Res1 />,
		2: <Res2 />,
		3: <Res3 />,
		4: <Res4 />,
		5: <Res5 />,
		6: <Res6 />,
	};

	const componentToRender = resumeComponents[resumeTemplate] || <Res1 />;

	interface CustomSlider extends Slider {
		slickNext(): void;
		slickPrev(): void;
	}

	const sliderRef = useRef<CustomSlider>(null);
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
		draggable: false,
		prevArrow: <></>,
		nextArrow: <></>,
		afterChange: (currentSlide) => {
			if (currentSlide === 0) {
				setChangeStatusSlider(true);
			} else {
				setChangeStatusSlider(false);
			}
		},
	};

	const data = [
		<FormFields handleNextSlide={handleNextSlide} />,
		<FormFields2 handlePrevSlide={handlePrevSlide} handleNextSlide={handleNextSlide} />,
		<FormFields3 handlePrevSlide={handlePrevSlide} handleNextSlide={handleNextSlide} />,
		<FormFields4 handlePrevSlide={handlePrevSlide} />,
	];

	return (
		<section>
			<ModalResumes modal={modal} setModal={setModal} placement={placement} />
			<div className="container-box">
				<div className="flex editor sm:items-center max-[540px]:pt-20 max-[640px]:flex-col sm:flex-col xl:flex-row xl:items-start">
					<div className="flex flex-col relative sm:w-full md:w-9/12 lg:w-1/2 max-[640px]:mb-6 max-[480px]:mb-4 sm:mb-6 xl:mb-0 2xl:pe-16 xl:pe-10">
						<div className="flex justify-between">
							<Button
								className="radius_half h-10 max-[480px]:text-sm text-cyan-700 border-solid border-1 border-cyan-700 hover:bg-cyan-700 delay-100 hover:text-white px-4 py-1.5 rounded-3xl editor__btn-shadow"
								text={t("Resume_Templates")}
								onClick={() => setModal({ open: "resumeTamplates" })}
							/>
						</div>
						<div className="xl:mt-5 md:mt-3 sm:mt-2 min-[320px]:mt-2 editor__form">
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
