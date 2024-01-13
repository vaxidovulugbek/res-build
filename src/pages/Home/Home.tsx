// import React from "react";

// const Home: React.FC = () => {
// 	return <div>Home</div>;
// };

// export default Home;

// import Loading from "components/Loading/Loading";
import RoutesPath from "helpers/RoutesPath";
import React, { lazy, Suspense } from "react";

const Header = lazy(() => import("components/Header/Header"));
const Hero = lazy(() => import("components/Hero/Hero"));
const FAQ = lazy(() => import("components/FAQ/Faq"));
const HowItWorks = lazy(() => import("components/HowItWorks/HowItWorks"));

const routes = [
	{ path: RoutesPath?.home, element: <Header />, title: "header" },
	{ path: RoutesPath?.home, element: <Hero /> },
	{ path: RoutesPath?.home, element: <FAQ /> },
	{ path: RoutesPath?.home, element: <HowItWorks /> },
];

const AllRoutes: React.FC = () => {
	return (
		<Suspense fallback={<p>Loading...</p>}>
			<React.Fragment>
				{routes
					?.filter((routes) => routes.title == "header")
					.map(({ path, element, title }, i) => {
						return <div key={i}>{element}</div>;
					})}
			</React.Fragment>
			<main>
				{routes
					?.filter((routes) => routes.title !== "header")
					.map(({ path, element, title }, i) => {
						return <div key={i}>{element}</div>;
					})}
			</main>
		</Suspense>
	);
};

export default AllRoutes;