import { useDispatch } from "react-redux";
import { ResTamplate } from "../../../redux/actions";
import DrawerModal from "./Modal";

interface ModalResumesProps {
	modal: { open: string };
	setModal: React.Dispatch<React.SetStateAction<any>>;
	placement?: any;
}

const ModalResumes: React.FC<ModalResumesProps> = ({ modal, setModal, placement }) => {
	const { open } = modal;

	const dispatch = useDispatch();

	if (open !== "resumeTamplates") return <></>;

	const handleButtonClick = (num: number) => {
		dispatch(ResTamplate.setResumeTemplate(num));
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
				<button
					onClick={() => handleButtonClick(4)}
					className="py-2 ms-2 me-4 border-solid border-2 w-[100px]"
				>
					4
				</button>
				<button
					onClick={() => handleButtonClick(5)}
					className="py-2 ms-2 me-4 border-solid border-2 w-[100px]"
				>
					5
				</button>
			</div>
		</DrawerModal>
	);
};

export default ModalResumes;
