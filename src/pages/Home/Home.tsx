import { PopularProducts, Faq, Hero, HowItWorks, Making_Resume } from "components";
import Info from "components/Info/Info";
import React from "react";

const Home: React.FC = () => {
	return (
		<>
			<main>
				<Hero />
				<HowItWorks />
				<PopularProducts />
				<Making_Resume />
				<Info />
				<Faq />
			</main>
		</>
	);
};

export default Home;
