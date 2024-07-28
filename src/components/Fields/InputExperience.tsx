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

export default function InputFieldExperience({
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
	const { setHasError, countExpirence } = useStore();

	const onChanges: DatePickerProps<Dayjs[]>["onChange"] = (date: any, dateString: any) => {
		form.setFieldValue(field.name, dateString);
	};

	useEffect(() => {
		// Xato haqida o'girishni saqlash
		setHasError(hasError);
		const experiencePositions = [];
		const experienceCompanyName = [];
		const experienceStart = [];
		const experienceEnd = [];

		let maxId = -1;
		if (isArray(countExpirence)) {
			maxId = countExpirence.reduce((max, item) => (item.id > max ? item.id : max), -1);
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
		dispatch(ResInfo.setResumePosition([...experiencePositions]));
		dispatch(ResInfo.setResumeCompanyName([...experienceCompanyName]));
		dispatch(ResInfo.setResumeStartDate([...experienceStart]));
		dispatch(ResInfo.setResumeEndDate([...experienceEnd]));
		console.log("rrrrrrrrrrnn");
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
