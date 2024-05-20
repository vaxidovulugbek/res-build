import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button } from "ui";
import { ResTamplate } from "../../../redux/actions";
import { DrawerModal } from "ui";
import { ModalResumesProps } from "types/interface";
import res1 from "assets/imgs/resume_templates/res1.jpg";
import res3 from "assets/imgs/resume_templates/res3.jpg";
import res5 from "assets/imgs/resume_templates/res5.jpg";
import res4 from "assets/imgs/resume_templates/res4.jpg";
import res2 from "assets/imgs/resume_templates/res2.jpg";
import res6 from "assets/imgs/resume_templates/res6.jpg";
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
				{[
					{ id: 1, img: res1 },
					{ id: 2, img: res2 },
					{ id: 3, img: res3 },
					{ id: 4, img: res4 },
					{ id: 5, img: res5 },
					{ id: 6, img: res6 },
				].map((item) => (
					<div className="w-full sm:w-1/2 p-2" key={item.id}>
						<Button
							onClick={() => handleButtonClick(item.id)}
							className={cn("w-full h-full border-solid border-2", {
								"border-slate-600": resumeTemplate === item.id,
							})}
						>
							<img className="w-full h-full" src={item.img} alt="resume tamplate" />
						</Button>
					</div>
				))}
			</div>
		</DrawerModal>
	);
};

export default ModalResumes;
