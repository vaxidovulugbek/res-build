import React from "react";
import { Button } from "../../ui/Button/Button";
import Logo from "../../ui/Logo/Logo";
// import logoimg from "../../assets/imgs/icons/logo.svg";
import "./Header.scss";
import Navbar from "./NavBar";

const Header: React.FC = () => {
	return (
		<>
			<header className="header">
				<div className="container-box">
					<div className="flex align-center justify-between">
						<Logo
							className="ld h-14 w-26"
							size={"sm"}
							src="https://upload.wikimedia.org/wikipedia/commons/1/13/LOGO_OF_LOGO.svg"
						/>
						<div className="flex align-center">
							<Navbar />
							<div>
								<Button text="Log In" />
								<Button text="Sign In" />
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
