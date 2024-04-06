import {
	SET_RESUME_NAME,
	SET_RESUME_LASTNAME,
	SET_RESUME_EMAIL,
	SET_RESUME_PHONE,
	SET_RESUME_JOBTITLE,
	SET_RESUME_ADRESS,
	SET_RESUME_SOCIALLINKS,
} from "../ActionTypes";

const setResumeName = (name: string | null) => ({
	type: SET_RESUME_NAME,
	payload: name,
});

const setResumeLastName = (lastname: string | null) => ({
	type: SET_RESUME_LASTNAME,
	payload: lastname,
});

const setResumeEmail = (email: string | null) => ({
	type: SET_RESUME_EMAIL,
	payload: email,
});

const setResumeJobTitle = (jobtitle: string | null) => ({
	type: SET_RESUME_JOBTITLE,
	payload: jobtitle,
});

const setResumePhone = (phone: string | null) => ({
	type: SET_RESUME_PHONE,
	payload: phone,
});

const setResumeAdress = (adress: string | null) => ({
	type: SET_RESUME_ADRESS,
	payload: adress,
});

const setResumeSocialLinks = (socialLinks: any | null) => ({
	type: SET_RESUME_SOCIALLINKS,
	payload: socialLinks,
});

export const ResInfo = {
	setResumeName,
	setResumeLastName,
	setResumeEmail,
	setResumeJobTitle,
	setResumePhone,
	setResumeAdress,
	setResumeSocialLinks,
};
