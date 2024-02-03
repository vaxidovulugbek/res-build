import Loading from "components/Loading/Loading";
import RoutesPath from "helpers/RoutesPath";
import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("pages/Home/Home"));
const Resume = lazy(() => import("pages/Resume/Resume"));
const CreateResume = lazy(() => import("pages/Create-Resume/CreateResume"));

const routes = [
	{ path: RoutesPath?.home, element: <Home /> },
	{ path: RoutesPath?.resume, element: <Resume /> },
	{ path: RoutesPath?.createResume, element: <CreateResume /> },
];

const AllRoutes: React.FC = () => {
	return (
		<Suspense fallback={<Loading />}>
			<React.Fragment>
				<Routes>
					{routes.map(({ path, element }, i) => {
						return <Route key={i} path={path} element={element} />;
					})}
				</Routes>
			</React.Fragment>
		</Suspense>
	);
};

export default AllRoutes;
