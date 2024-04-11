// useResume.ts
import { useSelector } from "react-redux";
export const useSelectorRedux = () => {
	const resumeName = useSelector((state: any) => state.resumeName);
	const resumeLastName = useSelector((state: any) => state.resumeLastName);
	const resumeEmail = useSelector((state: any) => state.resumeEmail);
	const resumePhone = useSelector((state: any) => state.resumePhone);
	const resumeAdress = useSelector((state: any) => state.resumeAdress);
	const resumeJobTitle = useSelector((state: any) => state.resumeJobTitle);
	const resumeSocialLinks = useSelector((state: any) => state.resumeSocialLinks);
	const resumeSkills = useSelector((state: any) => state.resumeSkills);
	const resumeCompanyName = useSelector((state: any) => state.resumeCompanyName);
	const resumePosition = useSelector((state: any) => state.resumePosition);
	const resumeStartDate = useSelector((state: any) => state.resumeStartDate);
	const resumeEndDate = useSelector((state: any) => state.resumeEndDate);
	const resumeAboutExpirience = useSelector((state: any) => state.resumeAboutExpirience);
	const resumeEducationName = useSelector((state: any) => state.resumeEducationName);
	const resumeEducationPosition = useSelector((state: any) => state.resumeEducationPosition);
	const resumeEducationStartDate = useSelector((state: any) => state.resumeEducationStartDate);
	const resumeEducationEndDate = useSelector((state: any) => state.resumeEducationEndDate);
	const resumeAboutEducation = useSelector((state: any) => state.resumeAboutEducation);

	return {
		resumeName,
		resumeLastName,
		resumeEmail,
		resumePhone,
		resumeAdress,
		resumeJobTitle,
		resumeSocialLinks,
		resumeCompanyName,
		resumePosition,
		resumeStartDate,
		resumeEndDate,
		resumeAboutExpirience,
		resumeSkills,
		resumeEducationName,
		resumeEducationPosition,
		resumeEducationStartDate,
		resumeEducationEndDate,
		resumeAboutEducation,
	};
};
