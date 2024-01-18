import React from "react";
import { Input } from "ui/Input/Input";
import "./PersonalDetails.scss";

const PersonalDetails: React.FC = () => {
	return (
		<div>
			<Input
				className="border-solid border-2 border-indigo-600"
				size="lg"
				label="this is a label input "
				variant={"outlined"}
				errorMessage={"errrr"}
			/>
		</div>
	);
};

export default PersonalDetails;
