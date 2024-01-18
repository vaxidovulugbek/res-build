import { useEffect, useState } from "react";
import "App.css";
import useStore from "Store";
import { ScrollTop } from "helpers/ScrollToTop";
import AllRoutes from "Routes";
import MyComponent from "components/MyComponent";
import PersonalDetails from "components/PersonalDetails/PersonalDetails";

function App() {
	const { darkTheme } = useStore();
	return (
		<div className={darkTheme ? "App dark-theme" : "App"}>
			<MyComponent />
			<PersonalDetails />
			<AllRoutes />
			<ScrollTop />
			<footer></footer>
			<h1 className="text-6xl text-tahiti bg-midnight font-bold">hello world tt</h1>
		</div>
	);
}

export default App;
