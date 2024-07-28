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

export default function InputFieldEducation({
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
	const { setHasError, countExpirence, countEducation } = useStore();

	const onChanges: DatePickerProps<Dayjs[]>["onChange"] = (date: any, dateString: any) => {
		// console.log(form.values, dateString);
		form.setFieldValue(field.name, dateString);
	};

	useEffect(() => {
		// Xato haqida o'girishni saqlash
		setHasError(hasError);
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
		// education part
		dispatch(ResInfo.setResumeEducationName([...educationDegreeName]));
		dispatch(ResInfo.setResumeEducationPosition([...educationName]));
		dispatch(ResInfo.setResumeEducationStartDate([...educationStart]));
		dispatch(ResInfo.setResumeEducationEndDate([...educationEnd]));
	}, [form.values, hasError]);

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
					format="DD.MM.YYYY"
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
