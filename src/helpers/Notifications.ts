// import { toast } from "react-toastify";
// export const notifications = {
// 	success: (message: string) =>
// 		toast.success(message, {
// 			position: "top-right",
// 			autoClose: 1000,
// 			hideProgressBar: false,
// 			closeOnClick: true,
// 			pauseOnHover: true,
// 			draggable: true,
// 			progress: undefined,
// 		}),
// 	warning: (message: string) =>
// 		toast.warning(message, {
// 			position: "top-right",
// 			autoClose: 1000,
// 			hideProgressBar: false,
// 			closeOnClick: true,
// 			pauseOnHover: true,
// 			draggable: true,
// 			progress: undefined,
// 		}),
// 	error: (message: string) =>
// 		toast.error(message, {
// 			position: "top-right",
// 			autoClose: 1000,
// 			hideProgressBar: false,
// 			closeOnClick: true,
// 			pauseOnHover: true,
// 			draggable: true,
// 			progress: undefined,
// 		}),
// };

import { toast } from "react-toastify";

export const notifications = {
	success: (message: any) => toast.success(message),
	warning: (message: any) => toast.warning(message),
	error: (message: any) => toast.error(message),
};
