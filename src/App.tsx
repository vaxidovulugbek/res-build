import { useEffect, useState } from "react";
import "App.css";
import useStore from "Store";
import { ScrollTop } from "helpers/ScrollToTop";
import AllRoutes from "Routes";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
	const { darkTheme } = useStore();
	return (
		<div className={darkTheme ? "App dark-theme" : "App"}>
			{/* <MyComponent /> */}
			<AllRoutes />
			<ScrollTop />
			<footer></footer>
		</div>
	);
}

export default App;
