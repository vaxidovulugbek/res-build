import { Button, Col, Flex, Row } from "antd";
import Fields from "components/Fields";
import { Field, Form, Formik } from "formik";
import { get } from "lodash";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ResInfo } from "../../../redux/actions";
import * as Yup from "yup";
import { useWindowSize } from "hooks";
import TextEditor from "./TextEditor";
import useStore from "../../../zustand/store";
import SocialLinks from "./SocialLinks";

export default function FormFields({ handleNextSlide }: { handleNextSlide: any }) {
	const { hasError, changeStatusSlider } = useStore();
	const width = useWindowSize();

	const dispatch = useDispatch();
	const resumeName = useSelector((state: any) => state.resumeName);
	const resumeLastName = useSelector((state: any) => state.resumeLastName);
	const resumeEmail = useSelector((state: any) => state.resumeEmail);

	const validationSchema = Yup.object({
		name: Yup.string().required("Ism majburiy"),
		Last_Name: Yup.string().required("Ism majburiy"),
		Email_Address: Yup.string()
			.email("To'g'ri email manzili kiriting")
			.required("Email majburiy"),
	});

	// Boshlang'ich form qiymatlari
	const initialValues = {
		name: "",
		Last_Name: "",
		Email_Address: "",
	};

	// Formni yuborish amaliyoti
	const onSubmit = (values: any) => {
		// console.log("Form yuborildi:", values.name);
		dispatch(ResInfo?.setResumeName(values.name));
	};

	const re = /^[^@]+@[^@]+$/;

	// const re =
	// 	/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	// useEffect(() => {
	// 	console.log([resumeName, resumeLastName, resumeEmail]);
	// 	// console.log(re.test("jkj@gmail.com"));
	// 	console.log([resumeName, resumeLastName, resumeEmail].every((item) => item !== ""));
	// }, [resumeName, resumeLastName, resumeEmail]);

	return (
		<>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
			>
				<Form>
					<Row gutter={[16, 16]}>
						<Col span={width < 480 ? 24 : 12}>
							<Field
								type="text"
								id="name"
								name="name"
								className="w-full"
								placeholder="component input ssss"
								label="Ism:"
								component={Fields.InputField}
							/>
						</Col>
						<Col span={width < 480 ? 24 : 12}>
							<Field
								type="text"
								id="Last_Name"
								name="Last_Name"
								label="Last Name"
								placeholder="Last Name"
								component={Fields.InputField}
							/>
						</Col>
						<Col span={width < 480 ? 24 : 12}>
							<Field
								name="Job_Title"
								label="Job Title"
								placeholder="Job Title"
								component={Fields.InputField}
							/>
						</Col>
						<Col span={width < 480 ? 24 : 12}>
							<Field
								name="Phone"
								label="Phone"
								placeholder="Phone"
								component={Fields.InputField}
							/>
						</Col>
						<Col span={width < 480 ? 24 : 12}>
							<Field
								id="Email_Address"
								name="Email_Address"
								label="Email Address"
								placeholder="Email Address"
								type="email"
								component={Fields.InputField}
							/>
						</Col>
						<Col span={width < 480 ? 24 : 12}>
							<Field
								name="Address"
								label="Address"
								placeholder="Address"
								component={Fields.InputField}
							/>
						</Col>
						<SocialLinks />
						{/* <Col span={width < 480 ? 24 : 12}>
							<Field
								name="Address"
								label="Address"
								placeholder="Address"
								component={Fields.InputField}
							/>
						</Col> */}
						<Col span={24} className="modal-footer flex items-center">
							<Button
								className="flex items-center h-10 text-white hover:bg-cyan-700 bg-cyan-700 px-4 py-1.5 rounded-3xl editor__btn-hover editor__btn-shadow max-[480px]:text-sm"
								loading={false}
								htmlType="submit"
								type="primary"
								formAction="submit"
								formTarget="category"
								onClick={
									[resumeName, resumeLastName, resumeEmail].every(
										(item) => item !== ""
									) && re.test(resumeEmail)
										? handleNextSlide
										: null
								}
							>
								Создать
							</Button>
						</Col>
					</Row>
				</Form>
			</Formik>
		</>
	);
}
