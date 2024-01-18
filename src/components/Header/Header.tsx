import React from "react";
import { Button } from "ui/Button/Button";
import { Logo } from "ui/Logo/Logo";
import { IoSunny, IoMoon } from "react-icons/io5";
// import logoimg from "../../assets/imgs/icons/logo.svg";
import "./Header.scss";
import Navbar from "./NavBar";
import useStore from "Store";

const Header: React.FC = () => {
	const { darkTheme, setDarkTheme } = useStore();
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
							<div>
								<Button
									className="text-white bg-cyan-700 px-4 py-1.5 rounded-lg shadow-xl"
									text="Log In"
								/>
								<Button
									className="ms-5 text-white bg-cyan-700 px-4 py-1.5 rounded-lg shadow-xl"
									text="SignUp"
								/>
							</div>
							<div className="flex item-center ms-4">
								{darkTheme ? (
									<button onClick={() => setDarkTheme(!darkTheme)}>
										<IoMoon className="header__icon header__dark" />
									</button>
								) : (
									<button onClick={() => setDarkTheme(!darkTheme)}>
										<IoSunny className="header__icon header__light" />
									</button>
								)}
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
