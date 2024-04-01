// import { EditorState } from "draft-js";
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import React, { forwardRef, useEffect, useLayoutEffect, useRef } from "react";
// import Quill from "quill";

// interface EditorProps {
// 	readOnly?: boolean;
// 	defaultValue?: any;
// 	onTextChange?: (...args: any[]) => void;
// 	onSelectionChange?: (...args: any[]) => void;
// }

// const TextEditor = forwardRef<HTMLDivElement, EditorProps>(
// 	({ readOnly = false, defaultValue, onTextChange, onSelectionChange }, ref) => {
// 		const containerRef = useRef<HTMLDivElement>(null);
// 		const defaultValueRef = useRef<any>(defaultValue);
// 		const onTextChangeRef = useRef<typeof onTextChange>(onTextChange);
// 		const onSelectionChangeRef = useRef<typeof onSelectionChange>(onSelectionChange);

// 		useEffect(() => {
// 			onTextChangeRef.current = onTextChange;
// 			onSelectionChangeRef.current = onSelectionChange;
// 		});

// 		useEffect(() => {
// 			const container = containerRef.current;
// 			if (!container) return;

// 			const editorContainer = container.appendChild(
// 				container.ownerDocument.createElement("div")
// 			);

// 			const quill = new Quill(editorContainer, {
// 				theme: "snow",
// 			});

// 			ref.current = quill;

// 			if (defaultValueRef.current) {
// 				quill.setContents(defaultValueRef.current);
// 			}

// 			quill.on("text-change", (...args: any[]) => {
// 				onTextChangeRef.current?.(...args);
// 			});

// 			quill.on("selection-change", (...args: any[]) => {
// 				onSelectionChangeRef.current?.(...args);
// 			});

// 			return () => {
// 				ref.current = null;
// 				container.innerHTML = "";
// 			};
// 		}, [ref, defaultValueRef]);

// 		return <div ref={containerRef}></div>;
// 	}
// );

// TextEditor.displayName = "TextEditor";

// export default TextEditor;

import React, { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

const TextEditor: React.FC = () => {
	const editorRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (editorRef.current) {
			const options = {
				placeholder: "Izohni yozing...",
				modules: {
					toolbar: [
						["bold", "italic", "underline", "strike"], // Birinchi toolbar
						["blockquote", "code-block"], // Ikkinchi toolbar
						[{ list: "ordered" }, { list: "bullet" }],
						[{ script: "sub" }, { script: "super" }],
						[{ indent: "-1" }, { indent: "+1" }],
						[{ direction: "rtl" }],
						[{ size: ["small", false, "large", "huge"] }],
						[{ color: [] }, { background: [] }],
						[{ font: [] }],
						[{ align: [] }],
						["clean"],
						["link", "image", "video"],
					],
				},
				theme: "snow",
			};

			new Quill(editorRef.current, options);
		}
	}, []);

	return <div ref={editorRef}></div>;
};

export default TextEditor;
