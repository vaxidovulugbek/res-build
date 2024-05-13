import React, { useEffect, useRef, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import type { InputRef } from "antd";
import { Input, Tag, theme } from "antd";
import { useDispatch } from "react-redux";
import { ResInfo } from "../../redux/actions";
import { Chips } from "types/interface";

const tagInputStyle: React.CSSProperties = {
	minWidth: 84,
	height: 28,
	marginInlineEnd: 8,
	verticalAlign: "top",
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
};

const TagInputAntd: React.FC<Chips> = ({ chips, description, className, form, field }) => {
	const { token } = theme.useToken();
	const [tags, setTags] = useState<string[]>([]);
	const [inputVisible, setInputVisible] = useState(false);
	const [inputValue, setInputValue] = useState("");
	const inputRef = useRef<InputRef>(null);

	useEffect(() => {
		if (inputVisible) {
			inputRef.current?.focus();
		}
	}, [inputVisible]);

	const handleClose = (removedTag: string) => {
		const newTags = tags.filter((tag) => tag !== removedTag);
		console.log(newTags);
		setTags(newTags);
	};

	const showInput = () => {
		setInputVisible(true);
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	const handleInputConfirm = () => {
		if (inputValue && tags.indexOf(inputValue) === -1) {
			setTags([...tags, inputValue]);
		}
		setInputVisible(false);
		setInputValue("");
	};

	const dispatch = useDispatch();
	useEffect(() => {
		form.setFieldValue(field.name, tags);
		dispatch(ResInfo.setResumeSkills(form.values.chips));
		// console.log(tags);
	}, [tags, form.values]);

	const forMap = (tag: string) => (
		<span key={tag} className="mb-4">
			<Tag
				closable
				style={tagInputStyle}
				onClose={(e) => {
					e.preventDefault();
					handleClose(tag);
				}}
			>
				{tag}
			</Tag>
		</span>
	);

	const tagChild = tags.map(forMap);

	const tagPlusStyle: React.CSSProperties = {
		background: token.colorBgContainer,
		borderStyle: "dashed",
		height: 28,
		display: "inline-flex",
		alignItems: "center",
	};

	return (
		<div>
			<div className="flex items-center flex-wrap">
				{tagChild}
				{/* </TweenOneGroup> */}
			</div>
			{inputVisible ? (
				<Input
					ref={inputRef}
					type="text"
					size="small"
					value={inputValue}
					style={tagPlusStyle}
					onChange={handleInputChange}
					onBlur={handleInputConfirm}
					onPressEnter={handleInputConfirm}
				/>
			) : (
				<Tag onClick={showInput} style={tagPlusStyle} className="capitalize">
					<PlusOutlined className="me-2" /> {description}
				</Tag>
			)}
		</div>
	);
};

export default TagInputAntd;
