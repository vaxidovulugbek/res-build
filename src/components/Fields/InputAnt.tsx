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
import { get } from "lodash";
import { useEffect } from "react";
import cn from "classnames";
import "./styles.scss";
import { useDispatch } from "react-redux";
import { ResInfo } from "../../redux/actions";
import useStore from "../../zustand/store";
import moment from "moment";
import type { Dayjs } from "dayjs";
import type { DatePickerProps } from "antd";

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
	const { setHasError } = useStore();

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
		dispatch(ResInfo.setResumeCompanyName(form.values.experienceCompany));
		dispatch(ResInfo.setResumePosition(form.values.experiencePosition));
		dispatch(ResInfo.setResumeStartDate(form.values.experienceStartDate));
		dispatch(ResInfo.setResumeEndDate(form.values.experienceEndDate));
		// dispatch(ResInfo.setResumeAboutExpirience(form.values.expirienceEditor));

		// education part
		dispatch(ResInfo.setResumeEducationName(form.values.degreeName));
		dispatch(ResInfo.setResumeEducationPosition(form.values.instructionName));
		dispatch(ResInfo.setResumeEducationStartDate(form.values.educationStartDate));
		dispatch(ResInfo.setResumeEducationEndDate(form.values.educationEndDate));

		// Xato haqida o'girishni saqlash
		setHasError(hasError);
		// console.log(form.values);
	}, [form.values, form.errors, field.name, dispatch, setHasError, hasError]);

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
					defaultValue={get(form.values, field.name)}
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
