import { SET_RESUME_NAME, SET_RESUME_LASTNAME, SET_RESUME_EMAIL } from "../ActionTypes";

export const setResumeName = (name: string | null) => ({
	type: SET_RESUME_NAME,
	payload: name,
});

export const setResumeLastName = (name: string | null) => ({
	type: SET_RESUME_LASTNAME,
	payload: name,
});

export const setResumeEmail = (name: string | null) => ({
	type: SET_RESUME_EMAIL,
	payload: name,
});

export const ResInfo = { setResumeName, setResumeLastName, setResumeEmail };
