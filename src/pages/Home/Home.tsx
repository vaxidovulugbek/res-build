import { PopularProducts, Faq, Header, Hero, HowItWorks, Making_Resume } from "components";
import React from "react";

const Home: React.FC = () => {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<PopularProducts />
				<HowItWorks />
				<Making_Resume />
				<Faq />
			</main>
		</>
	);
};

export default Home;
