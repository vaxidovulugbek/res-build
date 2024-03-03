import { get, isFunction } from "lodash";
import { httpCLient } from "servises/api";
import { queryBuilder } from "servises/queryBuilder";
// import { httpCLient, HttpResponse } from "../api";
// import { queryBuilder } from "../querBuilder";

type CustomQueryFnType = (context: any) => Promise<any>;
type DataSelectType = (data: any, dataKey: string | ((data: any) => any)) => any;
type MetaSelectType = (data: any, metaKey: string | ((data: any) => any)) => any;
type GetQueryKeyType = (method: string, url: string, urlSearchParams?: any) => any[];
type QueryFnType = (context: any, urlSearchParams: any) => Promise<any>;

const ultimateQueryFn = (customQueryFn?: any, urlSearchParams?: any) =>
	customQueryFn ? customQueryFn : (context: any) => queryFn(context, urlSearchParams);

const dataSelect: DataSelectType = (data = {}, dataKey) =>
	isFunction(dataKey) ? dataKey(data) : get(data, dataKey);

const metaSelect: MetaSelectType = (data = {}, metaKey) =>
	isFunction(metaKey) ? metaKey(data) : get(data, metaKey);

const getQueryKey = (method?: any, url?: any, urlSearchParams?: any) => {
	return urlSearchParams ? [method, url, urlSearchParams] : [method, url];
};

// const queryFn: QueryFnType = async (context, urlSearchParams = {}) => {
// 	const { queryKey, signal, pageParam } = context;
// 	if (pageParam) urlSearchParams.page = pageParam;
// 	const url = queryBuilder(queryKey[1], urlSearchParams);
// 	const { data } = await httpCLient.request<HttpResponse>({
// 		method: queryKey[0],
// 		url,
// 		signal,
// 	});
// 	return data;
// };
const queryFn = async (context: any, urlSearchParams = {}) => {
	const { queryKey, signal, pageParam } = context;
	// if (pageParam) urlSearchParams.page = pageParam;
	const url = queryBuilder(queryKey[1], urlSearchParams);
	const { data } = await httpCLient.request({
		method: queryKey[0],
		url,
		signal,
	});
	return data;
};

export const apiHelpers = {
	ultimateQueryFn,
	dataSelect,
	metaSelect,
	getQueryKey,
};
