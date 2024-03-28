import React, { useState } from "react";
import res1 from "assets/imgs/resume_templates/res1.png";
import { Button } from "ui/Button/Button";
import RoutesPath from "helpers/RoutesPath";
import cn from "classnames";

interface Card {
	id: number;
	title: string;
	category: string;
	img: any;
}

const FilteredCards: React.FC = () => {
	const initialCards: Card[] = [
		{ id: 1, title: "Card 1", category: "All", img: res1 },
		{ id: 2, title: "Card 2", category: "About", img: res1 },
		{ id: 3, title: "Card 3", category: "Recommend", img: res1 },
		{ id: 4, title: "Card 3wefwe", category: "Recommend", img: res1 },
		{ id: 5, title: "Card 3wkjenrkwejrnw", category: "Recommend", img: res1 },
		{ id: 6, title: "Card 4", category: "About", img: res1 },
		// Boshqa cardlar...
	];

	const [cards] = useState<Card[]>(initialCards);
	const [filter, setFilter] = useState<string>("All");

	const filteredCards =
		filter === "All" ? cards : cards.filter((card) => card.category === filter);

	return (
		<section className="filterCards xl:py-10 md:py-8 sm:py-6 max-[660px]:pt-8">
			<div className="container-box">
				<div className="flex items-center mb-4 justify-center">
					{["All", "About", "Recommend"].map((category) => (
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
					{filteredCards.map((card) => (
						<div
							key={card.id}
							// className="filterCards__item h-[440px] lg:h-[470px] xl:h-[560px]"
							className={cn(
								"filterCards__item 2xl:h-[560px] xl:h-[470px] lg:h-[440px]",
								{ filterCards__scale: filter }
							)}
						>
							<Button
								id={card?.id ? card.id.toString() : undefined}
								link={RoutesPath.createResume}
							>
								<img src={card.img} alt="resume template" />
							</Button>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FilteredCards;
