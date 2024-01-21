import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { get } from "lodash";
import { useState } from "react";

export default function InputField({
	label,
	form,
	field,
	placeholder,
	type = "text",
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
	const hasError = get(form.touched, field.name) && get(form.errors, field.name);
	const [inputType, setType] = useState(type);

	return (
		<div className={`field_input ${hasError ? "error" : ""}`}>
			{label ? <label>{label}</label> : null}

			<div className="field_input--wrapper">
				<Input
					type={inputType}
					defaultValue={get(form.values, field.name)}
					placeholder={placeholder}
					onChange={(event) => {
						form.setFieldValue(field.name, event.target.value);
						onChange && onChange(event.target.value);
					}}
					{...props}
				/>
				<span
					className="password_view"
					onClick={() => setType(inputType === "password" ? "text" : "password")}
				>
					{type === "password" ? (
						inputType === "password" ? (
							<EyeOutlined />
						) : (
							<EyeInvisibleOutlined />
						)
					) : null}
				</span>
			</div>

			{hasError ? (
				<small className="field_error">{get(form.errors, field.name)}</small>
			) : null}
		</div>
	);
}
