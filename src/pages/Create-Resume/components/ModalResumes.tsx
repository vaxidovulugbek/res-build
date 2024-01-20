import DrawerModal from "./Modal";
interface ModalResumesProps {
	modal: { open: string };
	setModal: React.Dispatch<React.SetStateAction<any>>;
	placement?: any;
}

const ModalResumes: React.FC<ModalResumesProps> = ({ modal, setModal, placement }) => {
	const { open } = modal;

	if (open !== "resumeTamplates") return <></>;

	return (
		<DrawerModal
			isOpen={open === "resumeTamplates"}
			onClose={() => setModal(false)}
			title={"Создать баннер"}
			width={500}
			placement={placement}
		>
			<div>modal resumelar toplami .....</div>
		</DrawerModal>
	);
};

export default ModalResumes;
