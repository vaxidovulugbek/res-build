import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Fields from "components/Fields";
import { Text, Button } from "ui";
import { LoginPageProps } from "types/interface";

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

const LoginPage: React.FC<LoginPageProps> = ({
	onClose,
	onNext,
	isFirstModalOpen,
	closeFirstModal,
}) => {
	const { t } = useTranslation();
	return (
		<Modal onClose={closeFirstModal} isOpen={isFirstModalOpen} isCentered>
			{/* {overlay} */}
			<ModalOverlay />
			<ModalContent>
				<ModalHeader fontSize="3xl">{t("Login_in_accaunt")}</ModalHeader>
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
										Уважаемый пользователь, если вы не зарегистрированы, нажмите
										кнопку{" "}
										<Button
											className="underline decoration-1 text-blue-600"
											onClick={onNext}
											type="button"
											text="регистрации!"
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
									{/* <label htmlFor="name">Ism:</label> */}
									<Field
										type="text"
										id="name"
										name="name"
										className="w-full"
										placeholder="component input ssss"
										label="Ism:"
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
								<Button
									variant="primary"
									className="w-full p-3 rounded-lg bg-primary text-white shadow-xl"
									type="submit"
									text="Войти"
								/>
								<Button
									className="w-full my-5"
									onClick={onNext}
									type="button"
									text="У вас еще нет аккаунта?"
								/>
							</Form>
						</Formik>
					</div>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};

export default LoginPage;
