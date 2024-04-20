// import { DatePicker, Input } from "antd";
// import { get } from "lodash";
// import { useEffect, useState } from "react";
// import cn from "classnames";
// import "./styles.scss";
// import { useDispatch } from "react-redux";
// import { ResInfo } from "../../redux/actions";
// import useStore from "../../zustand/store";

// export default function InputField({
// 	label,
// 	form,
// 	field,
// 	placeholder,
// 	type,
// 	onChange,
// 	touched,
// 	id,
// 	datePicker,
// 	...props
// }: {
// 	label: string;
// 	type: string;
// 	form: any;
// 	field: any;
// 	placeholder: string;
// 	touched: any;
// 	onChange: any;
// 	id: any;
// 	datePicker: boolean;
// }) {
// 	const hasError = get(form.touched, field.name) && get(form.errors, field.name);
// 	const dispatch = useDispatch();
// 	const { setHasError } = useStore();
// 	useEffect(() => {
// 		dispatch(ResInfo?.setResumeName(form?.values?.name));
// 		dispatch(ResInfo?.setResumeLastName(form?.values?.Last_Name));
// 		dispatch(ResInfo?.setResumeEmail(form?.values?.Email_Address));
// 		dispatch(ResInfo?.setResumeJobTitle(form?.values?.Job_Title));
// 		dispatch(ResInfo?.setResumePhone(form?.values?.Phone));
// 		dispatch(ResInfo?.setResumeAdress(form?.values?.Address));
// 		setHasError(hasError);
// 		// console.log(form.values);
// 		console.log(field);
// 	}, [form.values]);

// 	useEffect(() => {
// 		setHasError(form.errors);
// 		// console.log([form]);
// 	}, [form.errors, field.name]);

// 	const [inputType, setType] = useState(type);

// 	return (
// 		<div className={cn({ error: hasError, "w-full": !hasError })}>
// 			{label ? <label className="text-xs">{label}</label> : null}
// 			{datePicker ? (
// 				<DatePicker
// 					type="date"
// 					style={hasError && { border: "1px solid #ff4d4f" }}
// 					defaultValue={get(form.values, field.name)}
// 					placeholder={placeholder}
// 					id={field.name}
// 					onBlur={field.onBlur}
// 					onChange={field.onChange}
// 					value={get(form.values.name, field.name)}
// 					{...props}
// 				/>
// 			) : (
// <Input
// 	style={hasError && { border: "1px solid #ff4d4f" }}
// 	type={inputType}
// 	defaultValue={get(form.values, field.name)}
// 	placeholder={placeholder}
// 	id={field.name}
// 	onBlur={field.onBlur}
// 	onChange={field.onChange}
// 	value={get(form.values.name, field.name)}
// 	{...props}
// />
// 			)}
// 			{hasError ? (
// 				<small style={hasError && { color: "#ff4d4f" }} className="error-type">
// 					{get(form.errors, field.name)}
// 				</small>
// 			) : null}
// 		</div>
// 	);
// }

import { DatePicker, Input } from "antd";
import { get, isArray } from "lodash";
import { useEffect, useState } from "react";
import cn from "classnames";
import "./styles.scss";
import { useDispatch } from "react-redux";
import { ResInfo } from "../../redux/actions";
import useStore from "../../zustand/store";
import moment from "moment";
import type { Dayjs } from "dayjs";
import type { DatePickerProps } from "antd";
import { useSelectorRedux } from "hooks";

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
	const {
		resumeCompanyName,
		resumePosition,
		resumeStartDate,
		resumeEndDate,
		resumeAboutExpirience,
	} = useSelectorRedux();

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

		// expireince part
		// dispatch(ResInfo.setResumeCompanyName(form.values.experienceCompany));
		// dispatch(ResInfo.setResumePosition([`${form.values[`experiencePosition_${0}`]}`]));
		// dispatch(ResInfo.setResumeStartDate(form.values.experienceStartDate));
		// dispatch(ResInfo.setResumeEndDate(form.values.experienceEndDate));
		// dispatch(ResInfo.setResumeAboutExpirience(form.values.expirienceEditor));

		// // education part
		// dispatch(ResInfo.setResumeEducationName(form.values.degreeName));
		// dispatch(ResInfo.setResumeEducationPosition(form.values.instructionName));
		// dispatch(ResInfo.setResumeEducationStartDate(form.values.educationStartDate));
		// dispatch(ResInfo.setResumeEducationEndDate(form.values.educationEndDate));

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
		// for (let i = 0; i < countExpirence.length; i++) {
		// 	experiencePositions.push(form.values[`experiencePosition_${i}`]); //muommo mana shu yerda bu indexni olayapdi idni emas
		// 	experienceCompanyName.push(form.values[`experienceCompany_${i}`]);
		// 	experienceStart.push(form.values[`experienceStartDate_${i}`]);
		// 	experienceEnd.push(form.values[`experienceEndDate_${i}`]);
		// }

		let maxId = -1;
		if (isArray(countExpirence)) {
			maxId = countExpirence.reduce((max, item) => (item.id > max ? item.id : max), -1);
		}
		// console.log("maxid:", maxId);

		for (let i = 0; i < maxId + 1; i++) {
			// console.log(countExpirence[i]);
			const position = form.values[`experiencePosition_${countExpirence[i]?.id}`];
			const positionIndex = countExpirence.findIndex((item: any) => item.id === i);
			if (positionIndex !== -1) {
				const position =
					form.values[`experiencePosition_${countExpirence[positionIndex]?.id}`];
				experiencePositions.push(position);
			} else {
				experiencePositions.push(undefined);
			}
			// experiencePositions.push(form.values[`experiencePosition_${countExpirence[i]?.id}`]); // 2chi id undifined bolib qoladiku 3chi elementni ochirganda
			experienceCompanyName.push(form.values[`experienceCompany_${countExpirence[i]?.id}`]);
			experienceStart.push(form.values[`experienceStartDate_${countExpirence[i]?.id}`]);
			experienceEnd.push(form.values[`experienceEndDate_${countExpirence[i]?.id}`]);
		}
		// const updatedPositions = [];
		// for (let i = 0; i <= maxId; i++) {
		// 	const position = form.values[`experiencePosition_${countExpirence[i]?.id}`];
		// if (position !== undefined) {
		// 	updatedPositions.push(position);
		// } else {
		// 	updatedPositions.push(undefined);
		// }
		// }
		// dispatch(ResInfo.setResumePosition([...updatedPositions]));
		dispatch(ResInfo.setResumePosition([...experiencePositions]));
		dispatch(ResInfo.setResumeCompanyName([...experienceCompanyName]));
		dispatch(ResInfo.setResumeStartDate([...experienceStart]));
		dispatch(ResInfo.setResumeEndDate([...experienceEnd]));
		// education part
		// for (let i = 0; i < countEducation; i++) {
		// 	educationDegreeName.push(form.values[`degreeName_${i}`]);
		// 	educationName.push(form.values[`instructionName_${i}`]);
		// 	educationStart.push(form.values[`educationStartDate_${i}`]);
		// 	educationEnd.push(form.values[`educationEndDate_${i}`]);
		// }
		// dispatch(ResInfo.setResumeEducationName([...educationDegreeName]));
		// dispatch(ResInfo.setResumeEducationPosition([...educationName]));
		// dispatch(ResInfo.setResumeEducationStartDate([...educationStart]));
		// dispatch(ResInfo.setResumeEducationEndDate([...educationEnd]));
		console.log(form.values, experiencePositions, countExpirence);
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
			{label && <label className="text-xs">{label}</label>}
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
