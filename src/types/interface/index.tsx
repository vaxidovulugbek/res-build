import { ReactNode } from "react";

// signin and signup interfaces
export interface SigninPageProps {
	onClose: () => void;
	onNext: () => void;
	closeSecondModal: () => void;
	isSecondModalOpen: any;
}
export interface LoginPageProps {
	onClose: () => void;
	onNext: () => void;
	closeFirstModal: () => void;
	isFirstModalOpen: any;
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
	isOpen?: boolean;
	onClose: () => void;
	width?: number;
	title?: string;
	children?: React.ReactNode;
	className?: string;
	placement?: any;
	closable?: boolean;
}

export interface ModalResumesProps {
	modal: { open: string };
	setModal: React.Dispatch<React.SetStateAction<any>>;
	placement?: any;
}

export interface TextEditorProps {
	form?: any;
	field?: any;
	label?: string;
	placeholder?: string;
}

export interface Card {
	id: number;
	title: string;
	category: string;
	img: any;
}

export interface CardProps {
	id: string;
	title: string;
	text: string;
}

export interface componentExpirence {
	id: any;
	value: any;
}

export interface componentEducation {
	id: any;
	value: any;
}

export interface saveRedux {
	id: any;
	value: any;
}

export interface Field {
	name: string;
	url?: string;
}

export interface FooterListProps {
	title: string;
	fields: Field[];
	className?: string;
}
