import { fireEvent, render, screen } from "@testing-library/react";
import App from "App";
import { Faq } from "components/index";
const { MapArr } = require("./Filter");
const MapArr2 = require("./Filter");

// describe("", () => {
// 	// test("funcsiya aynan shunaqa massiv qaytaradimi yoki yoqmi tekshiradi", () => {
// 	// 	expect(MapArr([1, 2, 3]).toEqual([1, 2, 3]));
// 	// });

// 	test("adds 1 + 2 to equal 3", () => {
// 		expect(MapArr2(1, 2)).toBe(3);
// 	});
// });

test("MyComponent snapshotini yaratish", () => {
	const { asFragment } = render(<Faq />);
	expect(asFragment()).toMatchSnapshot();
});
