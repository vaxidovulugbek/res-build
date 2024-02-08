import React, { useState } from "react";
import { Button } from "ui/Button/Button";
import { Logo } from "ui/Logo/Logo";
import { IoSunny, IoMoon } from "react-icons/io5";
// import logoimg from "../../assets/imgs/icons/logo.svg";
import { GoLock } from "react-icons/go";
import "./Header.scss";
import Navbar from "./NavBar";
import useStore from "Store";
import RoutesPath from "helpers/RoutesPath";
import { Modal } from "antd";
import SigninPage from "components/RegisterPage/SigninPage";
import LoginPage from "components/RegisterPage/LoginPage";

const Header: React.FC = () => {
	const { darkTheme, setDarkTheme } = useStore();
	const [firstModalVisible, setFirstModalVisible] = useState(false);
	const [secondModalVisible, setSecondModalVisible] = useState(false);

	const handleFirstModalNext = () => {
		setFirstModalVisible(false);
		setSecondModalVisible(true);
	};

	const handleSecondModalClose = () => {
		setSecondModalVisible(false);
	};
	return (
		<>
			<header className="header">
				<div className="container-box">
					<div className="flex items-center justify-between">
						<Logo
							className="ld h-14 w-26"
							size="sm"
							src="https://upload.wikimedia.org/wikipedia/commons/1/13/LOGO_OF_LOGO.svg"
							alt="logo"
							href="/"
							link="/"
						/>
						<div className="flex items-center">
							<Navbar />
							<div className="flex items-center">
								<div>
									<Button
										className="text-gray flex items-center flex-row-reverse ms-2"
										text="Login"
										children={<GoLock className="me-2" />}
										onClick={() => setFirstModalVisible(true)}
									/>
								</div>
								<Button
									className="ms-5 text-white bg-primary px-6 py-3 rounded-3xl shadow-xl"
									text="Get started"
									link={RoutesPath?.resume}
								/>
							</div>
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

			<Modal
				visible={firstModalVisible}
				onCancel={() => setFirstModalVisible(false)}
				footer={null}
				centered
				// transitionName="no-animation" // Agar animatsiya ishlatmaslikni istasangiz, "no-animation" deb nomlang
				// maskTransitionName="no-animation"
			>
				<SigninPage
					onClose={() => setFirstModalVisible(false)}
					onNext={handleFirstModalNext}
				/>
			</Modal>

			<Modal
				visible={secondModalVisible}
				onCancel={() => setSecondModalVisible(false)}
				footer={null}
				centered
			>
				<LoginPage onClose={handleSecondModalClose} />
			</Modal>
		</>
	);
};

export default Header;
