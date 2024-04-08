import { Button, Col, Row } from "antd";
import cn from "classnames";
import Fields from "components/Fields";
import { Field, Form, Formik } from "formik";
import { useWindowSize } from "hooks";
import { useDispatch } from "react-redux";
import { Text, Title } from "ui";
import * as Yup from "yup";
import useStore from "../../../zustand/store";
import TextEditor from "./TextEditor";

export default function FormFields3({ handlePrevSlide }: { handlePrevSlide: any }) {
	const { changeStatusSlider } = useStore();

	const width = useWindowSize();

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
								id="experiencePosition"
								name="experiencePosition"
								className="w-full"
								placeholder="Position Title"
								label="Position Title"
								component={Fields.InputField}
							/>
						</Col>
						<Col span={width < 480 ? 24 : 12}>
							<Field
								type="text"
								id="experienceCompany"
								name="experienceCompany"
								label="Company Name"
								placeholder="Company Name"
								component={Fields.InputField}
							/>
						</Col>
						<Col span={width < 480 ? 24 : 12}>
							<Field
								name="experienceStartDate"
								type="date"
								label="Start Date"
								placeholder="Start Date"
								component={Fields.InputField}
							/>
						</Col>
						<Col span={width < 480 ? 24 : 12}>
							<Field
								name="experienceEndDate"
								type="date"
								label="End Date"
								placeholder="End Date"
								component={Fields.InputField}
							/>
						</Col>
						<Col span={24}>
							<Field
								name="expirienceEditor"
								label="Work Summary"
								placeholder="Your placeholder text here..."
								component={TextEditor}
							/>
						</Col>
						<Col span={24} className="modal-footer">
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
		</div>
	);
}
