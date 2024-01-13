import { useState } from "react";
import "App.css";
import useStore from "Store";
import { ScrollTop } from "helpers/ScrollToTop";
import AllRoutes from "Routes";

function App() {
	const { darkTheme } = useStore();
	return (
		<div className={darkTheme ? "App dark-theme" : "App"}>
			<AllRoutes />
			<ScrollTop />
			<footer></footer>
			<h1 className="text-6xl text-tahiti bg-midnight font-bold">hello world tt</h1>
		</div>
	);
}

export default App;
