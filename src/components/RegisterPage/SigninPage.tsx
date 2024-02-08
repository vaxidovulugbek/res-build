import React from "react";

interface SignInPageProps {
	onClose: () => void;
	onNext: () => void;
}

const SigninPage: React.FC<SignInPageProps> = ({ onClose, onNext }) => {
	return (
		<div>
			SignInPage <button onClick={onNext}>Next</button>
		</div>
	);
};

export default SigninPage;
