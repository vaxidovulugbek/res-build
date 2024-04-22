// import {
// 	SET_RESUME_NAME,
// 	SET_RESUME_LASTNAME,
// 	SET_RESUME_EMAIL,
// 	SET_RESUME_PHONE,
// 	SET_RESUME_JOBTITLE,
// 	SET_RESUME_ADRESS,
// 	SET_RESUME_SOCIALLINKS,
// } from "../ActionTypes";

// const setResumeName = (name: string | null) => ({
// 	type: SET_RESUME_NAME,
// 	payload: name,
// });

// const setResumeLastName = (lastname: string | null) => ({
// 	type: SET_RESUME_LASTNAME,
// 	payload: lastname,
// });

// const setResumeEmail = (email: string | null) => ({
// 	type: SET_RESUME_EMAIL,
// 	payload: email,
// });

// const setResumeJobTitle = (jobtitle: string | null) => ({
// 	type: SET_RESUME_JOBTITLE,
// 	payload: jobtitle,
// });

// const setResumePhone = (phone: string | null) => ({
// 	type: SET_RESUME_PHONE,
// 	payload: phone,
// });

// const setResumeAdress = (adress: string | null) => ({
// 	type: SET_RESUME_ADRESS,
// 	payload: adress,
// });

// const setResumeSocialLinks = (socialLinks: any | null) => ({
// 	type: SET_RESUME_SOCIALLINKS,
// 	payload: socialLinks,
// });

// export const ResInfo = {
// 	setResumeName,
// 	setResumeLastName,
// 	setResumeEmail,
// 	setResumeJobTitle,
// 	setResumePhone,
// 	setResumeAdress,
// 	setResumeSocialLinks,
// };

import * as ActionTypes from "../ActionTypes";

const createResumeAction = (type: string, payload: any) => ({ type, payload });

export const ResInfo = {
	setResumeName: (name: string | null) => createResumeAction(ActionTypes.SET_RESUME_NAME, name),
	setResumeLastName: (lastname: string | null) =>
		createResumeAction(ActionTypes.SET_RESUME_LASTNAME, lastname),
	setResumeEmail: (email: string | null) =>
		createResumeAction(ActionTypes.SET_RESUME_EMAIL, email),
	setResumeJobTitle: (jobtitle: string | null) =>
		createResumeAction(ActionTypes.SET_RESUME_JOBTITLE, jobtitle),
	setResumePhone: (phone: string | null) =>
		createResumeAction(ActionTypes.SET_RESUME_PHONE, phone),
	setResumeAdress: (address: string | null) =>
		createResumeAction(ActionTypes.SET_RESUME_ADRESS, address),
	setResumeSocialLinks: (socialLinks: any | null) =>
		createResumeAction(ActionTypes.SET_RESUME_SOCIALLINKS, socialLinks),
	setResumeSkills: (skills: any | null) =>
		createResumeAction(ActionTypes.SET_RESUME_SKILLS, skills),
	// Expirience change part
	setResumeCompanyName: (companyName: any | null) =>
		createResumeAction(ActionTypes.SET_RESUME_COMPANYNAME, companyName),
	setResumePosition: (position: any | null) =>
		createResumeAction(ActionTypes.SET_RESUME_POSITION, position),
	setResumeStartDate: (startDate: any | null) =>
		createResumeAction(ActionTypes.SET_RESUME_STARTDATE, startDate),
	setResumeEndDate: (endDate: any | null) =>
		createResumeAction(ActionTypes.SET_RESUME_ENDDATE, endDate),
	setResumeAboutExpirience: (aboutExpirience: any | null) =>
		createResumeAction(ActionTypes.SET_RESUME_ABOUTEXPIRIENCE, aboutExpirience),
	// Education change part
	setResumeEducationName: (educationName: any | null) =>
		createResumeAction(ActionTypes.SET_RESUME_EDUCATIONNAME, educationName),
	setResumeEducationPosition: (educationPosition: any | null) =>
		createResumeAction(ActionTypes.SET_RESUME_EDUCATIONPOSITION, educationPosition),
	setResumeEducationStartDate: (educationStartDate: any | null) =>
		createResumeAction(ActionTypes.SET_RESUME_EDUCATION_STARTDATE, educationStartDate),
	setResumeEducationEndDate: (educationEndDate: any | null) =>
		createResumeAction(ActionTypes.SET_RESUME_EDUCATION_ENDDATE, educationEndDate),
	setResumeAboutEducation: (aboutEducation: any | null) =>
		createResumeAction(ActionTypes.SET_RESUME_ABOUTEDUCATION, aboutEducation),
	setResumeAbout: (about: any | null) => createResumeAction(ActionTypes.SET_RESUME_ABOUT, about),
};
