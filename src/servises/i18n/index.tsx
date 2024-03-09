import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import transUzb from "./uz.json";
import transRus from "./ru.json";
// import transEng from "./en.json";

const resources = {
	// en: {
	// 	translation: transEng,
	// },
	uz: {
		translation: transUzb,
	},
	ru: {
		translation: transRus,
	},
};

i18n.use(initReactI18next).init({
	resources,
	lng: "uz",
	fallbackLng: "ru",
	// fallbackLng: "en",

	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
