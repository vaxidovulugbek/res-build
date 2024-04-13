// import Header from "components/Header/Header";
import { Footer, Header } from "components";
import React from "react";
import Filter from "./components/Filter";
import "./components/styles.scss";

const Resume: React.FC = () => {
	return (
		<>
			<Header />
			<main>
				<Filter />
			</main>
			<Footer />
		</>
	);
};

export default Resume;
