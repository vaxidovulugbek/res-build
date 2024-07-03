// import RoutesPath from "helpers/RoutesPath";
// import React, { lazy, Suspense } from "react";
// import { Route, Routes } from "react-router-dom";
// import { Loading } from "./components";
// import Layout from "Layout/Layout";
// import App from "App";

// const Home = lazy(() => import("pages/Home/Home"));
// const Resume = lazy(() => import("pages/Resume/Resume"));
// const CreateResume = lazy(() => import("pages/CreateResume/CreateResume"));
// const ErrorPage = lazy(() => import("pages/Error/index"));
// const DownloadResume = lazy(() => import("pages/DownloadResume/DownloadResume"));

// const routes = [
// 	{ path: RoutesPath?.home, element: <Home /> },
// 	{ path: RoutesPath?.resume, element: <Resume /> },
// 	{ path: RoutesPath?.createResume, element: <CreateResume /> },
// 	{ path: RoutesPath?.downloadResume, element: <DownloadResume /> },
// 	{ path: RoutesPath?.error, element: <ErrorPage /> },
// ];

// const AllRoutes: React.FC = () => {
// 	return (
// 		<Suspense fallback={<Loading />}>
// 			<React.Fragment>
// 				<Routes>
// 					{routes.map(({ path, element }, i) => {
// 						return <Route key={i} path={path} element={element} />;
// 					})}
// 				</Routes>
// 			</React.Fragment>
// 		</Suspense>
// 	);
// };

// export default () => {
// 	return (
// 		<App>
// 			<Layout>
// 				<Suspense fallback={<Loading />}>
// 					<React.Fragment>
// 						<Routes>
// 							{routes.map(({ path, element }, i) => {
// 								return <Route key={i} path={path} element={element} />;
// 							})}
// 						</Routes>
// 					</React.Fragment>
// 				</Suspense>
// 			</Layout>
// 		</App>
// 	);
// };

// // export default AllRoutes;

import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import RoutesPath from "helpers/RoutesPath";
import { Loading } from "./components";
import Layout from "Layout/Layout";
import App from "./App";

const Home = lazy(() => import("pages/Home/Home"));
const Resume = lazy(() => import("pages/Resume/Resume"));
const CreateResume = lazy(() => import("pages/CreateResume/CreateResume"));
const ErrorPage = lazy(() => import("pages/Error/index"));
const DownloadResume = lazy(() => import("pages/DownloadResume/DownloadResume"));

const routes = [
	{ path: RoutesPath?.home, element: <Home /> },
	{ path: RoutesPath?.resume, element: <Resume /> },
	{ path: RoutesPath?.createResume, element: <CreateResume /> },
	{ path: RoutesPath?.downloadResume, element: <DownloadResume /> },
	{ path: RoutesPath?.error, element: <ErrorPage /> },
];

export const AllRoutes: React.FC = () => {
	return (
		<App>
			<Layout>
				<Suspense fallback={<Loading />}>
					<Routes>
						{routes.map(({ path, element }, i) => (
							<Route key={i} path={path} element={element} />
						))}
					</Routes>
				</Suspense>
			</Layout>
			<span>sjdnajsndajnsda</span>
		</App>
	);
};
