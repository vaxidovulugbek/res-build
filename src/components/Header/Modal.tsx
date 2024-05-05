import React, { useState } from "react";
import { Button, Drawer, Space } from "antd";

const AnimatedModal: React.FC = () => {
	const [open, setOpen] = useState(false);

	const showDrawer = () => {
		setOpen(true);
	};

	const onClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Space>
				<Button type="primary" onClick={showDrawer}>
					Open
				</Button>
			</Space>
			<div className="margin-top-100px">
				<Drawer
					title="Basic Drawer"
					placement="top"
					closable={false}
					onClose={onClose}
					open={open}
					key="top"
					maskStyle={{ marginTop: "-300px" }}
					// maskStyle={{ style: { marginTop: "-100px" } }}
				>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
				</Drawer>
			</div>
		</>
	);
};

export default AnimatedModal;
