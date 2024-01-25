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
	...props
}: {
	label: string;
	type: string;
	form: any;
	field: any;
	placeholder: string;
	touched: any;
	onChange: any;
}) {
	const hasError = get(form.touched, field.name) && get(form.errors, field.name);
	const [inputType, setType] = useState(type);
	useEffect(() => {
		console.log(form);
	}, [form]);

	return (
		<div className={`field_input ${hasError ? "error" : ""}`}>
			{label ? <label className="field_label text-xs">{label}</label> : null}

			<div className="field_input--wrapper">
				<Input
					type={inputType}
					// defaultValue={get(form.values, field.name)}
					placeholder={placeholder}
					onChange={(event) => {
						form.setFieldValue(field.name, event.target.value);
						onChange && onChange(event.target.value);
					}}
					{...props}
				/>
			</div>

			{hasError ? (
				<small className="field_error">{get(form.errors, field.name)}</small>
			) : null}
		</div>
	);
}
