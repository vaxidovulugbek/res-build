import {
	SET_RESUME_COMPANYNAME,
	SET_RESUME_POSITION,
	SET_RESUME_STARTDATE,
	SET_RESUME_ENDDATE,
	SET_RESUME_ABOUTEXPIRIENCE,
} from "../ActionTypes";

interface MyStore {
	resumeCompanyName: any;
	resumePosition: any;
	resumeStartDate: any;
	resumeEndDate: any;
	resumeAboutExpirience: any;
}

const initialState: MyStore = {
	resumeCompanyName: null,
	resumePosition: null,
	resumeStartDate: null,
	resumeEndDate: null,
	resumeAboutExpirience: "",
};

export const experienceReducer = (state = initialState, action: any) => {
	switch (action.type) {
		// experience part
		case SET_RESUME_COMPANYNAME:
			return {
				...state,
				resumeCompanyName: action.payload,
			};
		case SET_RESUME_POSITION:
			return {
				...state,
				resumePosition: action.payload,
			};
		case SET_RESUME_STARTDATE:
			return {
				...state,
				resumeStartDate: action.payload,
			};
		case SET_RESUME_ENDDATE:
			return {
				...state,
				resumeEndDate: action.payload,
			};
		case SET_RESUME_ABOUTEXPIRIENCE:
			return {
				...state,
				resumeAboutExpirience: action.payload,
			};
		default:
			return state;
	}
};
