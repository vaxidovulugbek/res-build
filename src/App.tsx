import { useEffect, useRef, useState } from "react";
import "App.css";
import useStore from "./zustand/store";
import { ScrollTop } from "helpers/ScrollToTop";
// import AllRoutes from "Routes";
import AOS from "aos";
import "aos/dist/aos.css";
import { notifications } from "helpers/Notifications";
import { apiHelpers } from "utils/apiHelpers";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import cn from "classnames";
import { useFetchData } from "hooks/useFetchData";
import Layout from "Layout/Layout";
// import useFetchData from "hooks/useFetchData";

AOS.init();

interface AppProps {
	children?: React.ReactNode; // Make children optional
}

function App({ children }: AppProps) {
	const { darkTheme } = useStore();
	const a = useRef(null);
	const query = useFetchData({
		url: "your_api_endpoint",
		dataKey: "your_data_key",
		metaKey: "your_meta_key",
		// Boshqa parametrlar
	});
	useEffect(() => {
		notifications.success("Успех");
		// console.log(query);
		// console.log("ok", a);

		// const { data } = useFetchData();
		// console.log(apiHelpers.getQueryKey("GET", "url", ["params"]));
	}, [query]);

	// const { isLoading, isError, data } = useQuery([], () =>
	// 	axios.get("https://jsonplaceholder.typicode.com/todos")
	// );

	return (
		// <div
		// 	className={cn("App flex flex-col justify-between", {
		// 		"dark-theme": darkTheme,
		// 	})}
		// >
		// 	{/* <AllRoutes /> */}
		// 	<ScrollTop />
		// </div>
		// <Layout />
		<>
			<ScrollTop />
			{children}
		</>
	);
}

export default App;
