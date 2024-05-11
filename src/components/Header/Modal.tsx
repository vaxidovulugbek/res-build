import React, { useState } from "react";
import { Button, Drawer, Space } from "antd";
import { Link } from "react-router-dom";
import RoutesPath from "helpers/RoutesPath";
import Language from "./Language";
import user from "assets/imgs/icons/user.png";
import LoginPage from "components/RegisterPage/LoginPage";
import SigninPage from "components/RegisterPage/SigninPage";
import { useTranslation } from "react-i18next";

interface registerProps {
	closeFirstModal: () => void;
	handleSecondModalClose: () => void;
	handleFirstModalNext: () => void;
	handleSecondModalNext: () => void;
	closeSecondModal: () => void;
	openFirstModal: () => void;
	isFirstModalOpen: any; // Bu joyda any kelsa, avvalgi interface (registerProps) bilan mos keladi
	isSecondModalOpen: any; // Bu joyda any kelsa, avvalgi interface (registerProps) bilan mos keladi
}

const AnimatedModal: React.FC<registerProps> = ({
	closeFirstModal,
	isFirstModalOpen,
	handleSecondModalClose,
	handleFirstModalNext,
	closeSecondModal,
	isSecondModalOpen,
	handleSecondModalNext,
	openFirstModal,
}) => {
	const [open, setOpen] = useState(false);
	const { t } = useTranslation();
	const showDrawer = () => {
		setOpen(true);
	};

	const onClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Button
				className="header__only-mobile"
				children={
					<Space>
						<Button type="primary" onClick={showDrawer}>
							Open
						</Button>
					</Space>
				}
			/>
			<div className="margin-top-100px">
				<Drawer
					title="Resume Builder"
					placement="top"
					closable={false}
					onClose={onClose}
					open={open}
					key="top"
					maskStyle={{ marginTop: "-300px" }}
					// maskStyle={{ style: { marginTop: "-100px" } }}
				>
					<div className="flex flex-col justify-between h-full">
						<div className="flex flex-col">
							<Link className="text-md mb-3 capitalize" to={RoutesPath.home}>
								{t("home")}
							</Link>
							<Link
								className="text-md mb-3 capitalize"
								to={RoutesPath.downloadResume}
							>
								{t("download resume")}
							</Link>
							<Link className="text-md mb-3 capitalize" to={RoutesPath.resume}>
								{t("Resume_Templates")}
							</Link>
							<Link className="text-md mb-3 capitalize" to={RoutesPath.createResume}>
								{t("create resume")}
							</Link>
						</div>
						<div className="flex flex-col">
							<Language />
							<Button
								className="text-gray flex items-center justify-center mt-3 capitalize"
								onClick={openFirstModal}
							>
								<img className="w-5 me-1" src={user} alt="user" />{" "}
								{t("Login_in_accaunt")}
							</Button>
						</div>
					</div>
				</Drawer>
			</div>
			<LoginPage
				closeFirstModal={closeFirstModal}
				isFirstModalOpen={isFirstModalOpen}
				onClose={handleSecondModalClose}
				onNext={handleFirstModalNext}
			/>
			<SigninPage
				closeSecondModal={closeSecondModal}
				isSecondModalOpen={isSecondModalOpen}
				onClose={closeFirstModal}
				onNext={handleSecondModalNext}
			/>
		</>
	);
};

export default AnimatedModal;
