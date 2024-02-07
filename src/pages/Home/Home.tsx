// import RoutesPath from "helpers/RoutesPath";
// import React, { lazy, Suspense } from "react";

// const Header = lazy(() => import("components/Header/Header"));
// const Hero = lazy(() => import("components/Hero/Hero"));
// const FAQ = lazy(() => import("components/FAQ/Faq"));
// const HowItWorks = lazy(() => import("components/HowItWorks/HowItWorks"));

// const routes = [
// 	{ path: RoutesPath?.home, element: <Header />, title: "header" },
// 	{ path: RoutesPath?.home, element: <Hero /> },
// 	{ path: RoutesPath?.home, element: <FAQ /> },
// 	{ path: RoutesPath?.home, element: <HowItWorks /> },
// ];

// const AllRoutes: React.FC = () => {
// 	return (
// 		<Suspense fallback={<p>Loading...</p>}>
// 			<React.Fragment>
// 				{routes
// 					?.filter((routes) => routes.title === "header")
// 					.map(({ path, element, title }, i) => {
// 						return <React.Fragment key={i}>{element}</React.Fragment>;
// 					})}
// 			</React.Fragment>
// 			<main>
// 				{routes
// 					?.filter((routes) => routes.title !== "header")
// 					.map(({ path, element, title }, i) => {
// 						return <React.Fragment key={i}>{element}</React.Fragment>;
// 					})}
// 			</main>
// 		</Suspense>
// 	);
// };

// export default AllRoutes;

import Faq from "components/FAQ/Faq";
import Header from "components/Header/Header";
import Hero from "components/Hero/Hero";
import HowItWorks from "components/HowItWorks/HowItWorks";
import Animation from "components/Making_Resume/Making_Resume";
import PopularProducts from "components/PopularProducts/PopularProducts";
import React from "react";

const Home: React.FC = () => {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<PopularProducts />
				<HowItWorks />
				<Animation />
				<Faq />
			</main>
		</>
	);
};

export default Home;
