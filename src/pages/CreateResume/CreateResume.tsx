import { Header } from "components";
import React from "react";
import { FormUI } from "./components";

const CreateResume: React.FC = () => {
	return (
		<>
			<Header />
			<main className="py-6">
				<FormUI />
			</main>
		</>
	);
};

export default CreateResume;
