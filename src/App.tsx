import { useEffect, useState } from "react";
import "App.css";
import useStore from "Store";
import { ScrollTop } from "helpers/ScrollToTop";
import AllRoutes from "Routes";
import MyComponent from "components/MyComponent";
import { DatePicker } from "antd";

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
