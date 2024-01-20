import { CloseOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	width?: number;
	title?: string;
	children?: React.ReactNode;
	className?: string;
	placement?: any;
}
export default function DrawerModal(props: ModalProps) {
	const {
		isOpen,
		onClose,
		width = 100,
		title = "",
		children,
		className = "",
		placement = "left",
	} = props;
	return (
		<Drawer
			width={width}
			placement={placement}
			className={`drawer_view ${className}`}
			open={isOpen}
			onClose={onClose}
			title={title}
			closeIcon={<CloseOutlined />}
		>
			{children}
		</Drawer>
	);
}
