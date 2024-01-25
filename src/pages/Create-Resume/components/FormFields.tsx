import { Button, Col, Flex, Row } from "antd";
import Fields from "components/Fields";
import { Field, Formik } from "formik";
import { get } from "lodash";
import { useEffect, useState } from "react";
import * as Yup from "yup";

export default function FormFields() {
	const [name, setName] = useState(null);
	const [surName, setSurName] = useState(null);
	// useEffect(() => {
	// 	console.log(name);
	// 	console.log(surName);
	// }, [name, surName]);

	const validationSchema = Yup.object().shape({
		Email_Address: Yup.string()
			.email("Invalid email address")
			.matches(/\b[A-Za-z0-9._%+-]+@gmail\.com\b/, "Please enter a valid Gmail address"),
		// Boshqa maydonlarga validatsiya qoidalarni ham qo'shishingiz mumkin
		// Masalan:
		// First_Name: Yup.string().required('Required'),
		// Last_Name: Yup.string().required('Required'),
		// ...
	});

	return (
		<Formik
			initialValues={{
				First_Name: "",
				Last_Name: "",
				Email_Address: "",
			}}
			validationSchema={validationSchema}
			onSubmit={(values, actions) => {
				// Sizning formangizni yuborish loyixasi
				// console.log(validationSchema);
				// console.log(values);
				// console.log(actions);
			}}
		>
			{({ handleSubmit, errors, touched }) => (
				<form onSubmit={handleSubmit}>
					<Row gutter={[16, 16]}>
						<Col span={12}>
							<Field
								errors={errors}
								touched={touched}
								name="First_Name"
								label="First Name"
								placeholder="First Name"
								component={Fields.InputField}
								onChange={setName}
							/>
						</Col>
						<Col span={12}>
							<Field
								name="Last_Name"
								label="Last Name"
								placeholder="Last Name"
								component={Fields.InputField}
								onChange={setSurName}
							/>
						</Col>
						<Col span={12}>
							<Field
								name="Job_Title"
								label="Job Title"
								placeholder="Job Title"
								component={Fields.InputField}
							/>
						</Col>
						<Col span={12}>
							<Field
								name="Phone"
								label="Phone"
								placeholder="Phone"
								component={Fields.InputField}
							/>
						</Col>
						<Col span={12}>
							<Field
								errors={errors}
								touched={touched}
								name="Email_Address"
								label="Email Address"
								placeholder="Email Address"
								type="email"
								component={Fields.InputField}
							/>
						</Col>
						<Col span={12}>
							<Field
								name="Address"
								label="Address"
								placeholder="Address"
								component={Fields.InputField}
							/>
						</Col>
						<Col span={24} className="modal-footer">
							<Button
								style={{ background: "orange", borderColor: "orange" }}
								loading={false}
								htmlType="submit"
								type="primary"
								formAction="submit"
								formTarget="category"
							>
								Создать
							</Button>
						</Col>
					</Row>
				</form>
			)}
		</Formik>
	);
}
