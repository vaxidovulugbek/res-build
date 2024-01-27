// reducer.ts
import { SET_RESUME_TEMPLATE } from "./ActionTypes";

interface MyStore {
	resumeTemplate: any;
	// ... boshqa xususiyatlar ...
}

const initialState: MyStore = {
	resumeTemplate: null, // Masalan, boshlang'ich template ID
	// ... boshqa barcha boshlang'ich xususiyatlar ...
};

const reducer = (state = initialState, action: any) => {
	switch (action.type) {
		case SET_RESUME_TEMPLATE:
			return {
				...state,
				resumeTemplate: action.payload,
			};
		// ... boshqa case'lar ...
		default:
			return state;
	}
};

export default reducer;
