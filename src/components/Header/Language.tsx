import { useEffect, useState } from "react";
import { Button } from "ui/Button/Button";
import { Menu, MenuButton, MenuList, MenuItem, Text } from "@chakra-ui/react";
import lng from "assets/imgs/icons/language.svg";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import i18n from "servises/i18n";

const Language = () => {
	const [selectedOption, setSelectedOption] = useState(() => {
		const storedLang = sessionStorage.getItem("lang");
		return storedLang ? storedLang : "uz";
	});

	const handleSelect = (option: string) => {
		setSelectedOption(option);
		console.log("language tanlandi:", option);
		i18n.changeLanguage(option);
		sessionStorage.setItem("lang", option);
	};

	const { t } = useTranslation();
	// const lang = sessionStorage.getItem("lang");
	// useEffect(() => {
	// 	switch (lang) {
	// 		case "ru":
	// 			i18n.changeLanguage(lang);
	// 			break;
	// 		case "uz":
	// 			i18n.changeLanguage(lang);
	// 			break;
	// 	}
	// 	sessionStorage.setItem("lang", selectedOption);
	// }, [selectedOption]);

	return (
		<Menu>
			<MenuButton as={Text} cursor="pointer">
				<Button
					className="flex items-center flex-row-reverse ms-5 capitalize max-[480px]:m-0"
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
					{t("ru")}
				</MenuItem>
			</MenuList>
		</Menu>
	);
};

export default Language;
