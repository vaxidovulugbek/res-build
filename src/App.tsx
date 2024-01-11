import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
	const [darkTheme, setDarkTheme] = useState(false);
	return (
		<div className={darkTheme ? "App dark-theme" : "App"}>
			<Header setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
			<Hero />
			<h1 className="text-6xl text-tahiti bg-midnight font-bold">hello world tt</h1>
		</div>
	);
}

export default App;
