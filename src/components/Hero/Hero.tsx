import React from "react";
import { Button } from "../../ui/Button/Button";
import { Text } from "../../ui/Text/Text";
import { Title } from "../../ui/Title/Title";
import "./Hero.scss";
const Hero = React.createFactory(() => {
	return (
		<div className="hero">
			<div className="container-box">
				<div className="flex items-center pt-10 pb-20">
					<div className="w-1/2">
						<Title
							className="hero__title text-4xl leading-normal md:text-5xl max-w-xl font-header text-gray-900"
							as="h1"
							text="Online CV Builder With Creative Templates."
						/>
						<Text
							className="hero__text max-w-xl text-lg leading-8 text-gray-500 mb-3"
							weight="regular"
							size="lg"
							as="p"
							text="Enter your personal details, choose a template, upload your resume and impress employers."
						/>
						<Button
							className="hero__builder-btn text-white bg-cyan-700 px-5 py-2.5 rounded-lg shadow-xl"
							text="Build your free resume"
						/>
					</div>
					<div className="w-1/2">
						<img
							className="hero__img"
							src="https://www.myperfectresume.com/wp-content/uploads/2023/08/category-graphics-3.png"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
});

export default Hero;
