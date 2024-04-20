import { ReactNode } from "react";

// signin and signup interfaces
export interface SigninPageProps {
	onClose: () => void;
	onNext: () => void;
}
export interface LoginPageProps {
	onClose: () => void;
	onNext: () => void;
}
//

export interface Chips {
	chips: any;
	description: string;
	className: string;
	form: any;
	field: any;
}

export interface AccordionProps {
	title: string;
	answer: string;
}

export interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	width?: number;
	title?: string;
	children?: React.ReactNode;
	className?: string;
	placement?: any;
}

export interface ModalResumesProps {
	modal: { open: string };
	setModal: React.Dispatch<React.SetStateAction<any>>;
	placement?: any;
}

export interface TextEditorProps {
	form: any;
	field: any;
	label?: string;
	placeholder?: string;
}

export interface Card {
	id: number;
	title: string;
	category: string;
	img: any;
}

export interface componentExpirence {
	id: any;
	value: any;
}

export interface componentEducation {
	id: any;
	value: any;
}
