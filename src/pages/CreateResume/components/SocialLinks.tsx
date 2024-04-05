import React, { useEffect, useState } from "react";
import { Button } from "ui";
import { Field, Form, Formik } from "formik";
import { Col, Input } from "antd";
import Fields from "components/Fields";
import useWindowSize from "hooks/useWindowSize";

const SocialLinks: React.FC = () => {
	const width = useWindowSize();

	const [inputs, setInputs] = useState([{ value1: "", value2: "" }]);
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

	useEffect(() => {
		console.log(inputs);
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
								stroke-miterlimit="10"
								stroke-linecap="round"
							></path>
						</svg>
					}
				/>
			</Col>
			{inputs.map((input, index) => (
				<Col span={24} key={index}>
					<div className="w-full flex items-center gap-5">
						<div className="flex-auto">
							<label className="text-xs">Description (optional)</label>
							<Input
								placeholder="Input 1"
								value={input.value1}
								onChange={(e) => handleChange(index, e.target.value, 1)}
								// style={{ marginBottom: "10px", border: "1px solid red" }}
							/>
						</div>
						<div className="flex-auto">
							<label className="text-xs">Link/Text/Etc.</label>
							<Input
								placeholder="Input 1"
								value={input.value1}
								onChange={(e) => handleChange(index, e.target.value, 1)}
								// style={{ marginBottom: "10px", border: "1px solid red" }}
							/>
						</div>
						<Button
							className="flex-none py-3 px-1 mt-4 z-50"
							type="button"
							onClick={() => handleDelete(index)}
							children={
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
									<path
										d="M2.2 2.9h11.6v11.7a.9.9 0 01-.9.9H3.1a.9.9 0 01-.9-.9V2.9h0zM15.5 2.9H.5M5 2.9V1.4a.9.9 0 01.9-.9h4.2a.9.9 0 01.9.9v1.5M5.5 4.8v7.5M8 4.8v7.5M10.5 4.8v7.5"
										fill="none"
										stroke="#b0bbd1"
										stroke-linecap="round"
										stroke-miterlimit="10"
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
