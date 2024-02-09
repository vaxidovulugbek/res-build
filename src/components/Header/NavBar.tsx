import React from "react";
import { Button } from "ui/Button/Button";
import "./Header.scss";

const Navbar: React.FC = () => {
	return (
		<nav className="navbar me-20">
			<ul className="nav-links flex items-center">
				<li className="navbar__items">
					<a className="navbar__link" href="#">
						Resume Templates
					</a>
				</li>
				<li className="navbar__items">
					<a className="navbar__link" href="#">
						Contact
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
