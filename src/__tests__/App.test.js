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
import { render, screen } from "@testing-library/react";
import FAQ from "components/FAQ/Faq";

describe("FAQ Component Tests", () => {
	test("Checks if 'testt' word is present inside FAQ component", () => {
		render(<FAQ />);
		const element = screen.getByText(/testt/i);
		expect(element).toBeInTheDocument();
	});

	test("Renders FAQ component with 'faq' class", () => {
		render(<FAQ />);
		const faqComponent = screen.getByTestId("faq");
		expect(faqComponent).toBeInTheDocument();
		expect(faqComponent).toHaveClass("faq");
	});
});
