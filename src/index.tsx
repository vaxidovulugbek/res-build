import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/styles/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import { ChakraProvider } from "@chakra-ui/react";

// import { QueryClient, QueryClientProvider } from "react-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AllRoutes } from "Routes";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	// <React.StrictMode>
	<QueryClientProvider client={queryClient}>
		<Provider store={store}>
			<BrowserRouter>
				<ChakraProvider>
					{/* <App /> */}
					<AllRoutes />
				</ChakraProvider>
			</BrowserRouter>
		</Provider>
	</QueryClientProvider>
	// </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
