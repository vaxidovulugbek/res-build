import { useEffect, useState } from "react";
import { Button } from "ui/Button/Button";
import { Menu, MenuButton, MenuList, MenuItem, Text } from "@chakra-ui/react";
import lng from "assets/imgs/icons/language.svg";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import i18n from "servises/i18n";

const Language = () => {
	const [selectedOption, setSelectedOption] = useState("uz");

	const handleSelect = (option: string) => {
		setSelectedOption(option);
		console.log("language tanlandi:", option);
	};

	const { t } = useTranslation();
	useEffect(() => {
		switch (selectedOption) {
			case "ru":
				i18n.changeLanguage(selectedOption);
				break;
			case "uz":
				i18n.changeLanguage(selectedOption);
				break;
		}
	}, [selectedOption]);

	return (
		<Menu>
			<MenuButton as={Text} cursor="pointer">
				<Button
					className="flex items-center flex-row-reverse ms-5 capitalize header__only-desktop"
					text={selectedOption}
					size="lg"
					children={<img className="me-1" src={lng} alt="" />}
				/>
			</MenuButton>
			<MenuList minWidth="100px">
				<MenuItem
					key="uz"
					className={cn("capitalize bg-inherit", {
						"header__lang-bg": selectedOption === "uz",
					})}
					onClick={() => handleSelect("uz")}
				>
					{t("uz")}
				</MenuItem>
				<MenuItem
					key="ru"
					className={cn("capitalize bg-inherit", {
						"header__lang-bg": selectedOption === "ru",
					})}
					onClick={() => handleSelect("ru")}
				>
					ru
				</MenuItem>
			</MenuList>
		</Menu>
	);
};

export default Language;
