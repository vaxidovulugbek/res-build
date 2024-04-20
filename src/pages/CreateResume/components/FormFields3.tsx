import { Button, Col, Row } from "antd";
import cn from "classnames";
import Fields from "components/Fields";
import { Field, Form, Formik } from "formik";
import { useWindowSize } from "hooks";
import { isArray } from "lodash";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { componentEducation } from "types/interface";
import { Text, Title } from "ui";
import * as Yup from "yup";
import useStore from "../../../zustand/store";
import TextEditor from "./TextEditor";

export default function FormFields3({ handlePrevSlide }: { handlePrevSlide: any }) {
	const [educationForms, setEducationForms] = useState<componentEducation[]>([
		{ id: 0, value: "" },
	]);
	const { changeStatusSlider, setCountEducation } = useStore();
	const width = useWindowSize();
	const dispatch = useDispatch();
	const initialValues = {};

	const newId = educationForms && educationForms?.length;
	const handleAddEducation = () => {
		setEducationForms([...educationForms, { id: newId, value: "" }]);
	};

	const handleDeleteEducation = (id: number) => {
		setEducationForms(educationForms.filter((form) => form.id !== id));
	};

	// Formni yuborish amaliyoti
	const onSubmit = (values: any) => {
		// console.log("Form yuborildi:", values.name);
		// dispatch(ResInfo?.setResumeName(values.name));
	};

	useEffect(() => {
		if (isArray(educationForms)) {
			setCountEducation(educationForms.length);
		}
	}, [educationForms, dispatch]);

	return (
		<div className="editor__form-content">
			<div className="min-[320px]:mb-3 xl:mb-5">
				<Title className="editor__title title-color" as="h1" text="EDUCATION" />
				<Text className="text-gray" as="p" text="Tell us about your most recent job." />
			</div>
			<Formik initialValues={initialValues} onSubmit={onSubmit}>
				<Form>
					{educationForms &&
						educationForms.map((form) => {
							return (
								<div key={form?.id}>
									<Row gutter={[16, 16]}>
										<Col span={width < 480 ? 24 : 12}>
											<Field
												type="text"
												id={`degreeName_${form.id}`}
												name={`degreeName_${form.id}`}
												className="w-full"
												placeholder="Your Degree Name"
												label="Your Degree Name"
												component={Fields.InputField}
											/>
										</Col>
										<Col span={width < 480 ? 24 : 12}>
											<Field
												type="text"
												id={`instructionName_${form?.id}`}
												name={`instructionName_${form?.id}`}
												label="Your Instruction Name"
												placeholder="Your Instruction Name"
												component={Fields.InputField}
											/>
										</Col>
										<Col span={width < 480 ? 24 : 12}>
											<Field
												name={`educationStartDate_${form?.id}`}
												type="date"
												label="Start Date"
												placeholder="Start Date"
												component={Fields.InputField}
											/>
										</Col>
										<Col span={width < 480 ? 24 : 12}>
											<Field
												name={`educationEndDate_${form?.id}`}
												type="date"
												label="End Date"
												placeholder="End Date"
												component={Fields.InputField}
											/>
										</Col>
										<Col span={24}>
											<Field
												name={`educationEditor_${form?.id}`}
												label="Education history"
												placeholder="Your placeholder text here..."
												component={TextEditor}
											/>
										</Col>
										<Col span={24} className="modal-footer">
											{/* <Button
												className={cn(
													"ms-3 editor__btn-shadow flex items-center shadow-xl p-3 w-10 h-10 rounded-full",
													{
														hidden: changeStatusSlider === true,
													}
												)}
												onClick={handlePrevSlide}
												children={"<GrLinkPrevious />"}
											/>
											<button type="submit">ok</button> */}
											<Button onClick={() => handleDeleteEducation(form.id)}>
												Delete
											</Button>
										</Col>
									</Row>
								</div>
							);
						})}
					<Button onClick={handleAddEducation}>Add more experience</Button>
					<Button onClick={handlePrevSlide}>Previous</Button>
					{/* <Button onClick={handleNextSlide}>Next</Button> */}
				</Form>
			</Formik>
		</div>
	);
}
