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
	SET_RESUME_ABOUT,
	SET_RESUME_COMPANYNAME,
	SET_RESUME_POSITION,
	SET_RESUME_STARTDATE,
	SET_RESUME_ENDDATE,
	SET_RESUME_ABOUTEXPIRIENCE,
	SET_RESUME_SKILLS,
	SET_RESUME_EDUCATIONNAME,
	SET_RESUME_EDUCATIONPOSITION,
	SET_RESUME_EDUCATION_STARTDATE,
	SET_RESUME_EDUCATION_ENDDATE,
	SET_RESUME_ABOUTEDUCATION,
	SET_RESUME_INTERESTS,
	SET_RESUME_LANGUAGES,
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
	resumeSkills: any;
	resumeAbout: any;

	resumeCompanyName: any;
	resumePosition: any;
	resumeStartDate: any;
	resumeEndDate: any;
	resumeAboutExpirience: any;

	resumeEducationName: any;
	resumeEducationPosition: any;
	resumeEducationStartDate: any;
	resumeEducationEndDate: any;
	resumeAboutEducation: any;

	resumeLanguages: any;
	resumeInterests: any;
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
	resumeAbout: null,

	resumeCompanyName: null,
	resumePosition: null,
	resumeStartDate: null,
	resumeEndDate: null,
	resumeAboutExpirience: "",
	resumeSkills: null,

	resumeEducationName: null,
	resumeEducationPosition: null,
	resumeEducationStartDate: null,
	resumeEducationEndDate: null,
	resumeAboutEducation: "",

	resumeLanguages: null,
	resumeInterests: null,
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
		case SET_RESUME_SKILLS:
			return {
				...state,
				resumeSkills: action.payload,
			};
		case SET_RESUME_ABOUT:
			return {
				...state,
				resumeAbout: action.payload,
			};
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
		case SET_RESUME_INTERESTS:
			return {
				...state,
				resumeInterests: action.payload,
			};
		case SET_RESUME_LANGUAGES:
			return {
				...state,
				resumeLanguages: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
