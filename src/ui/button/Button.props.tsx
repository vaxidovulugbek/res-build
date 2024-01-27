import React from "react";

export type ButtonProps = {
	variant?: "primary" | "filled" | "outlined" | "danger";
	size?: "lg" | "md" | "sm" | "icon";
	text?: string;
	isDisabled?: boolean;
	isLoading?: boolean;
	roundness?: "half" | "full" | false;
	link?: string;
	id?: any;
} & Omit<React.ComponentPropsWithoutRef<"button">, "disabled">;
