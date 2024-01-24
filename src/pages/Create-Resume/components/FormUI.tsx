import React, { useState } from "react";
import { GrLinkNext } from "react-icons/gr";
import "./styles.scss";
import ModalResumes from "./ModalResumes";
import { DrawerProps } from "antd";
import { Title, Text, Button } from "ui";
import FormFields from "./FormFields";

const FormUI: React.FC = () => {
	const [modal, setModal] = useState({ open: "" });
	const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");
	return (
		<section>
			<ModalResumes modal={modal} setModal={setModal} placement={placement} />
			<div className="container-box">
				<div className="flex editor">
					<div className="flex flex-col w-1/2 pe-16">
						<div className="flex justify-between">
							<Button
								className="radius_half text-cyan-700 border-solid border-1 border-cyan-700 hover:bg-cyan-700 delay-100 hover:text-white px-4 py-1.5 rounded-lg shadow-xl"
								text="Templates"
								onClick={() => setModal({ open: "resumeTamplates" })}
							/>
							<Button
								className="flex items-center"
								text="Next"
								link="/"
								children={<GrLinkNext className="ms-2" />}
							/>
						</div>
						<div className="xl:mt-5 md:mt-3 sm:mt-2 min-[320px]:mt-2 editor__form">
							<div className="min-[320px]:mb-3 xl:mb-5">
								<Title
									className="editor__title title-color"
									as="h1"
									text="Personal Details"
								/>
								<Text
									className="text-gray"
									as="p"
									text="Get started with the basics: your name and contact information."
								/>
							</div>
							<FormFields />
						</div>
					</div>
					<div className="w-1/2">resume</div>
				</div>
			</div>
		</section>
	);
};

export default FormUI;
