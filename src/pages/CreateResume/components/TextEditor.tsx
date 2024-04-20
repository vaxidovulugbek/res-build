import React, { useEffect, useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { ResInfo } from "../../../redux/actions";
import draftToHtml from "draftjs-to-html";
import { TextEditorProps } from "types/interface";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useDispatch } from "react-redux";
import useStore from "../../../zustand/store";

const TextEditor: React.FC<TextEditorProps> = ({ form, field, label, placeholder }) => {
	const { countExpirence } = useStore();
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

	useEffect(() => {
		for (let i = 0; i < countExpirence.length; i++) {
			experienceAbout.push(form.values[`expirienceEditor_${i}`]);
			educationAbout.push(form.values[`educationEditor_${i}`]);
			if (field.name === `expirienceEditor_${i}`) {
				dispatch(ResInfo.setResumeAboutExpirience([...experienceAbout]));
			}
			if (field.name === `educationEditor_${i}`) {
				// console.log(educationAbout);
				dispatch(ResInfo.setResumeAboutEducation([...educationAbout]));
			}
		}
		// console.log(form.values);
		// console.log(experienceAbout);
	}, [form.values, field.name, dispatch]);

	// useEffect(() => {
	// 	if (field.name === "educationEditor") {
	// 		dispatch(ResInfo.setResumeAboutEducation(form.values.educationEditor));
	// 	}
	// 	// console.log(form.values);
	// }, [form.values.educationEditor, field.name, dispatch]);

	return (
		<div className="editor__form-texteditor relative mt-2">
			<label className="capitalize text-xs">{label}</label>
			<div className="editor__form-texteditor-content">
				<Editor
					editorState={editorStates[field.name] || EditorState.createEmpty()}
					toolbarClassName="toolbarClassName"
					wrapperClassName="wrapperClassName"
					editorClassName="editorClassName px-3"
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
