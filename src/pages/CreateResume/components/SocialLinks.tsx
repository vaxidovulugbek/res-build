import React, { useEffect, useState } from "react";
import { Button } from "ui";
import { Field, Form, Formik } from "formik";
import { Col, Input } from "antd";
import Fields from "components/Fields";
import { useWindowSize } from "hooks";
import { ResInfo } from "../../../redux/actions";
import { useDispatch } from "react-redux";

interface InputValues {
	value1: string;
	value2: string;
}

// SOCIAL LINKSNI  FIELD QILIB YOZIB KOR, COMPONENTSGA FUNCSION YARATIB RETURN QILIB KOR, FUNCTIONS DEGAN BO'LIM OCH
const SocialLinks: React.FC = () => {
	const width = useWindowSize();

	// const [inputs, setInputs] = useState([]);
	const [inputs, setInputs] = useState<InputValues[]>([]);
	const handleAddInput = () => setInputs([...inputs, { value1: "", value2: "" }]);

	const handleChange = (index: number, value: string, inputNumber: number) => {
		const newInputs = inputs.map((input, i) => {
			if (i === index) {
				return inputNumber === 1
					? { ...input, value1: value }
					: { ...input, value2: value };
			}
			return input;
		});
		setInputs(newInputs);
	};

	const handleDelete = (index: number) => {
		const newInputs = inputs.filter((_, i) => i !== index);
		setInputs(newInputs);
	};

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(ResInfo?.setResumeSocialLinks(inputs));
	}, [inputs]);

	return (
		<>
			{/* <Field
				type="text"
				id="name"
				name="name"
				className="w-full"
				placeholder="component input ssss"
				label="Ism:"
				component={Fields.InputField}
			/> */}
			<Col span={24}>
				<Button
					onClick={handleAddInput}
					className="flex items-center flex-row-reverse justify-end capitalize"
					text="add Social Links"
					type="button"
					children={
						<svg
							className="me-2"
							width="16"
							height="16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1 7.82h14.093M8.047.773v14.093"
								stroke="#2A64AD"
								strokeMiterlimit="10"
								strokeLinecap="round"
							></path>
						</svg>
					}
				/>
			</Col>
			{inputs &&
				inputs.map((input, index) => (
					<Col span={24} key={index}>
						<div className="w-full flex items-center gap-5 max-[480px]:gap-2 max-[480px]:flex-col max-[489px]:items-baseline">
							<div className="flex-auto max-[489px]:w-full">
								<label className="text-xs">Description (optional)</label>
								<Input
									placeholder="Input 1"
									value={input.value1}
									onChange={(e) => handleChange(index, e.target.value, 1)}
								/>
							</div>
							<div className="flex-auto max-[489px]:w-full">
								<label className="text-xs">Link/Text/Etc.</label>
								<Input
									placeholder="Input 1"
									value={input.value2}
									onChange={(e) => handleChange(index, e.target.value, 2)}
								/>
							</div>
							<Button
								className="flex-none py-3 px-1 mt-4 z-50 max-[489px]:mt-0"
								type="button"
								onClick={() => handleDelete(index)}
								children={
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
										<path
											d="M2.2 2.9h11.6v11.7a.9.9 0 01-.9.9H3.1a.9.9 0 01-.9-.9V2.9h0zM15.5 2.9H.5M5 2.9V1.4a.9.9 0 01.9-.9h4.2a.9.9 0 01.9.9v1.5M5.5 4.8v7.5M8 4.8v7.5M10.5 4.8v7.5"
											fill="none"
											stroke="#b0bbd1"
											strokeLinecap="round"
											strokeMiterlimit="10"
										></path>
									</svg>
								}
							/>
						</div>
					</Col>
				))}
		</>
	);
};

export default SocialLinks;
