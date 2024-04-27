// import React, { useEffect, useRef, useState } from "react";
// import { PlusOutlined } from "@ant-design/icons";
// import type { InputRef } from "antd";
// import { Flex, Input, Tag, theme, Tooltip } from "antd";
// import { useDispatch } from "react-redux";
// import { ResInfo } from "../../redux/actions";
// import { Chips } from "types/interface";

// const tagInputStyle: React.CSSProperties = {
// 	width: 84,
// 	height: 26,
// 	marginInlineEnd: 8,
// 	verticalAlign: "top",
// };

// const TagInputAntd: React.FC<Chips> = ({ chips, description, className, form, field }) => {
// 	const { token } = theme.useToken();
// 	const [tags, setTags] = useState<string[]>([]);
// 	const [inputVisible, setInputVisible] = useState(false);
// 	const [inputValue, setInputValue] = useState("");
// 	const [editInputIndex, setEditInputIndex] = useState(-1);
// 	const [editInputValue, setEditInputValue] = useState("");
// 	const inputRef = useRef<InputRef>(null);
// 	const editInputRef = useRef<InputRef>(null);

// 	useEffect(() => {
// 		if (inputVisible) {
// 			inputRef.current?.focus();
// 		}
// 	}, [inputVisible]);

// 	useEffect(() => {
// 		editInputRef.current?.focus();
// 	}, [editInputValue]);

// 	// const handleClose = (removedTag: string) => {
// 	// 	const newTags = tags.filter((tag) => tag !== removedTag);
// 	// 	setTags(newTags);
// 	// };
// 	const handleClose = (removedTag: string) => {
// 		const newTags = tags.filter((tag) => tag !== removedTag);
// 		setTags(newTags);
// 		if (removedTag === tags[0]) {
// 			setInputVisible(true); // Birinchi elementni o'chirishdan keyin, inputni ko'rsatish
// 		}
// 	};

// 	const showInput = () => {
// 		setInputVisible(true);
// 	};

// 	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setInputValue(e.target.value);
// 	};

// 	const handleInputConfirm = () => {
// 		if (inputValue && !tags.includes(inputValue)) {
// 			setTags([...tags, inputValue]);
// 		}
// 		setInputVisible(false);
// 		setInputValue("");
// 	};

// 	const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditInputValue(e.target.value);
// 	};

// 	const handleEditInputConfirm = () => {
// 		const newTags = [...tags];
// 		newTags[editInputIndex] = editInputValue;
// 		setTags(newTags);
// 		setEditInputIndex(-1);
// 		setEditInputValue("");
// 	};

// const tagPlusStyle: React.CSSProperties = {
// 	height: 26,
// 	background: token.colorBgContainer,
// 	borderStyle: "dashed",
// 	display: "flex",
// 	alignItems: "center",
// };

// const dispatch = useDispatch();
// useEffect(() => {
// 	form.setFieldValue(field.name, tags);
// 	dispatch(ResInfo.setResumeSkills(form.values.chips));
// }, [tags, form.values]);
// 	return (
// 		<Flex className={className} gap="4px 0" wrap="wrap">
// 			{tags.map<React.ReactNode>((tag, index) => {
// 				if (editInputIndex === index) {
// 					return (
// 						<Input
// 							ref={editInputRef}
// 							key={tag}
// 							size="small"
// 							style={tagInputStyle}
// 							value={editInputValue}
// 							onChange={handleEditInputChange}
// 							onBlur={handleEditInputConfirm}
// 							onPressEnter={handleEditInputConfirm}
// 						/>
// 					);
// 				}
// 				const isLongTag = tag.length > 20;
// 				const tagElem = (
// 					<Tag
// 						className="flex items-center"
// 						key={tag}
// 						closable={index !== 0}
// 						style={{ userSelect: "none" }}
// 						onClose={() => handleClose(tag)}
// 					>
// 						<span
// 							onDoubleClick={(e) => {
// 								if (index !== 0) {
// 									setEditInputIndex(index);
// 									setEditInputValue(tag);
// 									e.preventDefault();
// 								}
// 							}}
// 						>
// 							{isLongTag ? `${tag.slice(0, 20)}...` : tag}
// 						</span>
// 					</Tag>
// 				);
// 				return isLongTag ? (
// 					<Tooltip className="flex items-center" title={tag} key={tag}>
// 						{tagElem}
// 					</Tooltip>
// 				) : (
// 					tagElem
// 				);
// 			})}
// 			{inputVisible ? (
// 				<Input
// 					ref={inputRef}
// 					type="text"
// 					size="small"
// 					style={tagInputStyle}
// 					value={inputValue}
// 					onChange={handleInputChange}
// 					onBlur={handleInputConfirm}
// 					onPressEnter={handleInputConfirm}
// 				/>
// 			) : (
// 				<Tag style={tagPlusStyle} icon={<PlusOutlined />} onClick={showInput}>
// 					{description}
// 				</Tag>
// 			)}
// 		</Flex>
// 	);
// };

// export default TagInputAntd;

import React, { useEffect, useRef, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import type { InputRef } from "antd";
import { Input, Tag, theme } from "antd";
// import { TweenOneGroup } from "rc-tween-one";
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
		console.log(tags);
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
				{/* <TweenOneGroup
					appear={false}
					enter={{ scale: 0.8, opacity: 0, type: "from", duration: 100 }}
					leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
					onEnd={(e: any) => {
						if (e.type === "appear" || e.type === "enter") {
							(e.target as any).style = "display: inline-block";
						}
					}}
				> */}
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
