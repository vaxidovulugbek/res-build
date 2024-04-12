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
