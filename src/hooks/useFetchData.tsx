// import { useQuery, UseQueryOptions } from "@tanstack/react-query";
// import axios from "axios";
// import React from "react";
// import { isQueryKey } from "react-query/types/core/utils";
// import { apiHelpers } from "../utils/apiHelpers";

// const fetchData = async () => {
// 	const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
// 	return response.data;
// };

// interface FetchDataConfig {
// 	url?: any;
// 	base?: any;
// 	customQueryFn?: any;
// 	queryOptions?: any;
// 	dataKey?: any;
// 	metaKey?: any;
// }

// const useFetchData = ({
// 	url = "defaultUrl",
// 	base = "defaultBase",
// 	customQueryFn,
// 	queryOptions = {},
// 	dataKey = "data",
// 	metaKey = "meta",
// }: FetchDataConfig = {}) => {
// 	let meta: any;
// 	let params: any; // params o'zgaruvchisini bu funksiya ichida yaratib olish

// 	const queryKey = apiHelpers?.getQueryKey("GET", url, null);
// 	const queryFn = apiHelpers?.ultimateQueryFn(customQueryFn, params);

// 	// const query = useQuery({
// 	// 	queryKey: apiHelpers?.getQueryKey("GET", url, null),
// 	// 	queryFn: () => apiHelpers?.ultimateQueryFn(customQueryFn, params),
// 	// 	select: (responseData: any) => {
// 	// 		meta = apiHelpers.metaSelect(responseData, metaKey);
// 	// 		return apiHelpers.dataSelect(responseData, dataKey);
// 	// 	},

// 	// 	refetchOnWindowFocus: false,
// 	// 	...queryOptions,
// 	// 	retry: 0,
// 	// 	cacheTime: 0,
// 	// });

// 	// const query = useQuery(apiHelpers?.getQueryKey("GET", url), apiHelpers.ultimateQueryFn(fetchData));
// 	// const { data, error, isLoading } = useQuery(queryKey, queryFn);

// 	// console.log(query);
// 	return {
// 		// ...query,
// 		meta,
// 	};
// };

// export default useFetchData;

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { apiHelpers } from "../utils/apiHelpers";
import axios from "axios";

type propTypes = {
	url: string;
	dataKey?: string;
	metaKey?: string;
	customQueryFn?: Function;
	queryOptions?: object;
	urlSearchParams?: object;
};

type FetchListFunction = (prop: propTypes) => object;

export const useFetchData: FetchListFunction = ({
	url,
	dataKey = "data",
	metaKey = "meta",
	customQueryFn,
	queryOptions = {},
	urlSearchParams = {},
}) => {
	const [page, setPage] = useState(1);
	const params = { page, ...urlSearchParams };

	let meta: any;
	const query = useQuery({
		queryKey: ["GET", url, urlSearchParams],
		queryFn: () => {
			return axios.get("https://jsonplaceholder.typicode.com/todos");
		},
		// queryFn: apiHelpers.ultimateQueryFn(customQueryFn, params),
	});

	return {
		...query,
		meta,
	};
};
