import RoutesPath from "helpers/RoutesPath";
import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("pages/Home/Home"));
const Resume = lazy(() => import("pages/Resume/Resume"));

const routes = [
	{ path: RoutesPath?.home, element: <Home /> },
	{ path: RoutesPath?.resume, element: <Resume /> },
];

const AllRoutes: React.FC = () => {
	return (
		<Suspense fallback={<p>Loading...</p>}>
			<React.Fragment>
				<Routes>
					{routes.map(({ path, element }, i) => {
						return (
							<Route key={i} path={path} element={element}>
								{/* <React.Fragment key={i}>{element}</React.Fragment> */}
							</Route>
						);
					})}
				</Routes>
			</React.Fragment>
			{/* <main>
				{routes
					?.filter((routes) => routes.title !== "header")
					.map(({ path, element, title }, i) => {
						return <React.Fragment key={i}>{element}</React.Fragment>;
					})}
			</main> */}
		</Suspense>
	);
};

export default AllRoutes;
