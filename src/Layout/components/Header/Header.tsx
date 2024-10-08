import React, { useState } from "react";
import { Button } from "ui/Button/Button";
import { Logo } from "ui/Logo/Logo";
// import { IoSunny, IoMoon } from "react-icons/io5";
import "./styles.scss";
import Navbar from "./NavBar";
import useStore from "../../../zustand/store";
import RoutesPath from "helpers/RoutesPath";
import SigninPage from "components/RegisterPage/SigninPage";
import LoginPage from "components/RegisterPage/LoginPage";
import AnimatedModal from "./Modal";
import resumelogo from "assets/imgs/icons/resume-high-resolution-logo-transparent (1).png";
import user from "assets/imgs/icons/user.png";

import { ModalOverlay, useDisclosure } from "@chakra-ui/react";
import Language from "./Language";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
	const { darkTheme, setDarkTheme } = useStore();
	const { t } = useTranslation();
	const {
		isOpen: isFirstModalOpen,
		onOpen: openFirstModal,
		onClose: closeFirstModal,
	} = useDisclosure();
	const {
		isOpen: isSecondModalOpen,
		onOpen: openSecondModal,
		onClose: closeSecondModal,
	} = useDisclosure();

	const handleFirstModalNext = () => {
		closeFirstModal();
		openSecondModal();
	};

	const handleSecondModalNext = () => {
		openFirstModal();
		closeSecondModal();
	};

	const handleSecondModalClose = () => {
		closeSecondModal();
	};

	const OverlayOne = () => (
		<ModalOverlay bg="blackAlpha.100" backdropFilter="blur(5px) hue-rotate(0deg)" />
	);
	const [overlay, setOverlay] = React.useState(<OverlayOne />);

	return (
		<>
			<header className="header">
				<div className="container-box">
					<div className="flex items-center justify-between">
						<Logo
							className="ld h-12 w-26"
							size="sm"
							src={resumelogo}
							alt="logo"
							href="/"
							link="/"
						/>
						<div className="flex items-center">
							<Navbar />
							<div className="flex items-center header__only-desktop">
								<div>
									<Button
										className="text-gray flex items-center flex-row-reverse ms-2"
										text={t("Login_in_accaunt")}
										// children={<GoLock className="me-2" />}
										children={
											<img className="w-5 me-1" src={user} alt="user" />
										}
										onClick={openFirstModal}
									/>
								</div>
								<Button
									className="ms-5 text-white bg-primary px-6 py-3 rounded-3xl shadow-xl capitalize"
									text={t("Get_started")}
									link={RoutesPath?.resume}
								/>
							</div>
							<div className="header__only-desktop">
								<Language />
							</div>
							{/* <Button
								className="header__only-mobile"
								children={'<CiMenuFries className="text-3xl" />'}
							/> */}
							<AnimatedModal
								isFirstModalOpen={isFirstModalOpen}
								closeSecondModal={closeSecondModal}
								isSecondModalOpen={isSecondModalOpen}
								closeFirstModal={closeFirstModal}
								handleSecondModalClose={handleSecondModalClose}
								handleFirstModalNext={handleFirstModalNext}
								handleSecondModalNext={handleSecondModalNext}
								openFirstModal={openFirstModal}
							/>
							{/* <div className="flex item-center ms-4">
								{darkTheme ? (
									<button onClick={() => setDarkTheme(!darkTheme)}>
										<IoMoon className="header__icon header__dark" />
									</button>
								) : (
									<button onClick={() => setDarkTheme(!darkTheme)}>
										<IoSunny className="header__icon header__light" />
									</button>
								)}
							</div> */}
						</div>
					</div>
				</div>
			</header>

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

export default Header;
