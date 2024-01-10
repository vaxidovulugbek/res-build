import React from "react";
import "./Header.scss";

const Navbar: React.FC = () => {
	return (
		<nav className="navbar">
			<ul className="nav-links flex align-center">
				<li className="navbar__items">
					<a href="#">Home</a>
				</li>
				<li className="navbar__items">
					<a href="#">About</a>
				</li>
				<li className="navbar__items">
					<a href="#">Contact</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
