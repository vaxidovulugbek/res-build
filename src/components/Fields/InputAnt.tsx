import { Input } from "antd";
import { get } from "lodash";
import { useEffect, useState } from "react";
import "./styles.scss";

export default function InputField({
	label,
	form,
	field,
	placeholder,
	type = "text",
	onChange,
	touched,
	id,
	...props
}: {
	label: string;
	type: string;
	form: any;
	field: any;
	placeholder: string;
	touched: any;
	onChange: any;
	id: any;
}) {
	const hasError = get(form.touched, field.name) && get(form.errors, field.name);
	useEffect(() => {
		console.log(form.touched, field.name);
	}, []);

	const [inputType, setType] = useState(type);

	return (
		<div className={`${hasError ? "error" : ""}`}>
			{label ? <label className="text-xs">{label}</label> : null}
			<Input
				type={inputType}
				defaultValue={get(form.values, field.name)}
				placeholder={placeholder}
				id={field.name}
				onBlur={field.onBlur}
				onChange={field.onChange}
				// onChange={(event) => {
				// 	form.setFieldValue(field.name, event.target.value);
				// 	onChange && onChange(event.target.value);
				// }}
				{...props}
			/>
			{hasError ? (
				<small className="field_error">{get(form.errors, field.name)}</small>
			) : null}
		</div>
	);
}
