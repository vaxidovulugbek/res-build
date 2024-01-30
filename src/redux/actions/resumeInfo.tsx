import { SET_RESUME_NAME } from "../ActionTypes";

export const setResumeName = (name: string | null) => ({
	type: SET_RESUME_NAME,
	payload: name,
});

export const ResInfo = { setResumeName };
