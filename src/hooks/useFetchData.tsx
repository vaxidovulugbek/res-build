import React from "react";

function useFetchData() {
	return <div>useFetchData</div>;
}

export default useFetchData;
// import { useQuery, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
// import { apiHelpers } from "../utils/apiHelpers";

// // Bu turli kodlar turi ma'lum emas, faqat misol uchun.
// interface ApiResponse<T> {
// 	// Bu joyda boshqa turlar ham bo'lishi mumkin
// 	// Masalan, error, meta, va h.k.
// 	data: T;
// }

// interface FetchDataOptions<T> {
// 	url: string;
// 	dataKey?: string;
// 	metaKey?: string;
// 	customQueryFn?: any; // Bu joyda tanlangan funksiya turi ham bo'lishi mumkin
// 	queryOptions?: UseQueryOptions<ApiResponse<T>>;
// 	urlSearchParams?: URLSearchParams;
// }

// // TypeScriptga o'zgartirilgan funksiya
// export function useFetchData<T>({
// 	url,
// 	dataKey = "data",
// 	metaKey = "meta",
// 	customQueryFn,
// 	urlSearchParams,
// }: FetchDataOptions<T>): UseQueryResult<T> & { meta: any } {
// 	let meta: any;

// 	const query = useQuery<ApiResponse<T>>();
// 	// apiHelpers?.getQueryKey("GET", url, urlSearchParams),
// 	// // apiHelpers?.ultimateQueryFn(customQueryFn, urlSearchParams),
// 	// {
// 	// 	retry: false,
// 	// 	select: (responseData: any) => {
// 	// 		meta = apiHelpers?.metaSelect(responseData, metaKey);
// 	// 		return apiHelpers?.dataSelect(responseData, dataKey);
// 	// 	},
// 	// }

// 	return {
// 		...query,
// 		meta,
// 	};
// }
