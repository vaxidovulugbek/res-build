import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "ui";
import { ResTamplate } from "../../../redux/actions";
import { DrawerModal } from "ui";
import { ModalResumesProps } from "types/interface";
import res1 from "assets/imgs/resume_templates/res1.png";

const ModalResumes: React.FC<ModalResumesProps> = ({ modal, setModal, placement }) => {
	const { open } = modal;
	const dispatch = useDispatch();

	const handleButtonClick = (num: number) => {
		dispatch(ResTamplate.setResumeTemplate(num));
		// setModal(false); // modalni yopish
	};

	if (open !== "resumeTamplates") return null; // bo'sh element qaytarish

	return (
		<DrawerModal
			isOpen={open === "resumeTamplates"}
			onClose={() => setModal(false)}
			title={"Создать баннер"}
			width={500}
			placement={placement}
		>
			<div className="flex flex-wrap">
				{[1, 2, 3, 4, 5, 6].map((num) => (
					<div className="w-[100px] sm:w-1/2 p-2">
						<Button
							key={num}
							onClick={() => handleButtonClick(num)}
							className="w-full h-full border-solid border-2"
						>
							<img className="w-full h-full" src={res1} alt="resume tamplate" />
						</Button>
					</div>
				))}
			</div>
			{/* <Button link="/download-resume">downloadResume</Button> */}
		</DrawerModal>
	);
};

export default ModalResumes;
