import React, { useState } from "react";
import res1 from "assets/imgs/resume_templates/res1.jpg";
import res3 from "assets/imgs/resume_templates/res3.jpg";
import res5 from "assets/imgs/resume_templates/res5.jpg";
import res4 from "assets/imgs/resume_templates/res4.jpg";
import res2 from "assets/imgs/resume_templates/res2.jpg";
import res6 from "assets/imgs/resume_templates/res6.jpg";
import { Button } from "ui/Button/Button";
import RoutesPath from "helpers/RoutesPath";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ResTamplate } from "../../../redux/actions";
import cn from "classnames";
import { Card } from "types/interface";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

const FilteredCards: React.FC = () => {
	const { t } = useTranslation();
	const initialCards: Card[] = [
		{ id: 1, title: "Card 1", category: `${t("All")}`, img: res1 },
		{ id: 2, title: "Card 2", category: `${t("about")}`, img: res2 },
		{ id: 3, title: "Card 3", category: `${t("Recommend")}`, img: res3 },
		{ id: 4, title: "Card 3wefwe", category: `${t("Recommend")}`, img: res4 },
		{ id: 5, title: "Card 3wkjenrkwejrnw", category: `${t("Recommend")}`, img: res5 },
		{ id: 6, title: "Card 4", category: `${t("about")}`, img: res6 },
		// Boshqa cardlar...
	];

	const dispatch = useDispatch();

	const handleButtonClick = (num: number) => {
		dispatch(ResTamplate.setResumeTemplate(num));
		console.log(num);

		// setModal(false); // modalni yopish
	};

	const [cards] = useState<Card[]>(initialCards);
	const [filter, setFilter] = useState<string>(`${t("All")}`);

	const filteredCards =
		filter === `${t("All")}` ? cards : cards.filter((card) => card.category === filter);

	return (
		<section className="filterCards xl:py-10 md:py-8 sm:py-6 max-[660px]:pt-8">
			<div className="container-box">
				<div className="flex items-center mb-4 justify-center">
					{[`${t("All")}`, `${t("about")}`, `${t("Recommend")}`].map((category) => (
						<Button
							key={category}
							text={category}
							className={cn(
								"px-8 py-1 max-[480px]:px-5 rounded-3xl sm:text-lg max-[640px]:text-base capitalize",
								{ "bg-slate-200": filter === category }
							)}
							onClick={() => setFilter(category)}
						/>
					))}
				</div>

				<div className="filterCards__cards-box justify-center">
					{filteredCards?.map((card) => (
						<div
							key={card.id}
							// className="filterCards__item h-[440px] lg:h-[470px] xl:h-[560px]"
							className={cn(
								"filterCards__item 2xl:h-[560px] xl:h-[470px] lg:h-[440px]",
								{ filterCards__scale: filter }
							)}
							onClick={() => handleButtonClick(card.id)}
						>
							<Button
								id={card?.id ? card.id.toString() : undefined}
								link={RoutesPath.createResume}
							>
								<LazyLoadImage alt="resume template" src={card.img} />
								{/* <img src={card.img} alt="resume template" /> */}
							</Button>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FilteredCards;
