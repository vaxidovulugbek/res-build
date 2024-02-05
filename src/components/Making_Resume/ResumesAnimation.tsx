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

const Animation: React.FC = () => {
	return (
		<div className="slider">
			<div className="slide-track">
				<div className="slide">
					<img
						src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
						height={100}
						width={250}
					/>
				</div>
				<div className="slide">
					<img
						src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
						height={100}
						width={250}
					/>
				</div>
				<div className="slide">
					<img
						src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
						height={100}
						width={250}
					/>
				</div>
				<div className="slide">
					<img
						src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
						height={100}
						width={250}
					/>
				</div>
				<div className="slide">
					<img
						src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
						height={100}
						width={250}
					/>
				</div>
				<div className="slide">
					<img
						src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
						height={100}
						width={250}
					/>
				</div>
				<div className="slide">
					<img
						src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
						height={100}
						width={250}
					/>
				</div>
				<div className="slide">
					<img
						src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
						height={100}
						width={250}
					/>
				</div>
				<div className="slide">
					<img
						src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
						height={100}
						width={250}
					/>
				</div>
				<div className="slide">
					<img
						src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
						height={100}
						width={250}
					/>
				</div>
				<div className="slide">
					<img
						src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
						height={100}
						width={250}
					/>
				</div>
				<div className="slide">
					<img
						src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
						height={100}
						width={250}
					/>
				</div>
				<div className="slide">
					<img
						src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
						height={100}
						width={250}
					/>
				</div>
				<div className="slide">
					<img
						src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
						height={100}
						width={250}
					/>
				</div>
			</div>
		</div>
	);
};

export default Animation;
