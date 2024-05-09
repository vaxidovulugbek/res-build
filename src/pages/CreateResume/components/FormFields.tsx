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
import { Title, Text } from "ui";
// import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { useTranslation } from "react-i18next";
import next from "assets/imgs/icons/next.svg";

export default function FormFields({ handleNextSlide }: { handleNextSlide: any }) {
	const width = useWindowSize();
	const { t } = useTranslation();

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
		// dispatch(ResInfo?.setResumeName(values.name));
	};

	const re = /^[^@]+@[^@]+$/;

	// const re =
	// 	/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	return (
		<div className="editor__form-content">
			<div className="min-[320px]:mb-3 xl:mb-5">
				<Title
					className="editor__title title-color capitalize"
					as="h1"
					text={t("Personal Details")}
				/>
				<Text
					className="text-gray"
					as="p"
					text={t("Get started with the basics: your name and contact information.")}
				/>
			</div>
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
								className="w-full capitalize"
								placeholder={t("name")}
								label={t("name")}
								component={Fields.InputField}
							/>
						</Col>
						<Col span={width < 480 ? 24 : 12}>
							<Field
								className="capitalize"
								type="text"
								id="Last_Name"
								name="Last_Name"
								label={t("lastname")}
								placeholder={t("lastname")}
								component={Fields.InputField}
							/>
						</Col>
						<Col span={width < 480 ? 24 : 12}>
							<Field
								className="capitalize"
								name="Job_Title"
								label={t("job_title")}
								placeholder={t("job_title")}
								component={Fields.InputField}
							/>
						</Col>
						<Col span={width < 480 ? 24 : 12}>
							<Field
								className="capitalize"
								name="Phone"
								label={t("phone")}
								placeholder={t("phone")}
								component={Fields.InputField}
							/>
						</Col>
						<Col span={width < 480 ? 24 : 12}>
							<Field
								className="capitalize"
								id="Email_Address"
								name="Email_Address"
								label={t("email_adress")}
								placeholder={t("email_adress")}
								type="email"
								component={Fields.InputField}
							/>
						</Col>
						<Col span={width < 480 ? 24 : 12}>
							<Field
								className="capitalize"
								name="Address"
								label={t("adress")}
								placeholder={t("adress")}
								component={Fields.InputField}
							/>
						</Col>
						<Col span={24}>
							<Field
								className="my-2 capitalize"
								name="chips"
								description={t("add skills")}
								component={Fields.TagInputAntd}
								label={t("add skills")}
							/>
						</Col>
						<SocialLinks />
						<Col span={24}>
							<Field
								className="my-2 min-h-24 capitalize"
								name="about"
								placeholder={t("resume_about")}
								component={Fields.TextAreaAntd}
								label={t("resume_about")}
							/>
						</Col>
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
								<p className="mb-1">next step</p>{" "}
								<img className="ms-2 w-6" src={next} alt="next icon" />
							</Button>
						</Col>
					</Row>
				</Form>
			</Formik>
		</div>
	);
}
