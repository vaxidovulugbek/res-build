import { Button, Col, Row } from "antd";
import Fields from "components/Fields";
import { Field, Form, Formik } from "formik";
import { useWindowSize } from "hooks";
import { isArray } from "lodash";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { componentExpirence } from "types/interface";
import { Text, Title } from "ui";
import useStore from "../../../zustand/store";
import TextEditor from "./TextEditor";

export default function FormFields2({ handlePrevSlide, handleNextSlide }: any) {
	const width = useWindowSize();
	const dispatch = useDispatch();
	const initialValues = {};
	const { setCountExpirence, setIdExpirence } = useStore();

	const [experienceForms, setExperienceForms] = useState<componentExpirence[]>([
		{ id: 0, value: "" },
	]);

	// const newId = experienceForms && experienceForms?.length;
	const handleAddExperience = () => {
		const maxId = experienceForms.reduce(
			(max: any, item: any) => (item.id > max ? item.id : max),
			-1
		);
		const newId = maxId + 1;
		setExperienceForms([...experienceForms, { id: newId, value: "" }]);
	};

	const handleDeleteExperience = (id: number) => {
		setIdExpirence(id);
		setExperienceForms(experienceForms.filter((item) => item?.id !== id));
		// setCountExpirence(experienceForms.filter((item) => item?.id !== id));
	};

	useEffect(() => {
		if (isArray(experienceForms)) {
			setCountExpirence(experienceForms);
		}
	}, [experienceForms, dispatch, experienceForms?.length]);

	const onSubmit = (values: any) => {
		// console.log("Form yuborildi:", values.name);
	};

	return (
		<div className="editor__form-content">
			<div className="min-[320px]:mb-3 xl:mb-5">
				<Title
					className="editor__title title-color"
					as="h1"
					text="Professional Experience"
				/>
				<Text className="text-gray" as="p" text="Tell us about your most recent job." />
			</div>
			<Formik initialValues={initialValues} onSubmit={onSubmit}>
				<Form>
					{experienceForms &&
						experienceForms.map((form) => (
							<div key={form.id}>
								<Row gutter={[16, 16]}>
									<Col span={width < 480 ? 24 : 12}>
										<Field
											type="text"
											id={`experiencePosition_${form.id}`}
											name={`experiencePosition_${form.id}`}
											className="w-full"
											placeholder="Position Title"
											label="Position Title"
											component={Fields.InputField}
										/>
									</Col>
									<Col span={width < 480 ? 24 : 12}>
										<Field
											type="text"
											id={`experienceCompany_${form.id}`}
											name={`experienceCompany_${form.id}`}
											label="Company Name"
											placeholder="Company Name"
											component={Fields.InputField}
										/>
									</Col>
									<Col span={width < 480 ? 24 : 12}>
										<Field
											name={`experienceStartDate_${form.id}`}
											type="date"
											label="Start Date"
											placeholder="Start Date"
											component={Fields.InputField}
										/>
									</Col>
									<Col span={width < 480 ? 24 : 12}>
										<Field
											name={`experienceEndDate_${form.id}`}
											type="date"
											label="End Date"
											placeholder="End Date"
											component={Fields.InputField}
										/>
									</Col>
									<Col span={24}>
										<Field
											name={`expirienceEditor_${form.id}`}
											label="Work Summary"
											placeholder="Your placeholder text here..."
											component={TextEditor}
										/>
									</Col>
									<Col span={24} className="modal-footer">
										<Button onClick={() => handleDeleteExperience(form.id)}>
											Delete
										</Button>
									</Col>
								</Row>
							</div>
						))}
					<Button onClick={handleAddExperience}>Add more experience</Button>
					<Button onClick={handlePrevSlide}>Previous</Button>
					<Button onClick={handleNextSlide}>Next</Button>
				</Form>
			</Formik>
		</div>
	);
}
