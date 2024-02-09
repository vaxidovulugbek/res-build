import React from "react";

interface LoginPageProps {
	onClose: () => void;
	onNext: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onClose, onNext }) => {
	return (
		<div>
			LoginPage <button onClick={onClose}>Close</button>
			<button onClick={onNext}>Next</button>
		</div>
	);
};

export default LoginPage;
