import React from "react";
import "./PopularProducts.scss";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const PopularProducts: React.FC = () => {
	const cards = [
		{
			img: "https://marketplace.canva.com/EAFC-9sdKHg/2/0/1131w/canva-black-and-white-minimalist-simple-design-freelancer-resume-wIpoHMlKB6I.jpg",
		},
		{
			img: "https://marketplace.canva.com/EAEoLAxIWIo/1/0/1131w/canva-black-and-white-color-blocks-software-engineer-resume--RKK1cTL5JA.jpg",
		},
		{ img: "https://cdn-images.zety.com/templates/zety/minimo-4-classic-blue-navy-200@3x.png" },
		{
			img: "https://resumegenius.com/wp-content/uploads/2024-Modern-Resume-Template-Violet.png",
		},
		{
			img: "https://i.etsystatic.com/43852575/r/il/e184e7/4982637963/il_fullxfull.4982637963_byt7.jpg",
		},
		{ img: "https://resumegenius.com/wp-content/uploads/clean-resume-skin-orange.png" },
		{ img: "https://i.pinimg.com/736x/82/e0/92/82e092be16cf77305cbfff242ccdb7e9.jpg" },
	];
	const settings: Settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
	};
	return (
		<section className="section">
			<div className="container">
				<div className="slick-slider">
					<Slider {...settings}>
						{cards.map((card, index) => (
							<div className="slick-slider__card" key={index}>
								<div className="slick-slider__card-content overflow-hidden rounded-xl">
									<img src={card?.img} alt="resume tamplate" />
								</div>
							</div>
						))}
					</Slider>
				</div>
			</div>
		</section>
	);
};

export default PopularProducts;
