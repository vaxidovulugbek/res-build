// import gsap from "gsap";
// import React, { useEffect, useRef, useState } from "react";
// import { Text } from "ui/Text/Text";
// import { Title } from "ui/Title/Title";
// import Card from "./Card";
// import { useSpring, animated } from "react-spring";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const HowItWorks: React.FC = () => {
// 	const data = [
// 		{
// 			id: "1",
// 			title: "Enter details",
// 			text: "Start by filling out the relevant sections that make up the content of your resume.",
// 		},
// 		{
// 			id: "2",
// 			title: "Select a template",
// 			text: "Choose a template and customize your resume to suit your style and personality.",
// 		},
// 		{
// 			id: "3",
// 			title: "Download resume",
// 			text: "Quickly download your resume and edit it at any time.",
// 		},
// 	];

// 	// const cardRef = useRef<HTMLLIElement>(null);
// 	// const textRef = useRef<HTMLDivElement>(null);
// 	// useEffect(() => {
// 	// 	const textElement = textRef.current;
// 	// 	if (textElement) {
// 	// 		const tl = gsap.timeline({
// 	// 			scrollTrigger: {
// 	// 				trigger: textElement,
// 	// 				start: "top bottom", // Start the animation when the top of the element reaches the bottom of the viewport
// 	// 				end: "bottom top", // End the animation when the bottom of the element reaches the top of the viewport
// 	// 				scrub: true, // Smoothly animates the property as the user scrolls
// 	// 			},
// 	// 		});
// 	// 		tl.fromTo(
// 	// 			textElement,
// 	// 			{ opacity: 0, y: 40 }, // From
// 	// 			{ opacity: 1, y: 0 } // To
// 	// 		);
// 	// 	}
// 	// }, []);

// 	// start new animation

// 	// const [isVisible, setIsVisible] = useState<boolean>(false);
// 	// const handleScroll = () => {
// 	// 	const scrollPosition = window.scrollY;

// 	// 	// Agar animatsiya chiqqanda
// 	// 	if (scrollPosition > 300) {
// 	// 		setIsVisible(true);
// 	// 	} else {
// 	// 		setIsVisible(false);
// 	// 	}
// 	// };

// 	// const animationProps = useSpring({
// 	// 	opacity: isVisible ? 1 : 0,
// 	// 	transform: isVisible ? "translateY(0)" : "translateY(100%)",
// 	// });

// 	// window.addEventListener("scroll", handleScroll);

// 	const [isVisible, setIsVisible] = useState<boolean>(false);

// 	const handleScroll = () => {
// 		const scrollPosition = window.scrollY;
// 		if (scrollPosition > 300) {
// 			setIsVisible(true);
// 		} else {
// 			setIsVisible(false);
// 		}
// 	};

// 	useEffect(() => {
// 		window.addEventListener("scroll", handleScroll);
// 		return () => {
// 			window.removeEventListener("scroll", handleScroll);
// 		};
// 	}, []);

// 	return (
// 		<section className="section">
// 			<div className="container">
// 				<Title
// 					weight="medium"
// 					className="text-center title-color font-header text-3xl md:text-5xl mb-8"
// 					as="h2"
// 					text="How it works?"
// 				/>
// 				<div className="font-bold size-lg text-5xl">hello world</div>
// 				<ul className="flex items-center juntify-between">
// 					{data.map((el, i) => {
// 						return (
// 							<div key={el.id}>
// 								<Card {...el} />
// 							</div>
// 							// <animated.div
// 							// 	style={animationProps}
// 							// 	className={`flex p-4 ${el?.id != "1" ? "ms-4" : ""}`}
// 							// 	key={el?.id}
// 							// >
// 							// 	<Text
// 							// 		className="me-3 text-gray relative border-transparent flex items-center justify-center rounded-full w-12 h-12 flex-grow-0 lg:me-5 "
// 							// 		as="span"
// 							// 		text={el?.id}
// 							// 		size="xlg"
// 							// 		weight="medium"
// 							// 	/>
// 							// 	<div className="mt-4 lg:mt-0 text-center lg:text-start">
// 							// 		<Title
// 							// 			className="text-xl text-gray mb-3 font-medium can-hover:group-hover:text-gray-700 transition-colors"
// 							// 			as="h4"
// 							// 			text={el?.title}
// 							// 		/>
// 							// 		<Text
// 							// 			className="text-lg text-gray can-hover:group-hover:text-gray-700 transition-colors"
// 							// 			as="p"
// 							// 			text={el?.text}
// 							// 		/>
// 							// 	</div>
// 							// </animated.div>
// 						);
// 					})}
// 				</ul>
// 			</div>
// 		</section>
// 	);
// };

// export default HowItWorks;

import React, { useState, useEffect } from "react";
import { useTrail, animated } from "react-spring";
import Card from "./Card";
import { Title } from "ui/Title/Title";

const HowItWorks: React.FC = () => {
	const data = [
		{
			id: "1",
			title: "Enter details",
			text: "Start by filling out the relevant sections that make up the content of your resume.",
		},
		{
			id: "2",
			title: "Select a template",
			text: "Choose a template and customize your resume to suit your style and personality.",
		},
		{
			id: "3",
			title: "Download resume",
			text: "Quickly download your resume and edit it at any time.",
		},
	];

	return (
		<section className="section">
			<div className="container">
				<Title
					weight="medium"
					className="text-center title-color font-header text-3xl md:text-5xl mb-8"
					as="h2"
					text="How it works?"
				/>
				<ul className="flex items-center juntify-between">
					{data.map((props, index) => (
						<li
							key={props.id}
							data-aos="fade-up"
							data-aos-anchor-placement="center-center"
							data-aos-duration={index * 500}
						>
							<Card id={props.id} title={props.title} text={props.text} />
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default HowItWorks;
