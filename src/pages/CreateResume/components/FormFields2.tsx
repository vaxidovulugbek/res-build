import { Button, Col, Row } from "antd";
import Fields from "components/Fields";
import { Field, Form, Formik } from "formik";
import { useWindowSize } from "hooks";
import { isArray } from "lodash";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { componentExpirence } from "types/interface";
import { Text, Title } from "ui";
import useStore from "../../../zustand/store";
import TextEditor from "./TextEditor";
import plus from "assets/imgs/icons/plus.svg";
import next from "assets/imgs/icons/next.svg";
import prev from "assets/imgs/icons/prev.svg";

export default function FormFields2({ handlePrevSlide, handleNextSlide }: any) {
	const width = useWindowSize();
	const dispatch = useDispatch();
	const { t } = useTranslation();
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
					className="editor__title title-color capitalize"
					as="h1"
					text={t("Professional Experience")}
				/>
				<Text
					className="text-gray"
					as="p"
					text={t("Tell us about your most recent job.")}
				/>
			</div>
			<Formik initialValues={initialValues} onSubmit={onSubmit}>
				<Form>
					{experienceForms &&
						experienceForms.map((form) => (
							<div key={form.id} className="p-3 border border-[#d9d9d9] rounded-md">
								<Row gutter={[16, 16]}>
									<Col span={width < 480 ? 24 : 12}>
										<Field
											type="text"
											id={`experiencePosition_${form.id}`}
											name={`experiencePosition_${form.id}`}
											className="w-full"
											placeholder={t("position_title")}
											label={t("position_title")}
											component={Fields.InputField}
										/>
									</Col>
									<Col span={width < 480 ? 24 : 12}>
										<Field
											type="text"
											id={`experienceCompany_${form.id}`}
											name={`experienceCompany_${form.id}`}
											label={t("company_name")}
											placeholder={t("company_name")}
											component={Fields.InputField}
										/>
									</Col>
									<Col span={width < 480 ? 24 : 12}>
										<Field
											name={`experienceStartDate_${form.id}`}
											type="date"
											label={t("start_date")}
											placeholder={t("start_date")}
											component={Fields.InputField}
										/>
									</Col>
									<Col span={width < 480 ? 24 : 12}>
										<Field
											name={`experienceEndDate_${form.id}`}
											type="date"
											label={t("end_date")}
											placeholder={t("end_date")}
											component={Fields.InputField}
										/>
									</Col>
									<Col span={24}>
										<Field
											name={`expirienceEditor_${form.id}`}
											label={t("summary")}
											placeholder={t("summary")}
											component={TextEditor}
										/>
									</Col>
									<Col span={24} className="modal-footer">
										<Button onClick={() => handleDeleteExperience(form.id)}>
											{/* Delete */}
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
						))}
					<Button className="flex items-center my-4" onClick={handleAddExperience}>
						<img className="w-4 me-2" src={plus} alt="plus icon" />{" "}
						<span className="mb-[0.5px]">Add more experience</span>
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
