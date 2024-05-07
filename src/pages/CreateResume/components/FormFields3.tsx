import { Button, Col, Row } from "antd";
import cn from "classnames";
import Fields from "components/Fields";
import { Field, Form, Formik } from "formik";
import { useWindowSize } from "hooks";
import { isArray } from "lodash";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { componentEducation } from "types/interface";
import { Text, Title } from "ui";
import * as Yup from "yup";
import useStore from "../../../zustand/store";
import TextEditor from "./TextEditor";

export default function FormFields3({ handlePrevSlide, handleNextSlide }: any) {
	const { changeStatusSlider, setCountEducation, setIdEducation } = useStore();
	const width = useWindowSize();
	const dispatch = useDispatch();
	const { t } = useTranslation();
	const initialValues = {};

	const [educationForms, setEducationForms] = useState<componentEducation[]>([
		{ id: 0, value: "" },
	]);

	const handleAddEducation = () => {
		const maxId = educationForms.reduce(
			(max: any, item: any) => (item.id > max ? item.id : max),
			-1
		);
		const newId = maxId + 1;
		setEducationForms([...educationForms, { id: newId, value: "" }]);
	};

	const handleDeleteEducation = (id: number) => {
		setIdEducation(id);
		setEducationForms(educationForms.filter((form) => form.id !== id));
	};

	useEffect(() => {
		if (isArray(educationForms)) {
			setCountEducation(educationForms);
		}
	}, [educationForms, dispatch, educationForms.length]);

	// Formni yuborish amaliyoti
	const onSubmit = (values: any) => {
		// console.log("Form yuborildi:", values.name);
	};
	return (
		<div className="editor__form-content">
			<div className="min-[320px]:mb-3 xl:mb-5">
				<Title
					className="editor__title title-color capitalize"
					as="h1"
					text={t("EDUCATION")}
				/>
				<Text
					className="text-gray"
					as="p"
					text={t("Tell us about your last place of education.")}
				/>
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
												placeholder={t("Your Degree Name")}
												label={t("Your Degree Name")}
												component={Fields.InputField}
											/>
										</Col>
										<Col span={width < 480 ? 24 : 12}>
											<Field
												type="text"
												id={`instructionName_${form?.id}`}
												name={`instructionName_${form?.id}`}
												label={t("name_education")}
												placeholder={t("name_education")}
												component={Fields.InputField}
											/>
										</Col>
										<Col span={width < 480 ? 24 : 12}>
											<Field
												name={`educationStartDate_${form?.id}`}
												type="date"
												label={t("start_date")}
												placeholder={t("start_date")}
												component={Fields.InputField}
											/>
										</Col>
										<Col span={width < 480 ? 24 : 12}>
											<Field
												name={`educationEndDate_${form?.id}`}
												type="date"
												label={t("end_date")}
												placeholder={t("end_date")}
												component={Fields.InputField}
											/>
										</Col>
										<Col span={24}>
											<Field
												name={`educationEditor_${form?.id}`}
												label={t("summary")}
												placeholder={t("summary")}
												component={TextEditor}
											/>
										</Col>
										<Col span={24} className="modal-footer">
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
					<Button onClick={handleNextSlide}>Next</Button>
				</Form>
			</Formik>
		</div>
	);
}

// {/* <Button
// 	className={cn(
// 		"ms-3 editor__btn-shadow flex items-center shadow-xl p-3 w-10 h-10 rounded-full",
// 		{
// 			hidden: changeStatusSlider === true,
// 		}
// 	)}
// 	onClick={handlePrevSlide}
// 	children={"<GrLinkPrevious />"}
// />
// <button type="submit">ok</button> */}
