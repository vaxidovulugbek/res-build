// reducer.ts
import { SET_RESUME_TEMPLATE, SET_RESUME_NAME } from "./ActionTypes";

interface MyStore {
	resumeTemplate: any;
	resumeName: any;
	// ... boshqa xususiyatlar ...
}

const initialState: MyStore = {
	resumeTemplate: null, // Masalan, boshlang'ich template ID
	// ... boshqa barcha boshlang'ich xususiyatlar ...
	resumeName: null,
};

const reducer = (state = initialState, action: any) => {
	switch (action.type) {
		case SET_RESUME_TEMPLATE:
			return {
				...state,
				resumeTemplate: action.payload,
			};
		case SET_RESUME_NAME:
			return {
				...state,
				resumeName: action.payload,
			};
		// ... boshqa case'lar ...
		default:
			return state;
	}
};

export default reducer;
