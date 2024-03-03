// import axios from "axios";

// import { getState } from "store";
// import config from "config";

// export const httpClient = axios.create({
// 	baseURL: config.baseUrl,
// });

// httpClient.interceptors.request.use(
// 	(config) => {
// 		config.headers["Authorization"] = `Bearer ${getState().auth.user.token}`;
// 		return config;
// 	},
// 	(error) => {
// 		return Promise.reject(error);
// 	}
// );

import axios from "axios";
import config from "config";

export const httpCLient = axios.create({
	baseURL: config.baseUrl,
});

httpCLient.interceptors.request.use(
	(config) => {
		config.headers["Authorization"] = `Bearer ${"token"}`;
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);
