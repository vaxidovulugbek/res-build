// import React from "react";
// import { render, screen } from "@testing-library/react";
// import FAQ from "components/FAQ/Faq";

// describe("FAQ Component Tests", () => {
// 	test("FAQ componenta ichida testt sozi bormi yoki yo'qligini tekshiradi", () => {
// 		const { getByText } = render(<FAQ />);
// 		const element = getByText(/testt/i);
// 		expect(element).toBeInTheDocument();
// 		// expect(element).toHaveStyle("background-color: red"); // or whatever style you expect
// 	});

// 	it("renders FAQ component with 'faq' class", async () => {
// 		render(<FAQ />);
// 		const faqComponent = screen.getByTestId("faq");
// 		expect(faqComponent).toBeInTheDocument();
// 		expect(faqComponent).toHaveClass("faq");
// 	});
// });

import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import FAQ from "components/FAQ/Faq";
import App from "App";
import Button from "./Button";

describe("FAQ Component Tests", () => {
	// test("Checks if 'testt' word is present inside FAQ component", () => {
	// 	render(<FAQ />);
	// 	const element = screen.getByText(/testt/i);
	// 	expect(element).toBeInTheDocument();
	// });
	// test("Renders FAQ component with 'faq' class", () => {
	// 	render(<FAQ />);
	// 	const faqComponent = screen.getByTestId("faq");
	// 	expect(faqComponent).toBeInTheDocument();
	// 	expect(faqComponent).toHaveClass("faq"); // expect ojidaniya degani yani oxirigi qiymat nima qaytarishini kutadi
	// });
});

describe("reandering app component", () => {
	it("render app component", () => {
		render(<App />);
		expect();
	});

	test("tugmani bosganda onClick handler chaqiriladi", () => {
		const handleClick = jest.fn();
		render(<Button onClick={handleClick}>Click Me</Button>);
		const buttonElement = screen.getByText(/Click Me/i);
		fireEvent.click(buttonElement);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});
	// 2. Foydalanuvchi Interaksiyalari
	// RTL foydalanuvchi interaksiyalarini, masalan, tugmalarni bosish, shakllarni to'ldirish va boshqa harakatlarni simulyatsiya qilish uchun qulay vositalar taqdim etadi.
});

describe("", () => {
	test("MyComponent snapshotini yaratish", () => {
		const { asFragment } = render(<App />);
		expect(asFragment()).toMatchSnapshot();
	});
});

// npm test qilib ishga tushiradi
