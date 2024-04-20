import React, { useEffect, useRef, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import type { InputRef } from "antd";
import { Flex, Input, Tag, theme, Tooltip } from "antd";
import { useDispatch } from "react-redux";
import { ResInfo } from "../../redux/actions";
import { Chips } from "types/interface";

const tagInputStyle: React.CSSProperties = {
	width: 84,
	height: 26,
	marginInlineEnd: 8,
	verticalAlign: "top",
};

const TagInputAntd: React.FC<Chips> = ({ chips, description, className, form, field }) => {
	const { token } = theme.useToken();
	const [tags, setTags] = useState<string[]>([]);
	const [inputVisible, setInputVisible] = useState(false);
	const [inputValue, setInputValue] = useState("");
	const [editInputIndex, setEditInputIndex] = useState(-1);
	const [editInputValue, setEditInputValue] = useState("");
	const inputRef = useRef<InputRef>(null);
	const editInputRef = useRef<InputRef>(null);

	useEffect(() => {
		if (inputVisible) {
			inputRef.current?.focus();
		}
	}, [inputVisible]);

	useEffect(() => {
		editInputRef.current?.focus();
	}, [editInputValue]);

	const handleClose = (removedTag: string) => {
		const newTags = tags.filter((tag) => tag !== removedTag);
		setTags(newTags);
	};

	const showInput = () => {
		setInputVisible(true);
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	const handleInputConfirm = () => {
		if (inputValue && !tags.includes(inputValue)) {
			setTags([...tags, inputValue]);
		}
		setInputVisible(false);
		setInputValue("");
	};

	const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditInputValue(e.target.value);
	};

	const handleEditInputConfirm = () => {
		const newTags = [...tags];
		newTags[editInputIndex] = editInputValue;
		setTags(newTags);
		setEditInputIndex(-1);
		setEditInputValue("");
	};

	const tagPlusStyle: React.CSSProperties = {
		height: 26,
		background: token.colorBgContainer,
		borderStyle: "dashed",
		display: "flex",
		alignItems: "center",
	};

	const dispatch = useDispatch();
	useEffect(() => {
		form.setFieldValue(field.name, tags);
		dispatch(ResInfo.setResumeSkills(form.values.chips));
	}, [tags, form.values]);
	return (
		<Flex className={className} gap="4px 0" wrap="wrap">
			{tags.map<React.ReactNode>((tag, index) => {
				if (editInputIndex === index) {
					return (
						<Input
							ref={editInputRef}
							key={tag}
							size="small"
							style={tagInputStyle}
							value={editInputValue}
							onChange={handleEditInputChange}
							onBlur={handleEditInputConfirm}
							onPressEnter={handleEditInputConfirm}
						/>
					);
				}
				const isLongTag = tag.length > 20;
				const tagElem = (
					<Tag
						className="flex items-center"
						key={tag}
						closable={index !== 0}
						style={{ userSelect: "none" }}
						onClose={() => handleClose(tag)}
					>
						<span
							onDoubleClick={(e) => {
								if (index !== 0) {
									setEditInputIndex(index);
									setEditInputValue(tag);
									e.preventDefault();
								}
							}}
						>
							{isLongTag ? `${tag.slice(0, 20)}...` : tag}
						</span>
					</Tag>
				);
				return isLongTag ? (
					<Tooltip className="flex items-center" title={tag} key={tag}>
						{tagElem}
					</Tooltip>
				) : (
					tagElem
				);
			})}
			{inputVisible ? (
				<Input
					ref={inputRef}
					type="text"
					size="small"
					style={tagInputStyle}
					value={inputValue}
					onChange={handleInputChange}
					onBlur={handleInputConfirm}
					onPressEnter={handleInputConfirm}
				/>
			) : (
				<Tag style={tagPlusStyle} icon={<PlusOutlined />} onClick={showInput}>
					{description}
				</Tag>
			)}
		</Flex>
	);
};

export default TagInputAntd;
