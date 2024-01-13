import { useState } from "react";
import "App.css";
import AllRoutes from "pages/Home/Home";
import useStore from "Store";

function App() {
	const { darkTheme } = useStore();
	return (
		<div className={darkTheme ? "App dark-theme" : "App"}>
			<AllRoutes />
			<h1 className="text-6xl text-tahiti bg-midnight font-bold">hello world tt</h1>
		</div>
	);
}

export default App;
