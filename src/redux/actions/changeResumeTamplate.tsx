// ActionTypes.ts
// export const SET_RESUME_TEMPLATE = "SET_RESUME_TEMPLATE";

// actions.ts
import { SET_RESUME_TEMPLATE } from "../ActionTypes";

const setResumeTemplate = (templateId: number) => ({
	type: SET_RESUME_TEMPLATE,
	payload: templateId,
});

export const ResTamplate = { setResumeTemplate };
