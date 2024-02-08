import React from "react";

interface LoginPageProps {
	onClose: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onClose }) => {
	return (
		<div>
			LoginPage <button onClick={onClose}>Close</button>
		</div>
	);
};

export default LoginPage;
