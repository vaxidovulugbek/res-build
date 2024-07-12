import {
	SET_RESUME_NAME,
	SET_RESUME_LASTNAME,
	SET_RESUME_EMAIL,
	SET_RESUME_ADRESS,
	SET_RESUME_JOBTITLE,
	SET_RESUME_PHONE,
	SET_RESUME_SOCIALLINKS,
	SET_RESUME_ABOUT,
	SET_RESUME_SKILLS,
	SET_RESUME_LANGUAGES,
	SET_RESUME_INTERESTS,
	SET_RESUME_VOLUNTEERING_ACTIVITYNAME,
	SET_RESUME_VOLUNTEERING_ADDRESS,
	SET_RESUME_VOLUNTEERING_STARTDATE,
	SET_RESUME_VOLUNTEERING_ENDDATE,
	SET_RESUME_VOLUNTEERING_ABOUT,
} from "../ActionTypes";

interface MyStore {
	resumeName: any;
	resumeLastName: any;
	resumeEmail: any;
	resumePhone: any;
	resumeAdress: any;
	resumeJobTitle: any;
	resumeSocialLinks: any;
	resumeSkills: any;
	resumeAbout: any;

	resumeLanguages: any;
	resumeInterests: any;
	resumeVolunteeringActivityName: any;
	resumeVolunteeringAddress: any;
	resumeVolunteeringStartDate: any;
	resumeVolunteeringEndDate: any;
	resumeVolunteeringAbout: any;
}

const initialState: MyStore = {
	resumeName: null,
	resumeLastName: null,
	resumeEmail: null,
	resumePhone: null,
	resumeAdress: null,
	resumeJobTitle: null,
	resumeSocialLinks: null,
	resumeAbout: null,
	resumeSkills: null,

	resumeLanguages: null,
	resumeInterests: null,
	resumeVolunteeringActivityName: null,
	resumeVolunteeringAddress: null,
	resumeVolunteeringStartDate: null,
	resumeVolunteeringEndDate: null,
	resumeVolunteeringAbout: null,
	// ... boshqa barcha boshlang'ich xususiyatlar ...
};

export const aboutReducer = (state = initialState, action: any) => {
	switch (action.type) {
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
		// next
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
		case SET_RESUME_VOLUNTEERING_ACTIVITYNAME:
			return {
				...state,
				resumeVolunteeringActivityName: action.payload,
			};
		case SET_RESUME_VOLUNTEERING_ADDRESS:
			return {
				...state,
				resumeVolunteeringAddress: action.payload,
			};
		case SET_RESUME_VOLUNTEERING_STARTDATE:
			return {
				...state,
				resumeVolunteeringStartDate: action.payload,
			};
		case SET_RESUME_VOLUNTEERING_ENDDATE:
			return {
				...state,
				resumeVolunteeringEndDate: action.payload,
			};
		case SET_RESUME_VOLUNTEERING_ABOUT:
			return {
				...state,
				resumeVolunteeringAbout: action.payload,
			};
		default:
			return state;
	}
};
