import Header from "components/Header/Header";
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
			<p>lorem10000</p>
		</>
	);
};

export default Resume;
