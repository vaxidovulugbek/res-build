import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Input } from "antd";
import Fields from "components/Fields";

interface LoginPageProps {
	onClose: () => void;
	onNext: () => void;
}

// Yup bilan tasdiqlash sxemasini aniqlang
const validationSchema = Yup.object({
	name: Yup.string().required("Ism majburiy"),
	email: Yup.string().email("To'g'ri email manzili kiriting").required("Email majburiy"),
});

// Boshlang'ich form qiymatlari
const initialValues = {
	name: "",
	email: "",
};

// Formni yuborish amaliyoti
const onSubmit = (values: any) => {
	console.log("Form yuborildi:", values);
};

const LoginPage: React.FC<LoginPageProps> = ({ onClose, onNext }) => {
	return (
		<div>
			LoginPage <button onClick={onClose}>Close</button>
			<button onClick={onNext}>Next</button>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
			>
				<Form>
					<div>
						<div className="flex items-center">
							{/* <label htmlFor="name">Ism:</label> */}
							<Field
								type="text"
								id="name"
								name="name"
								className="w-full"
								placeholder="component input ssss"
								label="Ismku:"
								component={Fields.InputField}
								// component={({ field, form, meta }: any) => (
								// 	// <Input
								// 	// className="ms-2"
								// 	// type="text"
								// 	// id={field.name}
								// 	// name={field.name}
								// 	// placeholder="component input ssss"
								// 	// value={field.value}
								// 	// onChange={field.onChange}
								// 	// onBlur={field.onBlur}
								// 	// />
								// 	<input
								// 		className="ms-2"
								// 		type="text"
								// 		id={field.name}
								// 		// name={field.name}
								// 		// placeholder="component input ssss"
								// 		// value={field.value}
								// 		onChange={field.onChange}
								// 		onBlur={field.onBlur}
								// 	/>
								// )}
							/>
						</div>
						{/* <ErrorMessage name="name" component="div" /> */}
					</div>

					<div>
						<label htmlFor="email">Email:</label>
						<Field type="email" id="email" name="email" />
						<ErrorMessage name="email" component="div" />
					</div>

					<div>
						<button type="submit">Yuborish</button>
					</div>
				</Form>
			</Formik>
		</div>
	);
};

export default LoginPage;
