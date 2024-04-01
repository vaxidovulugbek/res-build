import React from "react";
import { Button } from "ui/Button/Button";
import "./Header.scss";
import { Menu, MenuButton, MenuList, MenuItem, Text } from "@chakra-ui/react";
// import { CiMenuFries } from "react-icons/ci";

const Navbar: React.FC = () => {
	return (
		<>
			<nav className="navbar lg:me-20 md:me-10 sm:me-4">
				<ul className="lg:flex sm:hidden nav-links items-center">
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
				<Menu>
					<MenuButton className="lg:hidden" as={Text} cursor="pointer">
						<Button
							className="flex items-center flex-row-reverse ms-5 capitalize"
							text="menu"
							size="lg"
						/>
					</MenuButton>
					<MenuList minWidth="100px">
						<MenuItem className="capitalize">
							<a href="#">Resume Templates</a>
						</MenuItem>
						<MenuItem className="capitalize">
							<a href="#">Contact</a>
						</MenuItem>
					</MenuList>
				</Menu>
			</nav>
			<Button
				className="header__only-mobile"
				children={'<CiMenuFries className="text-3xl" />'}
			/>
		</>
	);
};

export default Navbar;
