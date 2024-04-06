// reducer.ts
import {
	SET_RESUME_TEMPLATE,
	SET_RESUME_NAME,
	SET_RESUME_LASTNAME,
	SET_RESUME_EMAIL,
	SET_RESUME_ADRESS,
	SET_RESUME_JOBTITLE,
	SET_RESUME_PHONE,
	SET_RESUME_SOCIALLINKS,
} from "./ActionTypes";

interface MyStore {
	resumeTemplate: any;
	resumeName: any;
	resumeLastName: any;
	resumeEmail: any;
	resumePhone: any;
	resumeAdress: any;
	resumeJobTitle: any;
	resumeSocialLinks: any;
	// ... boshqa xususiyatlar ...
}

const initialState: MyStore = {
	resumeTemplate: null, // Masalan, boshlang'ich template ID
	resumeName: null,
	resumeLastName: null,
	resumeEmail: null,
	resumePhone: null,
	resumeAdress: null,
	resumeJobTitle: null,
	resumeSocialLinks: null,
	// ... boshqa barcha boshlang'ich xususiyatlar ...
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
		case SET_RESUME_LASTNAME:
			return {
				...state,
				resumeLastName: action.payload,
			};
		case SET_RESUME_EMAIL:
			return {
				...state,
				resumeEmail: action.payload,
			};
		case SET_RESUME_ADRESS:
			return {
				...state,
				resumeAdress: action.payload,
			};
		case SET_RESUME_JOBTITLE:
			return {
				...state,
				resumeJobTitle: action.payload,
			};
		case SET_RESUME_PHONE:
			return {
				...state,
				resumePhone: action.payload,
			};
		case SET_RESUME_SOCIALLINKS:
			return {
				...state,
				resumeSocialLinks: action.payload,
			};
		// ... boshqa case'lar ...
		default:
			return state;
	}
};

export default reducer;
