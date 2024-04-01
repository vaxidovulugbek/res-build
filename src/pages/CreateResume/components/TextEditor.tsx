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
