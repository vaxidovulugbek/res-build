// import React from "react";
// import "./Making_Resume.scss";
// import tamplate from "../../assets/imgs/resume_templates/res1.png";

// const ResumesAnimation: React.FC = () => {
// 	return (
// 		// <div className="marquee">
// 		// 	<div className="marquee--inner">
// 		// 		<span className="animation-span">
// 		// 			<div className="marquee--inner__orb">1</div>
// 		// 			<div className="marquee--inner__orb">2</div>
// 		// 			<div className="marquee--inner__orb">3</div>
// 		// 			<div className="marquee--inner__orb">4</div>
// 		// 			<div className="marquee--inner__orb">5</div>
// 		// 			<div className="marquee--inner__orb">6</div>
// 		// 		</span>
// 		// 	</div>
// 		// </div>
// 		<div className={"anime-carousel-wrapper"}>
// 			<div className="anime-carousel">
// 				<div className="marquee">
// 					<div className="marquee--inner">
// 						<span>
// 							<div className="orb">
// 								<img src={tamplate} ="" />
// 							</div>
// 							<div className="orb">
// 								<img src={tamplate} ="" />
// 							</div>
// 							{/* <div className="orb">
// 								<img src={tamplate} ="" />
// 							</div>
// 							<div className="orb">
// 								<img src={tamplate} ="" />
// 							</div>
// 							<div className="orb">
// 								<img src={tamplate} ="" />
// 							</div>
// 							<div className="orb">
// 								<img src={tamplate} ="" />
// 							</div>
// 							<div className="orb">
// 								<img src={tamplate} ="" />
// 							</div> */}
// 						</span>
// 						<span>
// 							<div className="orb">
// 								<img src={tamplate} ="" />
// 							</div>
// 							<div className="orb">
// 								<img
// 									src="https://marketplace.canva.com/EAFRuCp3DcY/1/0/1131w/canva-black-white-minimalist-cv-resume-f5JNR-K5jjw.jpg"
// 									=""
// 								/>
// 							</div>
// 						</span>
// 					</div>
// 				</div>
// 			</div>
// 			{/* <div className="anime-carousel anime-carousel-second">
// 				<div className="marquee">
// 					<div className="marquee--inner">
// 						<span>
// 							<div className="orb">
// 								<img src={tamplate} ="" />
// 							</div>
// 							<div className="orb">
// 								<img src={tamplate} ="" />
// 							</div>
// 							<div className="orb">
// 								<img src={tamplate} ="" />
// 							</div>
// 							<div className="orb">
// 								<img src={tamplate} ="" />
// 							</div>
// 							<div className="orb">
// 								<img src={tamplate} ="" />
// 							</div>
// 							<div className="orb">
// 								<img src={tamplate} ="" />
// 							</div>
// 							<div className="orb">
// 								<img src={tamplate} ="" />
// 							</div>
// 						</span>
// 						<span>
// 							<div className="orb">
// 								<img src={tamplate} ="" />
// 							</div>
// 							<div className="orb">
// 								<img src={tamplate} ="" />
// 							</div>
// 							<div className="orb">
// 								<img src={tamplate} ="" />
// 							</div>
// 							\
// 							<div className="orb">
// 								<img src={tamplate} ="" />
// 							</div>
// 							<div className="orb">
// 								<img src={tamplate} ="" />
// 							</div>
// 							<div className="orb">
// 								<img src={tamplate} ="" />
// 							</div>
// 							<div className="orb">
// 								<img src={tamplate} ="" />
// 							</div>
// 						</span>
// 					</div>
// 				</div>
// 			</div> */}
// 		</div>
// 	);
// };

// export default ResumesAnimation;

// // AnimationComponent.js
// import React from "react";
// import { useSpring, animated } from "react-spring";

// const AnimationComponent = () => {
// 	const totalCards = 5;

// 	const springProps = useSpring({
// 		from: { transform: "translateY(100%)" },
// 		to: { transform: "translateY(0%)" },
// 		reset: true, // Animatsiyani tugaganda boshlang'ich holatga qaytaradi
// 		loop: { reverse: true }, // Animatsiyani turib turish
// 	});

// 	return (
// 		<animated.div style={springProps} className="app">
// 			{[...Array(totalCards)].map((_, index) => (
// 				<div key={index} className="card-box">
// 					<p>Card {index + 1}</p>
// 				</div>
// 			))}
// 		</animated.div>
// 	);
// };

// export default AnimationComponent;

import React from "react";
import "./Making_Resume.scss";

const Animation: React.FC<{ className: string; num: string }> = ({ className, num }) => {
	return (
		<div className={`slider ${className}`}>
			<div className={`${num === "1" ? "slide-track" : "slide-track-Bottom"}`}>
				<div className="slide">
					<img src="https://marketplace.canva.com/EAFC-9sdKHg/2/0/1131w/canva-black-and-white-minimalist-simple-design-freelancer-resume-wIpoHMlKB6I.jpg" />
				</div>
				<div className="slide">
					<img src="https://marketplace.canva.com/EAEoLAxIWIo/1/0/1131w/canva-black-and-white-color-blocks-software-engineer-resume--RKK1cTL5JA.jpg" />
				</div>
				<div className="slide">
					<img src="https://cdn-images.zety.com/templates/zety/minimo-4-classic-blue-navy-200@3x.png" />
				</div>
				<div className="slide">
					<img src="https://resumegenius.com/wp-content/uploads/2024-Modern-Resume-Template-Violet.png" />
				</div>
				<div className="slide">
					<img src="https://i.etsystatic.com/43852575/r/il/e184e7/4982637963/il_fullxfull.4982637963_byt7.jpg" />
				</div>
				<div className="slide">
					<img src="https://resumegenius.com/wp-content/uploads/clean-resume-skin-orange.png" />
				</div>
				<div className="slide">
					<img src="https://i.pinimg.com/736x/82/e0/92/82e092be16cf77305cbfff242ccdb7e9.jpg" />
				</div>
				{/* end */}
				<div className="slide">
					<img src="https://marketplace.canva.com/EAFC-9sdKHg/2/0/1131w/canva-black-and-white-minimalist-simple-design-freelancer-resume-wIpoHMlKB6I.jpg" />
				</div>
				<div className="slide">
					<img src="https://marketplace.canva.com/EAEoLAxIWIo/1/0/1131w/canva-black-and-white-color-blocks-software-engineer-resume--RKK1cTL5JA.jpg" />
				</div>
				<div className="slide">
					<img src="https://cdn-images.zety.com/templates/zety/minimo-4-classic-blue-navy-200@3x.png" />
				</div>
				<div className="slide">
					<img src="https://resumegenius.com/wp-content/uploads/2024-Modern-Resume-Template-Violet.png" />
				</div>
				<div className="slide">
					<img src="https://i.etsystatic.com/43852575/r/il/e184e7/4982637963/il_fullxfull.4982637963_byt7.jpg" />
				</div>
				<div className="slide">
					<img src="https://resumegenius.com/wp-content/uploads/clean-resume-skin-orange.png" />
				</div>
				<div className="slide">
					<img src="https://i.pinimg.com/736x/82/e0/92/82e092be16cf77305cbfff242ccdb7e9.jpg" />
				</div>
			</div>
		</div>
	);
};

export default Animation;
