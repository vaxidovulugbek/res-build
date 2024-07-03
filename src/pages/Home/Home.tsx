import { PopularProducts, Faq, Header, Hero, HowItWorks, Making_Resume, Footer } from "components";
import React from "react";

const Home: React.FC = () => {
	return (
		<>
			{/* <Header /> */}
			<>
				<Hero />
				<HowItWorks />
				<PopularProducts />
				<Making_Resume />
				<Faq />
			</>
			{/* <Footer /> */}
		</>
	);
};

export default Home;
