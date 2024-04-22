import { saveRedux } from "types/interface";
import { useDispatch } from "react-redux";
import { ResInfo } from "../../redux/actions";
import { useEffect } from "react";
import { isArray } from "lodash";

const saveRedux = ({ id }: saveRedux) => {
	console.log("ok");
};

// reduxService.js

// const saveResumeInfo = (
// 	formValues: any,
// 	hasError: boolean,
// 	setHasError: any,
// 	countExpirence: any,
// 	countEducation: any
// ) => {
// 	const dispatch = useDispatch();

// 	useEffect(() => {
// 		dispatch(ResInfo.setResumeName(formValues.name));
// 		dispatch(ResInfo.setResumeLastName(formValues.Last_Name));
// 		dispatch(ResInfo.setResumeEmail(formValues.Email_Address));
// 		dispatch(ResInfo.setResumeJobTitle(formValues.Job_Title));
// 		dispatch(ResInfo.setResumePhone(formValues.Phone));
// 		dispatch(ResInfo.setResumeAdress(formValues.Address));

// 		setHasError(hasError);
// 		const experiencePositions: any[] = [];
// 		const experienceCompanyName: any[] = [];
// 		const experienceStart: any[] = [];
// 		const experienceEnd: any[] = [];
// 		const educationDegreeName: any[] = [];
// 		const educationName: any[] = [];
// 		const educationStart: any[] = [];
// 		const educationEnd: any[] = [];

// 		let maxId = -1;
// 		if (isArray(countExpirence)) {
// 			maxId = countExpirence.reduce((max, item) => (item.id > max ? item.id : max), -1);
// 		}
// 		let maxIdEducation = -1;
// 		if (isArray(countEducation)) {
// 			maxIdEducation = countEducation.reduce(
// 				(max, item) => (item.id > max ? item.id : max),
// 				-1
// 			);
// 		}

// 		for (let i = 0; i < maxId + 1; i++) {
// 			const positionIndex = countExpirence.findIndex((item: any) => item.id === i);
// 			if (positionIndex !== -1) {
// 				const position =
// 					formValues[`experiencePosition_${countExpirence[positionIndex]?.id}`];
// 				experiencePositions.push(position);
// 				experienceCompanyName.push(
// 					formValues[`experienceCompany_${countExpirence[positionIndex]?.id}`]
// 				);
// 				experienceStart.push(
// 					formValues[`experienceStartDate_${countExpirence[positionIndex]?.id}`]
// 				);
// 				experienceEnd.push(
// 					formValues[`experienceEndDate_${countExpirence[positionIndex]?.id}`]
// 				);
// 			} else {
// 				experiencePositions.push(undefined);
// 				experienceCompanyName.push(undefined);
// 				experienceStart.push(undefined);
// 				experienceEnd.push(undefined);
// 			}
// 		}
// 		for (let i = 0; i < maxIdEducation + 1; i++) {
// 			const Index = countEducation?.findIndex((item: any) => item.id === i);
// 			if (Index !== -1) {
// 				educationDegreeName.push(formValues[`degreeName_${countEducation[Index]?.id}`]);
// 				educationName.push(formValues[`instructionName_${countEducation[Index]?.id}`]);
// 				educationStart.push(formValues[`educationStartDate_${countEducation[Index]?.id}`]);
// 				educationEnd.push(formValues[`educationEndDate_${countEducation[Index]?.id}`]);
// 			} else {
// 				educationDegreeName.push(undefined);
// 				educationName.push(undefined);
// 				educationStart.push(undefined);
// 				educationEnd.push(undefined);
// 			}
// 		}
// 		dispatch(ResInfo.setResumePosition([...experiencePositions]));
// 		dispatch(ResInfo.setResumeCompanyName([...experienceCompanyName]));
// 		dispatch(ResInfo.setResumeStartDate([...experienceStart]));
// 		dispatch(ResInfo.setResumeEndDate([...experienceEnd]));
// 		dispatch(ResInfo.setResumeEducationName([...educationDegreeName]));
// 		dispatch(ResInfo.setResumeEducationPosition([...educationName]));
// 		dispatch(ResInfo.setResumeEducationStartDate([...educationStart]));
// 		dispatch(ResInfo.setResumeEducationEndDate([...educationEnd]));
// 		console.log(formValues, educationDegreeName, countEducation);
// 	}, [formValues, dispatch, setHasError, hasError, countExpirence, countEducation]);
// };

export const functions = {
	saveRedux,
	// saveResumeInfo,
};
