import { PopularProducts, Faq, Header, Hero, HowItWorks, Making_Resume, Footer } from "components";
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
			<Footer />
		</>
	);
};

export default Home;
