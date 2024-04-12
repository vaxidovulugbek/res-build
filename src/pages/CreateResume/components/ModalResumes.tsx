import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "ui";
import { ResTamplate } from "../../../redux/actions";
import DrawerModal from "./Modal";
import { ModalResumesProps } from "types/interface";
// import Button from "./Button"; // Button komponentini import qilamiz

// interface ModalResumesProps {
// 	modal: { open: string };
// 	setModal: React.Dispatch<React.SetStateAction<any>>;
// 	placement?: any;
// }

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
			<div>
				{[1, 2, 3, 4, 5, 6].map((num) => (
					<Button
						key={num}
						onClick={() => handleButtonClick(num)}
						className="py-2 ms-2 me-4 border-solid border-2 w-[100px]"
					>
						{num}
					</Button>
				))}
			</div>
		</DrawerModal>
	);
};

export default ModalResumes;
