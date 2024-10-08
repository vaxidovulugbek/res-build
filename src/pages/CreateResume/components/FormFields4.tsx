import { Col, Row } from "antd";
import Fields from "components/Fields";
import DownloadResumeComponent from "components/DownloadResumeComponent";
import { Field, Form, Formik } from "formik";
import { useWindowSize } from "hooks";
import { isArray } from "lodash";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Title, Button } from "ui";
import useStore from "../../../zustand/store";
import Languages from "./Languages";
import "./styles.scss";
import TextEditor from "./TextEditor";
import prev from "assets/imgs/icons/prev.svg";
import RoutesPath from "helpers/RoutesPath";

export default function FormFields4({ handlePrevSlide }: any) {
	const initialValues = {};
	const width = useWindowSize();
	const { setDataVolunteering, dataVolunteering, setDataInterests, dataInterests } = useStore();
	// const [dataInterests, setDataInterests] = useState<any[]>([]);
	const [dataLanguages, setDataLanguages] = useState<any[]>([]);
	const { t } = useTranslation();
	// const [dataVolunteering, setDataVolunteering] = useState<any[]>([]);
	const addAdditional = ({ index }: any) => {
		console.log(index);

		if (index === 0) {
			if (dataInterests.length < 1) {
				setDataInterests([...dataInterests, 1]);
			} else {
				alert("Element qo'shilgan!");
			}
		}
		if (index === 1) {
			if (dataLanguages.length < 1) {
				setDataLanguages([...dataLanguages, 1]);
			} else {
				alert("Element qo'shilgan!");
			}
		}
		if (index === 2) {
			if (dataVolunteering.length < 1) {
				setDataVolunteering([...dataVolunteering, 1]);
			} else {
				alert("Element qo'shilgan!");
			}
		}
	};

	const handleDeleteInterest = () => {
		setDataInterests([]);
	};
	const handleDeleteLanguages = () => {
		setDataLanguages([]);
	};
	const handleDeleteVolunteering = () => {
		setDataVolunteering([]);
	};
	const onSubmit = (values: any) => {
		// console.log("Form yuborildi:", values.name);
	};

	return (
		<div className="editor__form-content">
			<div className="min-[320px]:mb-3 xl:mb-5">
				<Title
					className="editor__title title-color capitalize"
					as="h1"
					text={t("Add Additional Section")}
				/>
			</div>
			<ul className="editor__additional-list flex flex-wrap">
				{[
					`${t("Interests")}`,
					`${t("Languages")}`,
					// "Certifications",
					`${t("Volunteering")}`,
				].map((item, index) => {
					return (
						<li key={index}>
							<Button className="capitalize" onClick={() => addAdditional({ index })}>
								{item}
							</Button>
						</li>
					);
				})}
			</ul>
			<div>
				<Formik initialValues={initialValues} onSubmit={onSubmit}>
					<Form>
						{isArray(dataInterests) &&
							dataInterests.map((form) => {
								return (
									<div
										key={form?.id}
										className="rounded-md p-3 border-solid border-1 mb-8"
									>
										<Row gutter={[16, 16]}>
											<Col span={24}>
												<Field
													type="text"
													id={"interests"}
													name={"interests"}
													className="w-full capitalize"
													placeholder={t("Interests")}
													label={t("Interests")}
													component={TextEditor}
												/>
											</Col>
											<Col span={24} className="modal-footer">
												<Button onClick={() => handleDeleteInterest()}>
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
						{isArray(dataLanguages) &&
							dataLanguages.map((_, idx) => {
								return (
									<div
										key={idx}
										className="rounded-md p-3 border-solid border-1 mb-8"
									>
										<Languages />
										<Col span={24} className="modal-footer">
											<Button onClick={() => handleDeleteLanguages()}>
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
									</div>
								);
							})}
						{isArray(dataVolunteering) &&
							dataVolunteering.map((_, idx) => {
								return (
									<div
										key={idx}
										className="rounded-md p-3 border-solid border-1 mb-8"
									>
										<Row gutter={[16, 16]}>
											<Col span={24}>
												<Field
													type="text"
													id={"volunteering_ActivityName"}
													name={"volunteering_ActivityName"}
													label={t("Activity Name")}
													placeholder={t("Activity Name")}
													component={Fields.InputFieldVolunteering}
												/>
											</Col>
											<Col span={24}>
												<Field
													type="text"
													id={"volunteering_Address"}
													name={"volunteering_Address"}
													label={t("Volunteering Address")}
													placeholder={t("Volunteering Address")}
													component={Fields.InputFieldVolunteering}
												/>
											</Col>
											<Col span={width < 480 ? 24 : 12}>
												<Field
													name={"volunteering_startDate"}
													type="date"
													label={t("start_date")}
													placeholder={t("start_date")}
													component={Fields.InputFieldVolunteering}
												/>
											</Col>
											<Col span={width < 480 ? 24 : 12}>
												<Field
													name={"volunteering_endDate"}
													type="date"
													label={t("end_date")}
													placeholder={t("end_date")}
													component={Fields.InputFieldVolunteering}
												/>
											</Col>
											<Col span={24}>
												<Field
													type="text"
													id={"volunteering"}
													name={"volunteering"}
													className="w-full"
													placeholder={t("summary")}
													label={t("summary")}
													component={TextEditor}
												/>
											</Col>
											<Col span={24} className="modal-footer">
												<Button onClick={() => handleDeleteVolunteering()}>
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
					</Form>
				</Formik>
			</div>
			<div className="flex items-center mt-4">
				<Button
					style={{ boxShadow: "0px 0px 15px rgba(0,0,0,.15)" }}
					className="flex items-center rounded-full h-[40px] py-2 px-3"
					onClick={handlePrevSlide}
				>
					<img className="w-6 me-1" src={prev} alt="prev icon " /> <span>ortga</span>
				</Button>
				<div className="max-[660px]:block sm:hidden">
					<DownloadResumeComponent />
				</div>
				<Button
					style={{ boxShadow: "0px 0px 15px rgba(0,0,0,.15)" }}
					className="flex items-center rounded-full h-[40px] py-2 px-3 max-[660px]:hidden sm:block ms-4 underline"
					link={RoutesPath.downloadResume}
				>
					{t("download resume")}
				</Button>
			</div>
		</div>
	);
}
