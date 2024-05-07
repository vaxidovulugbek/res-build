import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "ui/Button/Button";
import { Text } from "ui/Text/Text";
import { Title } from "ui/Title/Title";
import "./Hero.scss";
import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic";
const Hero: React.FC = () => {
	const { t } = useTranslation();

	const [init, setInit] = useState(false);

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			// you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
			// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
			// starting from v2 you can add only the features you need reducing the bundle size
			//await loadAll(engine);
			//await loadFull(engine);
			await loadSlim(engine);
			//await loadBasic(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	// const particlesLoaded = (container) => {
	// 	console.log(container);
	// };
	return (
		<section className="section">
			<div
				className="particles-wrapper h-[630px]"
				style={{ position: "relative", overflow: "hidden" }}
			>
				<div
					style={{ marginLeft: "50%" }}
					className="lg:px-10 md:px-6 absolute z-[99] w-10/12 h-full ms-1/2 translate-x-[-50%] flex flex-col justify-center items-center"
				>
					<Title
						className="hero__title mb-3 lg:text-5xl leading-normal md:text-3xl text-center font-header text-white"
						as="h1"
						text={t("hero_title")}
						// text="Online CV Builder With Creative Templates."
					/>
					<Text
						className="hero__text text-center text-lg leading-8 text-gray-500 mb-3 text-white"
						weight="regular"
						size="lg"
						as="p"
						text="Enter your personal details, choose a template, upload your resume and impress employers."
					/>
					<Button
						link="/resume"
						className="hero__builder-btn text-white bg-primary inline-block px-6 py-3 rounded-3xl shadow-[0px_0px_7.41692px_rgba(0,0,0,.15)] text-white"
						text="Build your free resume"
					/>
				</div>
				{init && (
					<Particles
						id="tsparticles"
						// particlesLoaded={particlesLoaded}
						options={{
							background: {
								color: {
									value: "#164863",
								},
							},
							fullScreen: {
								enable: true,
								zIndex: -1,
							},
							style: {
								position: "absolute",
							},
							fpsLimit: 120,
							interactivity: {
								events: {
									onClick: {
										enable: false,
										mode: "push",
									},
									onHover: {
										enable: false,
										mode: "repulse",
									},
									// resize: true,
								},
								modes: {
									push: {
										quantity: 3,
									},
									repulse: {
										distance: 200,
										duration: 3,
									},
								},
							},
							particles: {
								color: {
									value: "#ffffff",
								},
								links: {
									color: "#ffffff",
									distance: 150,
									enable: true,
									opacity: 0.5,
									width: 1,
								},
								move: {
									direction: "none",
									enable: true,
									outModes: {
										default: "bounce",
									},
									random: false,
									speed: 2,
									straight: false,
								},
								number: {
									density: {
										enable: true,
										// area: 800,
									},
									value: 80,
								},
								opacity: {
									value: 0.5,
								},
								shape: {
									type: "circle",
								},
								size: {
									value: { min: 1, max: 3 },
								},
							},
							detectRetina: true,
						}}
					/>
				)}
			</div>
		</section>

		// <section className="hero section">
		// 	<div className="container-box">
		// 		<div className="flex items-center pt-10 max-[640px]:flex-col-reverse">
		// 			<div className="sm:hidden md:block sm:w-1/2 max-[640px]:w-full max-[640px]:mt-12">
		// 				<img
		// 					className="hero__img"
		// 					src="https://www.myperfectresume.com/wp-content/uploads/2023/08/category-graphics-3.png"
		// 					alt=""
		// 				/>
		// 			</div>
		// 			<div className="md:w-1/2 lg:px-10 md:px-6 sm:w-full">
		// 				<Title
		// 					className="hero__title mb-3 lg:text-5xl leading-normal md:text-3xl max-w-xl font-header"
		// 					as="h1"
		// 					text={t("hero_title")}
		// 					// text="Online CV Builder With Creative Templates."
		// 				/>
		// 				<Text
		// 					className="hero__text max-w-xl text-lg leading-8 text-gray-500 mb-3"
		// 					weight="regular"
		// 					size="lg"
		// 					as="p"
		// 					text="Enter your personal details, choose a template, upload your resume and impress employers."
		// 				/>
		// 				<Button
		// 					link="/resume"
		// 					className="hero__builder-btn text-white bg-primary inline-block px-6 py-3 rounded-3xl shadow-xl"
		// 					text="Build your free resume"
		// 				/>
		// 			</div>
		// 		</div>
		// 	</div>
		// </section>
	);
};

export default Hero;
