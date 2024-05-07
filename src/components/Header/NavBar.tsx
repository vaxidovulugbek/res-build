import React from "react";
import { Button } from "ui";
import "./styles.scss";
import { Menu, MenuButton, MenuList, MenuItem, Text } from "@chakra-ui/react";
import RoutesPath from "helpers/RoutesPath";
import { useTranslation } from "react-i18next";
// import { CiMenuFries } from "react-icons/ci";

const Navbar: React.FC = () => {
	const { t } = useTranslation();
	return (
		<>
			<nav className="navbar lg:me-20 md:me-10 sm:me-4">
				<ul className="lg:flex sm:hidden nav-links items-center">
					<li className="navbar__items">
						<Button
							className="navbar__link capitalize"
							link={RoutesPath.resume}
							text={t("Resume_Templates")}
						/>
					</li>
					<li className="navbar__items">
						<Button
							className="navbar__link capitalize"
							link={RoutesPath.resume}
							text={t("Pricing")}
						/>
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
							<Button link={RoutesPath.resume} text="Resume Templates" />
						</MenuItem>
						<MenuItem className="capitalize">
							<Button link={RoutesPath.resume} text="Pricing" />
						</MenuItem>
					</MenuList>
				</Menu>
			</nav>
		</>
	);
};

export default Navbar;
