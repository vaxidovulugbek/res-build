import type { DatePickerProps } from "antd";
import { DatePicker, Input } from "antd";
import cn from "classnames";
import type { Dayjs } from "dayjs";
import { get } from "lodash";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ResInfo } from "../../redux/actions";
import useStore from "../../zustand/store";
import "./styles.scss";

export default function InputFieldVolunteering({
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
		dispatch(ResInfo.setResumeVolunteeringActivityName(form.values.volunteering_ActivityName));
		dispatch(ResInfo.setResumeVolunteeringAddress(form.values.volunteering_Address));
		dispatch(ResInfo.setResumeVolunteeringStartDate(form.values.volunteering_startDate));
		dispatch(ResInfo.setResumeVolunteeringEndDate(form.values.volunteering_endDate));
		// Xato haqida o'girishni saqlash
		setHasError(hasError);
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
