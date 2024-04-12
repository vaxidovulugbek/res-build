import Fields from "components/Fields";
import { Field, Form, Formik } from "formik";
import React from "react";
import { Button, Text } from "ui";
import * as Yup from "yup";
import google from "assets/imgs/icons/modalGoogle.svg";
import facebook from "assets/imgs/icons/modalFacebook.svg";
import { SigninPageProps } from "types/interface";

// Yup bilan tasdiqlash sxemasini aniqlang
const validationSchema = Yup.object({
	name: Yup.string().required("Ism majburiy"),
	email_code: Yup.number().required("Emailga yuborilgan codeni kiriting"),
	email: Yup.string().email("To'g'ri email manzili kiriting").required("Email majburiy"),
});

// Boshlang'ich form qiymatlari
const initialValues = {
	name: "",
	email: "",
	email_code: "",
};

// Formni yuborish amaliyoti
const onSubmit = (values: any) => {
	console.log("Form yuborildi:", values);
};

const SigninPage: React.FC<SigninPageProps> = ({ onClose, onNext }) => {
	return (
		<div>
			<div className="mb-4">
				<Text
					as="p"
					className="text-sm"
					text=""
					children={
						<span>
							Уважаемый пользователь, если вы зарегистрированы, нажмите кнопку{" "}
							<Button
								className="underline decoration-1 text-blue-600"
								onClick={onNext}
								type="button"
								text="Вход !"
							/>
						</span>
					}
				/>
			</div>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
			>
				<Form>
					<div className="w-full mb-4">
						<Field
							type="text"
							id="name"
							name="name"
							className="w-full"
							placeholder="component input ssss"
							label="Ism:"
							component={Fields.InputField}
						/>
					</div>
					<div className="w-full mb-6">
						<Field
							type="text"
							id="email"
							name="email"
							className="w-full"
							placeholder="email"
							label="Email:"
							component={Fields.InputField}
						/>
					</div>
					<div className="w-full mb-6">
						<Field
							type="number"
							id="email_code"
							name="email_code"
							className="w-full"
							placeholder="email code"
							label="Email-code:"
							component={Fields.InputField}
						/>
					</div>
					<Button
						variant="primary"
						className="w-full p-3 rounded-lg bg-primary text-white"
						type="submit"
						text="Войти"
					/>
					<div className="flex items-center my-4 justify-center">
						<a href="#" className="me-2">
							<img src={google} alt="google icon" />
						</a>
						<a href="#" className="ms-2">
							<img src={facebook} alt="facebook icon" />
						</a>
					</div>
				</Form>
			</Formik>
		</div>
	);
};

export default SigninPage;
