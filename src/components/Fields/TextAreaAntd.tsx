import { Input } from "antd";
import cn from "classnames";
import { useSelectorRedux } from "hooks";
import { get } from "lodash";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ResInfo } from "../../redux/actions";
import useStore from "../../zustand/store";
import "./styles.scss";

const { TextArea } = Input;

export default function TextAreaAntd({
	label,
	form,
	field,
	placeholder,
	onChange,
	className,
	...props
}: {
	label: string;
	form: any;
	field: any;
	placeholder: string;
	onChange: any;
	className: string;
}) {
	const hasError = form.touched[field.name] && form.errors[field.name];
	const dispatch = useDispatch();
	const { setHasError, countExpirence, countEducation, idExpirence } = useStore();

	const changeAboutHendler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		console.log(e.target.value);
		form.setFieldValue(field.name, e.target.value);
	};
	useEffect(() => {
		dispatch(ResInfo.setResumeAbout(form.values.about));
		// dispatch(ResInfo.setResumePosition([...experiencePositions]));
	}, [form.values, dispatch, setHasError, hasError]);

	return (
		<div className={cn("flex flex-col", { error: hasError, "w-full": !hasError })}>
			{label && <label className="text-xs capitalize">{label}</label>}
			<TextArea
				className={className}
				placeholder={placeholder}
				allowClear
				onChange={changeAboutHendler}
			/>
			{hasError && <small style={{ color: "#ff4d4f" }}>{form.errors[field.name]}</small>}
		</div>
	);
}
