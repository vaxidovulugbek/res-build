import Particles, { initParticlesEngine } from "@tsparticles/react";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "ui/Button/Button";
import { Text } from "ui/Text/Text";
import { Title } from "ui/Title/Title";
import "./Hero.scss";
import { loadSlim } from "@tsparticles/slim";
import imagebg from "assets/imgs/others/resumeimg.webp";
const Hero: React.FC = () => {
	const { t } = useTranslation();

	const [init, setInit] = useState(false);

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	const [position, setPosition] = useState({ x: 0, y: 0 });

	const handleMouseMove = (event: any) => {
		const { clientX, clientY } = event;
		setPosition({ x: clientX, y: clientY });
	};

	const calculateTransform = () => {
		const moveX = (position.x - window.innerWidth / 2) / 20;
		const moveY = (position.y - window.innerHeight / 2) / 20;
		return `translate(${moveX}px, ${moveY}px)`;
	};
	return (
		<section className="hero section" onMouseMove={handleMouseMove}>
			<div className="container-box">
				<div className="flex items-center max-[660px]:p-0 pt-10 max-[640px]:flex-col-reverse">
					<div className="md:w-1/2 lg:px-10 md:px-6 sm:w-full">
						<Title
							className="hero__title mb-3 max-[480px]:text-4xl lg:text-5xl leading-normal md:text-3xl max-w-xl font-header"
							as="h1"
							text={t("hero_title")}
						/>
						<Text
							className="hero__text max-[480px]:text-md max-w-xl text-lg leading-8 text-gray-500 mb-3"
							weight="regular"
							size="lg"
							as="p"
							text={t(
								"Введите свои личные данные, выберите шаблон, загрузите свое резюме и произведите впечатление на работодателей."
							)}
						/>
						<Button
							link="/resume"
							className="hero__builder-btn text-white bg-primary inline-block px-6 py-3 rounded-3xl shadow-xl max-[480px]:w-full max-[480px]:flex justify-center"
							text={t("Build your free resume")}
						/>
					</div>
					<div className="sm:hidden max-[660px]:hidden md:block sm:w-1/2 max-[640px]:w-full max-[640px]:mt-12">
						<img
							style={{
								transform: calculateTransform(),
								transition: "transform 0.1s ease-out",
							}}
							className="hero__img"
							// src="https://www.myperfectresume.com/wp-content/uploads/2023/08/category-graphics-3.png"
							src={imagebg}
							alt=""
						/>
					</div>
				</div>
			</div>
		</section>
		// <section className="section hero">
		// 	<div
		// 		className="particles-wrapper h-[630px]"
		// 		style={{ position: "relative", overflow: "hidden" }}
		// 	>
		// 		<div
		// 			style={{ marginLeft: "50%" }}
		// 			className="lg:px-10 md:px-6 absolute z-[99] w-full md:w-10/12 h-full ms-1/2 translate-x-[-50%] flex flex-col justify-center items-center"
		// 		>
		// 			<Title
		// 				className="hero__title mb-3 lg:text-6xl leading-normal md:text-3xl text-center font-header text-white tracking-wider"
		// 				as="h1"
		// 				text={t("hero_title")}
		// 				// text="Online CV Builder With Creative Templates."
		// 			/>
		// 			<Text
		// 				className="hero__text text-center text-lg leading-8 text-gray-500 mb-3 text-white"
		// 				weight="regular"
		// 				size="lg"
		// 				as="p"
		// 				text={t("hero_text")}
		// 			/>
		// 			<Button
		// 				link="/resume"
		// 				className="hero__builder-btn text-white bg-primary inline-block px-6 py-3 rounded-3xl shadow-[0px_0px_7.41692px_rgba(0,0,0,.15)] text-white"
		// 				text={t("Build your free resume")}
		// 			/>
		// 		</div>
		// 		{init && (
		// 			<Particles
		// 				id="tsparticles"
		// 				// particlesLoaded={particlesLoaded}
		// 				options={{
		// 					background: {
		// 						color: {
		// 							value: "#164863",
		// 						},
		// 					},
		// 					fullScreen: {
		// 						enable: true,
		// 						zIndex: -1,
		// 					},
		// 					style: {
		// 						position: "absolute",
		// 					},
		// 					fpsLimit: 120,
		// 					interactivity: {
		// 						events: {
		// 							onClick: {
		// 								enable: false,
		// 								mode: "push",
		// 							},
		// 							onHover: {
		// 								enable: false,
		// 								mode: "repulse",
		// 							},
		// 							// resize: true,
		// 						},
		// 						modes: {
		// 							push: {
		// 								quantity: 3,
		// 							},
		// 							repulse: {
		// 								distance: 200,
		// 								duration: 3,
		// 							},
		// 						},
		// 					},
		// 					particles: {
		// 						color: {
		// 							value: "#ffffff",
		// 						},
		// 						links: {
		// 							color: "#ffffff",
		// 							distance: 150,
		// 							enable: true,
		// 							opacity: 0.5,
		// 							width: 1,
		// 						},
		// 						move: {
		// 							direction: "none",
		// 							enable: true,
		// 							outModes: {
		// 								default: "bounce",
		// 							},
		// 							random: false,
		// 							speed: 2,
		// 							straight: false,
		// 						},
		// 						number: {
		// 							density: {
		// 								enable: true,
		// 								// area: 800,
		// 							},
		// 							value: 80,
		// 						},
		// 						opacity: {
		// 							value: 0.5,
		// 						},
		// 						shape: {
		// 							type: "circle",
		// 						},
		// 						size: {
		// 							value: { min: 1, max: 3 },
		// 						},
		// 					},
		// 					detectRetina: true,
		// 				}}
		// 			/>
		// 		)}
		// 	</div>
		// </section>
	);
};

export default Hero;
