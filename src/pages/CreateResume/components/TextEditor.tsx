// import React, { useEffect, useRef } from "react";
// import Quill from "quill";
// import "quill/dist/quill.snow.css";

// const TextEditor: React.FC = () => {
// 	const editorRef = useRef<HTMLDivElement>(null);

// 	useEffect(() => {
// 		if (editorRef.current) {
// 			const options = {
// 				placeholder: "Izohni yozing...",
// 				modules: {
// 					toolbar: [
// 						["bold", "italic", "underline", "strike"], // Birinchi toolbar
// 						["blockquote", "code-block"], // Ikkinchi toolbar
// 						[{ list: "ordered" }, { list: "bullet" }],
// 						[{ script: "sub" }, { script: "super" }],
// 						[{ indent: "-1" }, { indent: "+1" }],
// 						[{ direction: "rtl" }],
// 						[{ size: ["small", false, "large", "huge"] }],
// 						[{ color: [] }, { background: [] }],
// 						[{ font: [] }],
// 						[{ align: [] }],
// 						["clean"],
// 						["link", "image", "video"],
// 					],
// 				},
// 				theme: "snow",
// 			};

// 			new Quill(editorRef.current, options);
// 		}
// 	}, []);

// 	return <div ref={editorRef}></div>;
// };

// export default TextEditor;
// import React, { useEffect, useRef } from "react";
// import { useFormikContext } from "formik";
// import Quill from "quill";
// import "quill/dist/quill.snow.css";
// import { useDispatch } from "react-redux";
// import { ResInfo } from "../../../redux/actions";
// import { useSelectorRedux } from "hooks";

// const TextEditor: React.FC<{ name: string; field: any; form: any }> = ({ name, field, form }) => {
// 	const editorRef = useRef<HTMLDivElement>(null);
// 	const { setFieldValue } = useFormikContext();
// 	const dispatch = useDispatch();
// 	useEffect(() => {
// 		if (editorRef.current) {
// 			const options = {
// 				// placeholder: "Izohni yozi",
// 				modules: {
// 					toolbar: [
// 						["bold", "italic", "underline", "strike"],
// 						["blockquote", "code-block"],
// 						[{ list: "ordered" }, { list: "bullet" }],
// 						[{ script: "sub" }, { script: "super" }],
// 						[{ indent: "-1" }, { indent: "+1" }],
// 						[{ direction: "rtl" }],
// 						[{ size: ["small", false, "large", "huge"] }],
// 						[{ color: [] }, { background: [] }],
// 						[{ font: [] }],
// 						[{ align: [] }],
// 						["clean"],
// 						["link", "image", "video"],
// 					],
// 				},
// 				theme: "snow",
// 			};

// 			const quill = new Quill(editorRef.current, options);

// 			quill.on("text-change", () => {
// 				const html = editorRef.current?.innerHTML;
// 				if (html) {
// 					setFieldValue(field?.name, html);
// 				}
// 			});
// 		}
// 	}, [field.name, setFieldValue]);
// 	const { resumeAboutExpirience } = useSelectorRedux();

// 	useEffect(() => {
// 		dispatch(ResInfo.setResumeAboutExpirience(form.values.expirienceEditor));
// 		const html = editorRef.current?.innerHTML;
// 		if (html) {
// 			form.setFieldValue(field?.name, html);
// 		}
// 		console.log(form.values, resumeAboutExpirience);
// 	}, [field.name, setFieldValue, form.values, resumeAboutExpirience]);

// 	return <div ref={editorRef}></div>;
// };

// export default TextEditor;

// import React, { useEffect, useRef } from "react";
// import { useFormikContext } from "formik";
// import Quill from "quill";
// import "quill/dist/quill.snow.css";
// import { useDispatch } from "react-redux";
// import { ResInfo } from "../../../redux/actions";
// import { useSelectorRedux } from "hooks";
// import ReactQuill from "react-quill";
// import "quill/dist/quill.snow.css";

// const TextEditor: React.FC<{ name: string; field: any; form: any }> = ({ name, field, form }) => {
// 	const editorRef = useRef<HTMLDivElement>(null);
// 	const { setFieldValue } = useFormikContext();
// 	const dispatch = useDispatch();
// 	const { resumeAboutExpirience } = useSelectorRedux();
// 	useEffect(() => {
// 		dispatch(ResInfo.setResumeAboutExpirience(form.values.expirienceEditor));
// 		// console.log(field, resumeAboutExpirience);
// 	}, [field.value]);

// 	const modules = {
// 		toolbar: [
// 			[{ header: [1, 2, false] }],
// 			["bold", "italic", "underline"],
// 			[{ list: "ordered" }, { list: "bullet" }],
// 			[{ script: "sub" }, { script: "super" }],
// 			[{ indent: "-1" }, { indent: "+1" }],
// 			[{ direction: "rtl" }],
// 			[{ size: ["small", false, "large", "huge"] }], // Mavjud font o'lchamlari
// 			["clean"],
// 		],
// 	};

// 	return (
// 		<ReactQuill
// 			theme="snow"
// 			className="react-quill"
// 			value={field.value}
// 			modules={modules}
// 			onChange={(value: any) => form.setFieldValue(field.name, value)}
// 			// onBlur={() => form.setFieldTouched(field.name, true)}
// 		/>
// 	);
// };

// export default TextEditor;

// import React, { Component } from "react";
// import { Editor } from "react-draft-wysiwyg";
// import { EditorState, convertToRaw } from "draft-js";

// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import draftToHtml from "draftjs-to-html";

// export default class TextEditor extends Component {
// 	state = {
// 		editorState: EditorState.createEmpty(),
// 	};

// 	onEditorStateChange = (editorState: any) => {
// 		this.setState({
// 			editorState,
// 		});
// 	};

// 	render() {
// 		const { editorState } = this.state;
// 		const { form, field } = this.props;
// 		console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
// 		form.setFieldValue(field.name, draftToHtml(convertToRaw(editorState.getCurrentContent())));
// 		return (
// 			<div>
// 				<Editor
// 					editorState={editorState}
// 					toolbarClassName="toolbarClassName"
// 					wrapperClassName="wrapperClassName"
// 					editorClassName="editorClassName"
// 					onEditorStateChange={this.onEditorStateChange}
// 				/>
// 				{/* <textarea
// 					disabled
// 					value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
// 				></textarea> */}
// 			</div>
// 		);
// 	}
// }

import React, { useEffect, useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { useDispatch } from "react-redux";
import { ResInfo } from "../../../redux/actions";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import { useSelectorRedux } from "hooks";

interface TextEditorProps {
	form: any;
	field: any;
	label?: string;
	placeholder?: string;
}

const TextEditor: React.FC<TextEditorProps> = ({ form, field, label, placeholder }) => {
	const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
	const dispatch = useDispatch();
	const { resumeAboutExpirience } = useSelectorRedux();

	const onEditorStateChange = (editorState: EditorState) => {
		setEditorState(editorState);
		form.setFieldValue(field.name, draftToHtml(convertToRaw(editorState.getCurrentContent())));
		dispatch(
			ResInfo.setResumeAboutExpirience(
				draftToHtml(convertToRaw(editorState.getCurrentContent()))
			)
		);
		// console.log(
		// 	draftToHtml(convertToRaw(editorState.getCurrentContent())),
		// 	resumeAboutExpirience,
		// 	form.values.name
		// );
	};

	useEffect(() => {
		dispatch(
			ResInfo.setResumeAboutExpirience(
				draftToHtml(convertToRaw(editorState.getCurrentContent()))
			)
		);
	}, [draftToHtml(convertToRaw(editorState.getCurrentContent()))]);

	return (
		<div className="editor__form-texteditor relative mt-2">
			<label className="capitalize text-xs">{label}</label>
			<div className="editor__form-texteditor-content">
				<Editor
					editorState={editorState}
					toolbarClassName="toolbarClassName"
					wrapperClassName="wrapperClassName"
					editorClassName="editorClassName px-3"
					onEditorStateChange={onEditorStateChange}
				/>
				{!editorState.getCurrentContent().hasText() && (
					<div className="absolute bottom-4 px-3" style={{ color: "#aaa" }}>
						{placeholder}
					</div>
				)}
			</div>
		</div>
	);
};

export default TextEditor;
