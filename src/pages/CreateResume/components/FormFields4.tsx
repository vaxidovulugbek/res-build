import React from "react";
import { Title, Text } from "ui";

export default function FormFields4({ handlePrevSlide }: any) {
	return (
		<div className="editor__form-content">
			<div className="min-[320px]:mb-3 xl:mb-5">
				<Title
					className="editor__title title-color"
					as="h1"
					text="Add Additional Section"
				/>
			</div>
		</div>
	);
}
