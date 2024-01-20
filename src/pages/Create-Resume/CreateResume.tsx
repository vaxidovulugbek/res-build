import Header from "components/Header/Header";
import React from "react";
import { FormUI } from "./components";
// import { FormUI } from "./components";
// import FormUI from "./components/FormUI";

const CreateResume: React.FC = () => {
	return (
		<>
			<Header />
			<main className="pt-6">
				<FormUI />
			</main>
		</>
	);
};

export default CreateResume;
