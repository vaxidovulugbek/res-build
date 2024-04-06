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

	return {
		resumeName,
		resumeLastName,
		resumeEmail,
		resumePhone,
		resumeAdress,
		resumeJobTitle,
		resumeSocialLinks,
	};
};
