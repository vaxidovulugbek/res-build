import React from "react";

export type TextTags = "p" | "span";

export type TextProps = {
	as: TextTags;
	text: string;
	weight?: "bold" | "semi-bold" | "medium" | "regular";
	size?: "xlg" | "lg" | "md" | "sm" | "xsm";
} & React.ComponentPropsWithoutRef<TextTags>;
