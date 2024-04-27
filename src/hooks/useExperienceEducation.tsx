import { useEffect, useState } from "react";
import useStore from "../zustand/store";
import { useSelectorRedux } from "hooks";

const useExperienceEducation = () => {
	const {
		resumePosition,
		resumeCompanyName,
		resumeStartDate,
		resumeEndDate,
		resumeAboutExpirience,
		resumeEducationName,
		resumeEducationPosition,
		resumeEducationStartDate,
		resumeEducationEndDate,
		resumeAboutEducation,
	} = useSelectorRedux();

	const countExpirence = useStore((state) => state.countExpirence);
	const countEducation = useStore((state) => state.countEducation);

	const getExperienceData = () => {
		const experience = [];
		for (let i = 0; i < countExpirence.length; i++) {
			experience.push({
				id: countExpirence[i]?.id,
				position: resumePosition[countExpirence[i]?.id],
				companyName: resumeCompanyName[countExpirence[i]?.id],
				startDate: resumeStartDate[countExpirence[i]?.id],
				endDate: resumeEndDate[countExpirence[i]?.id],
				experienceAbout: resumeAboutExpirience[countExpirence[i]?.id],
			});
		}
		return experience;
	};

	const getEducationData = () => {
		const education = [];
		for (let i = 0; i < countEducation.length; i++) {
			education.push({
				id: countEducation[i]?.id,
				position: resumeEducationName[countEducation[i]?.id],
				instructionName: resumeEducationPosition[countEducation[i]?.id],
				educationStartDate: resumeEducationStartDate[countEducation[i]?.id],
				educationEndDate: resumeEducationEndDate[countEducation[i]?.id],
				educationAbout: resumeAboutEducation[countEducation[i]?.id],
			});
		}
		return education;
	};

	return { getExperienceData, getEducationData };
};

export default useExperienceEducation;
