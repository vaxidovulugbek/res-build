import { CloseOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import { ModalProps } from "types/interface";

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
