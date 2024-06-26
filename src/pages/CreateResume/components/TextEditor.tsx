import React, { useEffect, useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { ResInfo } from "../../../redux/actions";
import draftToHtml from "draftjs-to-html";
import { TextEditorProps } from "types/interface";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useDispatch } from "react-redux";
import useStore from "../../../zustand/store";
import { isArray } from "lodash";
import { useWindowSize } from "hooks";

const TextEditor: React.FC<TextEditorProps> = ({ form, field, label, placeholder }) => {
	const { countExpirence, countEducation } = useStore();
	const width = useWindowSize();
	const dispatch = useDispatch();
	const [editorStates, setEditorStates] = useState<{ [key: string]: EditorState }>({});

	const onEditorStateChange = (editorState: EditorState, fieldName: string) => {
		const newEditorStates = { ...editorStates, [fieldName]: editorState };
		setEditorStates(newEditorStates);
		const htmlContent = draftToHtml(convertToRaw(editorState.getCurrentContent()));
		form.setFieldValue(fieldName, htmlContent);
	};

	const experienceAbout: any[] = [];
	const educationAbout: any[] = [];
	let maxId = -1;
	if (isArray(countExpirence)) {
		maxId = countExpirence.reduce((max, item) => (item.id > max ? item.id : max), -1);
	}
	let maxIdEducation = -1;
	if (isArray(countEducation)) {
		maxIdEducation = countEducation.reduce((max, item) => (item.id > max ? item.id : max), -1);
	}
	useEffect(() => {
		for (let i = 0; i < maxId + 1; i++) {
			const Index = countExpirence.findIndex((item: any) => item.id === i);
			// experienceAbout.push(form.values[`expirienceEditor_${i}`]);
			// educationAbout.push(form.values[`educationEditor_${i}`]);
			if (Index !== -1) {
				experienceAbout.push(form.values[`expirienceEditor_${countExpirence[Index]?.id}`]);
			} else {
				experienceAbout.push(undefined);
			}

			if (field.name === `expirienceEditor_${i}`) {
				dispatch(ResInfo.setResumeAboutExpirience([...experienceAbout]));
			}
		}
		for (let i = 0; i < maxIdEducation + 1; i++) {
			const IndexEducation = countEducation?.findIndex((item: any) => item.id === i);
			if (IndexEducation !== -1) {
				educationAbout.push(
					form.values[`educationEditor_${countEducation[IndexEducation]?.id}`]
				);
			} else {
				educationAbout.push(undefined);
			}
			if (field.name === `educationEditor_${i}`) {
				dispatch(ResInfo.setResumeAboutEducation([...educationAbout]));
			}
		}
		dispatch(ResInfo.setResumeInterests(form.values.interests));
		dispatch(ResInfo.setResumeVolunteeringAbout(form.values.volunteering));
	}, [form.values, field.name, dispatch]);

	return (
		<div className="editor__form-texteditor relative">
			<label className="capitalize text-xs">{label}</label>
			<div className="editor__form-texteditor-content">
				<Editor
					editorState={editorStates[field.name] || EditorState.createEmpty()}
					toolbarClassName="toolbarClassName"
					wrapperClassName="wrapperClassName"
					editorClassName="editorClassName px-3"
					toolbar={
						width < 480
							? {
									options: ["inline", "fontSize", "fontFamily"], // fontSize qismi qo'shilgan
									inline: {
										options: ["bold", "italic", "underline", "strikethrough"],
										inDropdown: false,
										className: undefined,
										component: undefined,
										dropdownClassName: undefined,
									},
									fontSize: {
										// fontSize bo'limi
										icon: <i className="fas fa-text-height" />, // sizning kerakli ikon
										className: undefined,
										component: undefined,
										dropdownClassName: undefined,
										options: [8, 9, 10, 11, 12, 14, 16, 18], // font o'lcham variantlari
										title: "Font Size", // toolbar da chiqariladigan sarlavha
									},
									fontFamily: {
										// fontFamily bo'limi
										options: [
											"Arial",
											"Georgia",
											"Impact",
											"Tahoma",
											"Times New Roman",
											"Verdana",
										],
										className: undefined,
										component: undefined,
										dropdownClassName: undefined,
										title: "Font Family", // toolbar da chiqariladigan sarlavha
									},
								}
							: undefined
					}
					onEditorStateChange={(editorState) =>
						onEditorStateChange(editorState, field.name)
					}
				/>
				{!editorStates[field.name]?.getCurrentContent().hasText() && (
					<div className="absolute bottom-4 px-3" style={{ color: "#aaa" }}>
						{placeholder}
					</div>
				)}
			</div>
		</div>
	);
};

export default TextEditor;
