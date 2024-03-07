import { isArray } from "lodash";

type Filter = Record<string, string | number | boolean | (string | number)[]>;

interface Config {
	sort?: string;
	limit?: number;
	page?: number;
	include?: string[];
	extra?: Record<string, string | number>;
	filter?: Filter;
}

export const queryBuilder = (url: string, config: Config = {}): string => {
	if (Object.keys(config).length <= 0) return url;

	const { sort = "-id", limit, page, include = [], extra = {}, filter = {} } = config;
	const queryObj = new URLSearchParams();

	if (Object.keys(filter).length)
		Object.entries(filter).forEach((item) => {
			const [key, value] = item;
			if (isArray(value)) {
				value.forEach((inner, index) =>
					queryObj.append(`filter[${key}][${index}]`, inner.toString())
				);
			} else if (value || value === 0) {
				queryObj.append(`filter[${key}]`, value.toString());
			}
		});

	if (Object.keys(extra).length)
		Object.entries(extra).forEach((item) => {
			const [key, value] = item;
			if (key && value) {
				queryObj.append(key, value.toString());
			}
		});

	if (include.length) queryObj.set("include", include.join(","));

	if (sort) queryObj.set("sort", sort);

	if (limit) queryObj.set("per-page", limit.toString());

	if (page && page !== 1) queryObj.set("page", page.toString());

	// return `${url}?${decodeURIComponent(queryObj.toString())}`;
	return `${url}`;
};
