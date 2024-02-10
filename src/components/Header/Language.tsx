import { useState } from "react";
import { Button } from "ui/Button/Button";
import { Menu, MenuButton, MenuList, MenuItem, Text } from "@chakra-ui/react";
import lng from "../../assets/imgs/icons/language.svg";

const MyDropdown = () => {
	const [selectedOption, setSelectedOption] = useState("uz");

	const handleSelect = (option: string) => {
		setSelectedOption(option);
	};

	return (
		<Menu>
			<MenuButton as={Text} cursor="pointer">
				<Button
					className="flex items-center flex-row-reverse ms-5 capitalize"
					text={selectedOption}
					size="lg"
					children={<img className="me-1" src={lng} alt="" />}
				/>
			</MenuButton>
			<MenuList minWidth="100px">
				<MenuItem className="capitalize" onClick={() => handleSelect("uz")}>
					uz
				</MenuItem>
				<MenuItem className="capitalize" onClick={() => handleSelect("ru")}>
					ru
				</MenuItem>
			</MenuList>
		</Menu>
	);
};

export default MyDropdown;
