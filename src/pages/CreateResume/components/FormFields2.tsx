// import { Button, Col, Flex, Row } from "antd";
// import Fields from "components/Fields";
// import { Field, Form, Formik } from "formik";
// import { get } from "lodash";
// import { useEffect, useRef, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { ResInfo } from "../../../redux/actions";
// import * as Yup from "yup";
// import { useWindowSize } from "hooks";
// import TextEditor from "./TextEditor";
// import useStore from "../../../zustand/store";
// import { Title, Text } from "ui";
// import cn from "classnames";
// import { componentExpirence } from "types/interface";

// export default function FormFields2({
// 	handlePrevSlide,
// 	handleNextSlide,
// }: {
// 	handlePrevSlide: any;
// 	handleNextSlide: any;
// }) {
// 	const { changeStatusSlider } = useStore();
// 	const [componentsExpirence, setComponentExpirence] = useState<componentExpirence[]>([
// 		{ id: 1, value: "" },
// 	]);
// 	const width = useWindowSize();

// 	// Boshlang'ich form qiymatlari
// 	const initialValues = {};

// 	return (
// 		<div className="editor__form-content">
// 			<div className="min-[320px]:mb-3 xl:mb-5">
// 				<Title
// 					className="editor__title title-color"
// 					as="h1"
// 					text="Professional Experience"
// 				/>
// 				<Text className="text-gray" as="p" text="Tell us about your most recent job." />
// 			</div>
// 			<Formik initialValues={initialValues} onSubmit={() => console.log("ok")}>
// 				<Form>
// 					{componentsExpirence &&
// 						componentsExpirence.map(() => {
// 							return (
// 								<Row gutter={[16, 16]}>
// 									<Col span={width < 480 ? 24 : 12}>
// 										<Field
// 											type="text"
// 											id="experiencePosition"
// 											name="experiencePosition"
// 											className="w-full"
// 											placeholder="Position Title"
// 											label="Position Title"
// 											component={Fields.InputField}
// 										/>
// 									</Col>
// 									<Col span={width < 480 ? 24 : 12}>
// 										<Field
// 											type="text"
// 											id="experienceCompany"
// 											name="experienceCompany"
// 											label="Company Name"
// 											placeholder="Company Name"
// 											component={Fields.InputField}
// 										/>
// 									</Col>
// 									<Col span={width < 480 ? 24 : 12}>
// 										<Field
// 											name="experienceStartDate"
// 											type="date"
// 											label="Start Date"
// 											placeholder="Start Date"
// 											component={Fields.InputField}
// 										/>
// 									</Col>
// 									<Col span={width < 480 ? 24 : 12}>
// 										<Field
// 											name="experienceEndDate"
// 											type="date"
// 											label="End Date"
// 											placeholder="End Date"
// 											component={Fields.InputField}
// 										/>
// 									</Col>
// 									<Col span={24}>
// 										<Field
// 											name="expirienceEditor"
// 											label="Work Summary"
// 											placeholder="Your placeholder text here..."
// 											component={TextEditor}
// 										/>
// 									</Col>

// 									<Col span={24} className="modal-footer">
// 										<Button>delete one expirence</Button>
// 										{/* <button type="submit">ok</button> */}
// 										{/* <Button
// 											className={cn(
// 												"ms-3 editor__btn-shadow flex items-center shadow-xl p-3 w-10 h-10 rounded-full",
// 												{
// 													hidden: changeStatusSlider === true,
// 												}
// 											)}
// 											onClick={handlePrevSlide}
// 											children={"<GrLinkPrevious />"}
// 										/> */}
// 									</Col>
// 								</Row>
// 							);
// 						})}
// 					<Button
// 						className={cn(
// 							"ms-3 editor__btn-shadow flex items-center shadow-xl p-3 w-10 h-10 rounded-full",
// 							{
// 								hidden: changeStatusSlider === true,
// 							}
// 						)}
// 						onClick={handlePrevSlide}
// 						children={"<GrLinkPrevious />"}
// 					/>
// 					<Button>add more expirence</Button>
// 					<button onClick={handleNextSlide}>next</button>
// 				</Form>
// 			</Formik>
// 		</div>
// 	);
// }

import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "antd";
import Fields from "components/Fields";
import { Field, Form, Formik } from "formik";
import TextEditor from "./TextEditor";
import { componentExpirence } from "types/interface";
import { useSelectorRedux, useWindowSize } from "hooks";
import { Text, Title } from "ui";
import { useDispatch } from "react-redux";
import { ResInfo } from "../../../redux/actions";
import useStore from "../../../zustand/store";
import { isArray } from "lodash";

export default function FormFields2({ handlePrevSlide, handleNextSlide }: any) {
	const width = useWindowSize();
	const dispatch = useDispatch();
	const initialValues = {};
	const { setCountExpirence, setIdExpirence } = useStore();
	const {
		resumeCompanyName,
		resumePosition,
		resumeStartDate,
		resumeEndDate,
		resumeAboutExpirience,
	} = useSelectorRedux();

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
		// console.log(id);
		setIdExpirence(id);
		setExperienceForms(experienceForms.filter((item) => item?.id !== id));
		// setCountExpirence(experienceForms.filter((item) => item?.id !== id));
	};

	// const handleDeleteExperience = (id: number) => {
	// 	setIdExpirence(id);
	// 	setExperienceForms(experienceForms.filter((item) => item?.id !== id));
	// 	const updatedExperienceForms = experienceForms.map((item, index) => {
	// 		if (item.id > id) {
	// 			return { ...item, id: item.id - 1 };
	// 		}
	// 		return item;
	// 	});
	// 	setExperienceForms(updatedExperienceForms);
	// };

	useEffect(() => {
		if (isArray(experienceForms)) {
			setCountExpirence(experienceForms);
		}
		console.log(experienceForms);
	}, [experienceForms, dispatch, experienceForms?.length]);
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
			<Formik initialValues={initialValues} onSubmit={() => console.log("ok")}>
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
									{/* Add other fields as needed */}
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
