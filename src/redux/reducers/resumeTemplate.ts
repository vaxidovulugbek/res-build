import { SET_RESUME_TEMPLATE } from "../ActionTypes";

interface MyStore {
	resumeTemplate: number | null;
}

const initialState: MyStore = {
	resumeTemplate: 1,
};

export const templateResumeReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case SET_RESUME_TEMPLATE:
			return {
				...state,
				resumeTemplate: action.payload,
			};
		default:
			return state;
	}
};
