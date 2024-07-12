import {
	SET_RESUME_EDUCATIONNAME,
	SET_RESUME_EDUCATIONPOSITION,
	SET_RESUME_EDUCATION_STARTDATE,
	SET_RESUME_EDUCATION_ENDDATE,
	SET_RESUME_ABOUTEDUCATION,
} from "../ActionTypes";

interface MyStore {
	resumeEducationName: any;
	resumeEducationPosition: any;
	resumeEducationStartDate: any;
	resumeEducationEndDate: any;
	resumeAboutEducation: any;
}

const initialState: MyStore = {
	resumeEducationName: null,
	resumeEducationPosition: null,
	resumeEducationStartDate: null,
	resumeEducationEndDate: null,
	resumeAboutEducation: "",
};

export const educationReducer = (state = initialState, action: any) => {
	switch (action.type) {
		// education part
		case SET_RESUME_EDUCATIONNAME:
			return {
				...state,
				resumeEducationName: action.payload,
			};
		case SET_RESUME_EDUCATIONPOSITION:
			return {
				...state,
				resumeEducationPosition: action.payload,
			};
		case SET_RESUME_EDUCATION_STARTDATE:
			return {
				...state,
				resumeEducationStartDate: action.payload,
			};
		case SET_RESUME_EDUCATION_ENDDATE:
			return {
				...state,
				resumeEducationEndDate: action.payload,
			};
		case SET_RESUME_ABOUTEDUCATION:
			return {
				...state,
				resumeAboutEducation: action.payload,
			};
		default:
			return state;
	}
};
