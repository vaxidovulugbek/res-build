import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "ui/Button/Button";
import { Text } from "ui/Text/Text";
import { Title } from "ui/Title/Title";
import "./Hero.scss";
const Hero: React.FC = () => {
	const { t } = useTranslation();
	return (
		<section className="hero section">
			<div className="container-box">
				<div className="flex items-center pt-10 max-[640px]:flex-col-reverse">
					<div className="sm:hidden md:block sm:w-1/2 max-[640px]:w-full max-[640px]:mt-12">
						<img
							className="hero__img"
							src="https://www.myperfectresume.com/wp-content/uploads/2023/08/category-graphics-3.png"
							alt=""
						/>
					</div>
					<div className="md:w-1/2 lg:px-10 md:px-6 sm:w-full">
						<Title
							className="hero__title mb-3 lg:text-5xl leading-normal md:text-3xl max-w-xl font-header"
							as="h1"
							text={t("hero_title")}
							// text="Online CV Builder With Creative Templates."
						/>
						<Text
							className="hero__text max-w-xl text-lg leading-8 text-gray-500 mb-3"
							weight="regular"
							size="lg"
							as="p"
							text="Enter your personal details, choose a template, upload your resume and impress employers."
						/>
						<Button
							link="/resume"
							className="hero__builder-btn text-white bg-primary inline-block px-6 py-3 rounded-3xl shadow-xl"
							text="Build your free resume"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
