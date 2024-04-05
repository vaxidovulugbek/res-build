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
import cn from "classnames";

export default function FormFields2({ handlePrevSlide }: { handlePrevSlide: any }) {
	const { changeStatusSlider } = useStore();

	const width = useWindowSize();

	const dispatch = useDispatch();
	const resumeName = useSelector((state: any) => state.resumeName);

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
	// useEffect(() => {
	// 	console.log(resumeName);
	// }, [name, dispatch]);

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
								// onChange={setName}
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
						<Col span={24} className="pb-16">
							<TextEditor />
						</Col>
						<Col span={24} className="modal-footer">
							{/* <Button
							style={{ background: "orange", borderColor: "orange" }}
							loading={false}
							htmlType="submit"
							type="primary"
							formAction="submit"
							formTarget="category"
						>
							Создать
						</Button> */}
							<Button
								className={cn(
									"ms-3 editor__btn-shadow flex items-center shadow-xl p-3 w-10 h-10 rounded-full",
									{
										hidden: changeStatusSlider === true,
									}
								)}
								onClick={handlePrevSlide}
								children={"<GrLinkPrevious />"}
							/>
							<button type="submit">ok</button>
						</Col>
					</Row>
				</Form>
			</Formik>
		</>
	);
}
