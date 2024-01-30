// import DrawerModal from "./Modal";
// // import { useDispatch, useSelector } from "react-redux";
// import { setResumeTemplate } from "redux/actions";
// import { useDispatch, useSelector } from "react-redux";

// interface ModalResumesProps {
// 	modal: { open: string };
// 	setModal: React.Dispatch<React.SetStateAction<any>>;
// 	placement?: any;
// }

// const ModalResumes: React.FC<ModalResumesProps> = ({ modal, setModal, placement }) => {
// 	const { open } = modal;

// 	if (open !== "resumeTamplates") return <></>;
// 	const dispatch = useDispatch();
// 	const resumeTemplate = useSelector((state: any) => state.resumeTemplate);
// 	const handleButtonClick = () => {
// 		// State'ni o'zgartirish uchun action'ni chaqirish
// 		dispatch(setResumeTemplate(3)); // Masalan, yangi template ID
// 	};
// 	return (
// 		<DrawerModal
// 			isOpen={open === "resumeTamplates"}
// 			onClose={() => setModal(false)}
// 			title={"Создать баннер"}
// 			width={500}
// 			placement={placement}
// 		>
// 			<div>
// 				<button
// 					// onClick={() => setResumeTamplate(1)}
// 					className="py-2 ms-2 me-4 border-solid border-2 w-[100px]"
// 				>
// 					1
// 				</button>
// 				<button
// 					// onClick={() => setResumeTamplate(1)}
// 					className="py-2 ms-2 me-4 border-solid border-2 w-[100px]"
// 				>
// 					2
// 				</button>
// 				<button
// 					// onClick={() => setResumeTamplate(1)}
// 					className="py-2 ms-2 me-4 border-solid border-2 w-[100px]"
// 				>
// 					3
// 				</button>
// 			</div>
// 		</DrawerModal>
// 	);
// };

// export default ModalResumes;

import DrawerModal from "./Modal";
import { setResumeTemplate } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

interface ModalResumesProps {
	modal: { open: string };
	setModal: React.Dispatch<React.SetStateAction<any>>;
	placement?: any;
}

const ModalResumes: React.FC<ModalResumesProps> = ({ modal, setModal, placement }) => {
	const { open } = modal;

	const dispatch = useDispatch();
	const resumeTemplate = useSelector((state: any) => state.resumeTemplate);

	if (open !== "resumeTamplates") return <></>;

	const handleButtonClick = (num: number) => {
		dispatch(setResumeTemplate(num));
	};

	return (
		<DrawerModal
			isOpen={open === "resumeTamplates"}
			onClose={() => setModal(false)}
			title={"Создать баннер"}
			width={500}
			placement={placement}
		>
			<div>
				<button
					onClick={() => handleButtonClick(1)}
					className="py-2 ms-2 me-4 border-solid border-2 w-[100px]"
				>
					1
				</button>
				<button
					onClick={() => handleButtonClick(2)}
					className="py-2 ms-2 me-4 border-solid border-2 w-[100px]"
				>
					2
				</button>
				<button
					onClick={() => handleButtonClick(3)}
					className="py-2 ms-2 me-4 border-solid border-2 w-[100px]"
				>
					3
				</button>
			</div>
		</DrawerModal>
	);
};

export default ModalResumes;
