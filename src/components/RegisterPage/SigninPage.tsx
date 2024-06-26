import Fields from "components/Fields";
import { Field, Form, Formik } from "formik";
import React from "react";
import { Button, Text } from "ui";
import * as Yup from "yup";
import google from "assets/imgs/icons/modalGoogle.svg";
import facebook from "assets/imgs/icons/modalFacebook.svg";
import { SigninPageProps } from "types/interface";

import {
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

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

const SigninPage: React.FC<SigninPageProps> = ({
	onClose,
	onNext,
	closeSecondModal,
	isSecondModalOpen,
}) => {
	const { t } = useTranslation();
	return (
		<Modal onClose={closeSecondModal} isOpen={isSecondModalOpen} isCentered>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader fontSize="3xl">{t("Registration")}</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<div>
						<div className="mb-4">
							<Text
								as="p"
								className="text-sm"
								text=""
								children={
									<span>
										{t(
											"Уважаемый пользователь, если вы зарегистрированы, нажмите кнопку"
										)}{" "}
										<Button
											className="underline decoration-1 text-blue-600 capitalize"
											onClick={onNext}
											type="button"
											text={t("Вход !")}
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
										placeholder={t("name")}
										label={t("name")}
										component={Fields.InputField}
									/>
								</div>
								<div className="w-full mb-6">
									<Field
										type="text"
										id="email"
										name="email"
										className="w-full"
										placeholder={t("email_adress")}
										label={t("email_adress")}
										component={Fields.InputField}
									/>
								</div>
								<div className="w-full mb-6">
									<Field
										type="number"
										id="email_code"
										name="email_code"
										className="w-full"
										placeholder={t("email_code")}
										label={t("email_code")}
										component={Fields.InputField}
									/>
								</div>
								<Button
									variant="primary"
									className="w-full p-3 rounded-lg bg-primary text-white capitalize"
									type="submit"
									text={t("Войти")}
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
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};

export default SigninPage;
