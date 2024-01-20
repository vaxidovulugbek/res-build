import React, { useState } from "react";
import { Button } from "ui/Button/Button";
import { GrLinkNext } from "react-icons/gr";
import "./styles.scss";
import ModalResumes from "./ModalResumes";
import { DrawerProps } from "antd";

const FormUI: React.FC = () => {
	const [modal, setModal] = useState({ open: "" });
	const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");
	return (
		<section>
			<ModalResumes modal={modal} setModal={setModal} placement={placement} />
			<div className="container-box">
				<div className="flex editor">
					<div className="w-1/2 flex justify-between pe-16">
						<Button
							className="radius_half text-cyan-700 border-solid border-1 border-cyan-700 hover:bg-cyan-700 delay-100 hover:text-white px-4 py-1.5 rounded-lg shadow-xl"
							text="Templates"
							onClick={() => setModal({ open: "resumeTamplates" })}
						/>
						<Button
							className="flex items-center"
							text="Templates"
							link="/"
							children={<GrLinkNext className="ms-2" />}
						/>
					</div>
					<div className="w-1/2">resume</div>
				</div>
			</div>
		</section>
	);
};

export default FormUI;
