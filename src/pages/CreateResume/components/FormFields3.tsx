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
import plus from "assets/imgs/icons/plus.svg";
import next from "assets/imgs/icons/next.svg";
import prev from "assets/imgs/icons/prev.svg";

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
								<div
									key={form?.id}
									className="p-3 border border-[#d9d9d9] rounded-md"
								>
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
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
												>
													<path
														d="M2.2 2.9h11.6v11.7a.9.9 0 01-.9.9H3.1a.9.9 0 01-.9-.9V2.9h0zM15.5 2.9H.5M5 2.9V1.4a.9.9 0 01.9-.9h4.2a.9.9 0 01.9.9v1.5M5.5 4.8v7.5M8 4.8v7.5M10.5 4.8v7.5"
														fill="none"
														stroke="#b0bbd1"
														strokeLinecap="round"
														strokeMiterlimit="10"
													></path>
												</svg>
											</Button>
										</Col>
									</Row>
								</div>
							);
						})}
					<Button className="flex items-center my-4" onClick={handleAddEducation}>
						<img className="w-4 me-2" src={plus} alt="plus icon" />{" "}
						<span className="mb-[0.5px]">Add more education</span>
					</Button>
					<div className="flex items-center gap-3">
						<Button
							style={{ boxShadow: "0px 0px 15px rgba(0,0,0,.15)" }}
							className="flex items-center rounded-full h-[40px] w-[40px] p-2"
							onClick={handlePrevSlide}
						>
							<img className="w-6" src={prev} alt="prev icon " />
						</Button>
						<Button
							className="flex items-center h-10 text-white hover:bg-cyan-700 bg-cyan-700 px-4 py-1.5 rounded-3xl editor__btn-hover editor__btn-shadow max-[480px]:text-sm"
							loading={false}
							htmlType="submit"
							type="primary"
							formAction="submit"
							formTarget="category"
							onClick={handleNextSlide}
						>
							<p>next step</p> <img className="ms-2 w-6" src={next} alt="next icon" />
						</Button>
					</div>
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
