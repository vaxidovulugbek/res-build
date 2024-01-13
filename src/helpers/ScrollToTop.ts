import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollTop: React.FC = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "instant" as ScrollBehavior,
		});
	}, [pathname]);

	return null; // Null qaytarish zarur, chunki bu komponent faqat efektlar uchun ishlatiladi
};
