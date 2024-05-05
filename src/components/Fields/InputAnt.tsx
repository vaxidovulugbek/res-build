import type { DatePickerProps } from "antd";
import { DatePicker, Input } from "antd";
import cn from "classnames";
import type { Dayjs } from "dayjs";
import { get, isArray } from "lodash";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ResInfo } from "../../redux/actions";
import useStore from "../../zustand/store";
import "./styles.scss";

export default function InputField({
	label,
	form,
	field,
	placeholder,
	type,
	onChange,
	...props
}: {
	label: string;
	type: string;
	form: any;
	field: any;
	placeholder: string;
	onChange: any;
}) {
	const hasError = form.touched[field.name] && form.errors[field.name];
	const dispatch = useDispatch();
	const { setHasError, countExpirence, countEducation, idExpirence } = useStore();

	const onChanges: DatePickerProps<Dayjs[]>["onChange"] = (date: any, dateString: any) => {
		// console.log(form.values, dateString);
		form.setFieldValue(field.name, dateString);
	};

	useEffect(() => {
		dispatch(ResInfo.setResumeName(form.values.name));
		dispatch(ResInfo.setResumeLastName(form.values.Last_Name));
		dispatch(ResInfo.setResumeEmail(form.values.Email_Address));
		dispatch(ResInfo.setResumeJobTitle(form.values.Job_Title));
		dispatch(ResInfo.setResumePhone(form.values.Phone));
		dispatch(ResInfo.setResumeAdress(form.values.Address));

		dispatch(ResInfo.setResumeVolunteeringActivityName(form.values.volunteering_ActivityName));
		dispatch(ResInfo.setResumeVolunteeringAddress(form.values.volunteering_Address));
		dispatch(ResInfo.setResumeVolunteeringStartDate(form.values.volunteering_startDate));
		dispatch(ResInfo.setResumeVolunteeringEndDate(form.values.volunteering_endDate));

		// Xato haqida o'girishni saqlash
		setHasError(hasError);
		const experiencePositions = [];
		const experienceCompanyName = [];
		const experienceStart = [];
		const experienceEnd = [];
		const educationDegreeName = [];
		const educationName = [];
		const educationStart = [];
		const educationEnd = [];

		let maxId = -1;
		if (isArray(countExpirence)) {
			maxId = countExpirence.reduce((max, item) => (item.id > max ? item.id : max), -1);
		}
		let maxIdEducation = -1;
		if (isArray(countEducation)) {
			maxIdEducation = countEducation.reduce(
				(max, item) => (item.id > max ? item.id : max),
				-1
			);
		}

		for (let i = 0; i < maxId + 1; i++) {
			const positionIndex = countExpirence.findIndex((item: any) => item.id === i);
			if (positionIndex !== -1) {
				const position =
					form.values[`experiencePosition_${countExpirence[positionIndex]?.id}`];
				experiencePositions.push(position);
				experienceCompanyName.push(
					form.values[`experienceCompany_${countExpirence[positionIndex]?.id}`]
				);
				experienceStart.push(
					form.values[`experienceStartDate_${countExpirence[positionIndex]?.id}`]
				);
				experienceEnd.push(
					form.values[`experienceEndDate_${countExpirence[positionIndex]?.id}`]
				);
			} else {
				experiencePositions.push(undefined);
				experienceCompanyName.push(undefined);
				experienceStart.push(undefined);
				experienceEnd.push(undefined);
			}
		}
		for (let i = 0; i < maxIdEducation + 1; i++) {
			const Index = countEducation?.findIndex((item: any) => item.id === i);
			if (Index !== -1) {
				educationDegreeName.push(form.values[`degreeName_${countEducation[Index]?.id}`]);
				educationName.push(form.values[`instructionName_${countEducation[Index]?.id}`]);
				educationStart.push(form.values[`educationStartDate_${countEducation[Index]?.id}`]);
				educationEnd.push(form.values[`educationEndDate_${countEducation[Index]?.id}`]);
			} else {
				educationDegreeName.push(undefined);
				educationName.push(undefined);
				educationStart.push(undefined);
				educationEnd.push(undefined);
			}
		}
		dispatch(ResInfo.setResumePosition([...experiencePositions]));
		dispatch(ResInfo.setResumeCompanyName([...experienceCompanyName]));
		dispatch(ResInfo.setResumeStartDate([...experienceStart]));
		dispatch(ResInfo.setResumeEndDate([...experienceEnd]));
		// education part
		dispatch(ResInfo.setResumeEducationName([...educationDegreeName]));
		dispatch(ResInfo.setResumeEducationPosition([...educationName]));
		dispatch(ResInfo.setResumeEducationStartDate([...educationStart]));
		dispatch(ResInfo.setResumeEducationEndDate([...educationEnd]));
		// console.log(form.values, educationDegreeName, countEducation);
	}, [form.values, dispatch, setHasError, hasError]);

	// [
	// 	form.values,
	// 	form.errors,
	// 	field.name,
	// 	dispatch,
	// 	setHasError,
	// 	hasError,
	// 	countExpirence,
	// 	countEducation,
	// ]

	return (
		<div className={cn("flex flex-col", { error: hasError, "w-full": !hasError })}>
			{label && <label className="text-xs capitalize">{label}</label>}
			{type === "date" ? (
				<DatePicker
					style={hasError && { border: "1px solid #ff4d4f" }}
					// value={field.value ? moment(field.value) : null}
					defaultValue={get(form.values, field.name)}
					placeholder={placeholder}
					onChange={onChanges}
					{...props}
				/>
			) : (
				<Input
					style={hasError && { border: "1px solid #ff4d4f" }}
					type={type}
					// defaultValue={get(form.values, field.name)}
					placeholder={placeholder}
					id={field.name}
					onBlur={field.onBlur}
					onChange={field.onChange}
					value={get(form.values.name, field.name)}
					{...props}
				/>
			)}
			{hasError && <small style={{ color: "#ff4d4f" }}>{form.errors[field.name]}</small>}
		</div>
	);
}
