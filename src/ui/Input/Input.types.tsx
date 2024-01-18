import { InputHTMLAttributes } from "react";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size">;

export interface InputProps extends HTMLInputProps {
	size: "lg" | "md" | "sm";
	variant: "outlined";
	outerClass?: string;
	innerClass?: string;
	label?: string;
	errorMessage?: string | undefined;
	isDisabled?: boolean;
}
