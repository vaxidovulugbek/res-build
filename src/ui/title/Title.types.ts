import React from "react";

export type TitleTags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type TitleProps = {
	as: TitleTags;
	text: string;
} & React.ComponentPropsWithoutRef<TitleTags>;
