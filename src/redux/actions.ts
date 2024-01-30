// ActionTypes.ts
// export const SET_RESUME_TEMPLATE = "SET_RESUME_TEMPLATE";

// actions.ts
import { SET_RESUME_TEMPLATE } from "./ActionTypes";
import { SET_RESUME_NAME } from "./ActionTypes";

export const setResumeTemplate = (templateId: number) => ({
	type: SET_RESUME_TEMPLATE,
	payload: templateId,
});

export const setResumeName = (name: string | null) => ({
	type: SET_RESUME_NAME,
	payload: name,
});
