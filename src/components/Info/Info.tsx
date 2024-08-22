import React from "react";
import { useTranslation } from "react-i18next";
import { Title } from "ui/index";

const Info: React.FC = () => {
	const { t } = useTranslation();
	const s = [
		{
			title: "Rezyume formasini yaratuvchisi ishga joylashishga qanday yordam berishi mumkin?",
		},
	];
	return (
		<section>
			<div className="container-box">
				<Title
					as="h3"
					weight="medium"
					text="Rezyume formasini yaratuvchisi ishga joylashishga qanday yordam berishi mumkin?"
				/>
			</div>
		</section>
	);
};

export default Info;
