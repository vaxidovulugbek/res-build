import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button } from "ui";
import { ResTamplate } from "../../../redux/actions";
import { DrawerModal } from "ui";
import { ModalResumesProps } from "types/interface";
import res1 from "assets/imgs/resume_templates/res1.png";
import { useSelectorRedux, useWindowSize } from "hooks";
import cn from "classnames";

const ModalResumes: React.FC<ModalResumesProps> = ({ modal, setModal, placement }) => {
	const { open } = modal;
	const dispatch = useDispatch();
	const { resumeTemplate } = useSelectorRedux();
	const width = useWindowSize();

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
			width={width > 500 ? 500 : width}
			placement={placement}
		>
			<div className="flex flex-wrap">
				{[1, 2, 3, 4, 5, 6].map((num) => (
					// console.log(num);
					<div className="w-full sm:w-1/2 p-2" key={num}>
						<Button
							onClick={() => handleButtonClick(num)}
							className={cn("w-full h-full border-solid border-2", {
								"border-slate-600": resumeTemplate == num,
							})}
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
