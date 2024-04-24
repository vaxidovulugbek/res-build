import { Col, Row } from "antd";
import Fields from "components/Fields";
import { Field, Form, Formik } from "formik";
import { useWindowSize } from "hooks";
import { isArray } from "lodash";
import React, { useState } from "react";
import { Title, Button } from "ui";
import useStore from "../../../zustand/store";
import Languages from "./Languages";
import "./styles.scss";
import TextEditor from "./TextEditor";

export default function FormFields4({ handlePrevSlide }: any) {
	const initialValues = {};
	const width = useWindowSize();
	const { setDataVolunteering, dataVolunteering, setDataInterests, dataInterests } = useStore();
	// const [dataInterests, setDataInterests] = useState<any[]>([]);
	const [dataLanguages, setDataLanguages] = useState<any[]>([]);
	// const [dataVolunteering, setDataVolunteering] = useState<any[]>([]);
	const addAdditional = ({ index }: any) => {
		console.log(index);

		if (index === 0) {
			if (dataInterests.length < 1) {
				// console.log(data, data.length);
				setDataInterests([...dataInterests, 1]);
			} else {
				alert("Element qo'shilgan!");
				// console.log(data, 111);
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
	// useEffect(() => {
	// 	console.log(data);
	// }, [data]);
	return (
		<div className="editor__form-content">
			<div className="min-[320px]:mb-3 xl:mb-5">
				<Title
					className="editor__title title-color"
					as="h1"
					text="Add Additional Section"
				/>
			</div>
			<ul className="editor__additional-list flex flex-wrap">
				{[
					"Interests",
					"Languages",
					// "Certifications",
					"Volunteering",
					// "Accomplishments",
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
													className="w-full"
													placeholder="interests"
													label="interests"
													component={TextEditor}
												/>
											</Col>
											<Col span={24} className="modal-footer">
												<Button onClick={() => handleDeleteInterest()}>
													Delete
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
										{/* <Col span={24}>
											<Field
												className="my-2"
												name="languages"
												description="add languages"
												component={Fields.TagInputAntd}
												label="Languages"
											/>
										</Col> */}
										<Languages />
										<Col span={24} className="modal-footer">
											<Button onClick={() => handleDeleteLanguages()}>
												Delete
											</Button>
										</Col>
									</div>
								);
							})}
						{isArray(dataVolunteering) &&
							dataVolunteering.map((form) => {
								return (
									<div
										key={form?.id}
										className="rounded-md p-3 border-solid border-1"
									>
										<Row gutter={[16, 16]}>
											<Col span={24}>
												<Field
													type="text"
													id={"volunteering_ActivityName"}
													name={"volunteering_ActivityName"}
													label="Activity Name"
													placeholder="Activity Name"
													component={Fields.InputField}
												/>
											</Col>
											<Col span={24}>
												<Field
													type="text"
													id={"volunteering_Address"}
													name={"volunteering_Address"}
													label="Volunteering Address"
													placeholder="Volunteering Address"
													component={Fields.InputField}
												/>
											</Col>
											<Col span={width < 480 ? 24 : 12}>
												<Field
													name={"volunteering_startDate"}
													type="date"
													label="Start Date"
													placeholder="Start Date"
													component={Fields.InputField}
												/>
											</Col>
											<Col span={width < 480 ? 24 : 12}>
												<Field
													name={"volunteering_endDate"}
													type="date"
													label="End Date"
													placeholder="End Date"
													component={Fields.InputField}
												/>
											</Col>
											<Col span={24}>
												<Field
													type="text"
													id={"volunteering"}
													name={"volunteering"}
													className="w-full"
													placeholder="volunteering"
													label="volunteering"
													component={TextEditor}
												/>
											</Col>
											<Col span={24} className="modal-footer">
												<Button onClick={() => handleDeleteVolunteering()}>
													Delete
												</Button>
											</Col>
										</Row>
									</div>
								);
							})}
					</Form>
				</Formik>
			</div>
			<Button onClick={handlePrevSlide}>prev</Button>
		</div>
	);
}
