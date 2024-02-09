import React from "react";

interface SigninPageProps {
	onClose: () => void;
	onNext: () => void;
}
const SigninPage: React.FC<SigninPageProps> = ({ onClose, onNext }) => {
	return (
		<div>
			SignInPage <button onClick={onNext}>Next</button>
		</div>
	);
};

export default SigninPage;
