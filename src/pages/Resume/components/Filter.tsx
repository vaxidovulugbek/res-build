import React, { useState } from "react";
import res1 from "assets/imgs/resume_templates/res1.png";
import { Button } from "ui/Buttonn/Button";
import RoutesPath from "helpers/RoutesPath";
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
		{ id: 6, title: "Card 4", category: "Test", img: res1 },
		// Boshqa cardlar...
	];

	const [cards, setCards] = useState<Card[]>(initialCards);
	const [filter, setFilter] = useState<string>("All");

	const filteredCards =
		filter === "All" ? cards : cards.filter((card) => card.category === filter);

	return (
		<section className="filterCards">
			<div className="container-box">
				<div className="flex items-center mb-3 justify-center">
					<button className="text-lg" onClick={() => setFilter("All")}>
						All
					</button>
					<button className="ms-6 text-lg" onClick={() => setFilter("About")}>
						About
					</button>
					<button className="ms-6 text-lg" onClick={() => setFilter("Recommend")}>
						Recommend
					</button>
					<button className="ms-6 text-lg" onClick={() => setFilter("Test")}>
						Test
					</button>
				</div>

				<div className="filterCards__cards-box justify-center">
					{filteredCards.map((card) => (
						<div key={card.id} className="filterCards__item">
							<Button
								id={card?.id ? card.id.toString() : undefined}
								link={`/create-resume`}
								children={<img src={card.img} alt="resume template" />}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FilteredCards;

// import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
// import gsap from "gsap";

// interface Card {
// 	id: number;
// 	title: string;
// 	category: string;
// }

// const FilteredCards: React.FC = () => {
// 	const initialCards: Card[] = [
// 		{ id: 1, title: "Card 1", category: "All" },
// 		{ id: 2, title: "Card 2", category: "About" },
// 		{ id: 3, title: "Card 3", category: "Recommend" },
// 		{ id: 3, title: "kjhkjhkj 3", category: "Recommend" },
// 		// Boshqa cardlar...
// 	];

// 	const [cards, setCards] = useState<Card[]>(initialCards);
// 	const [filter, setFilter] = useState<string>("All");

// 	const filteredCards =
// 		filter === "All" ? cards : cards.filter((card) => card.category === filter);

// 	const elementsRef = useRef<HTMLDivElement[]>([]);

// 	// useEffect(() => {
// 	// 	console.log("boshlandi");
// 	// 	gsap.from(elementsRef.current, {
// 	// 		opacity: 0,
// 	// 		y: 20,
// 	// 		ease: "power3.inOut",
// 	// 		stagger: 0.2,
// 	// 		duration: 0.5,
// 	// 	});
// 	// }, [filteredCards]);

// 	return (
// 		<div>
// 			<div>
// 				<button onClick={() => setFilter("All")}>All</button>
// 				<button onClick={() => setFilter("About")}>About</button>
// 				<button onClick={() => setFilter("Recommend")}>Recommend</button>
// 			</div>

// 			<div>
// 				{filteredCards.map((card, index) => (
// 					<div
// 						key={card.id}
// 						className="filtered-card"
// 						style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}
// 						ref={(el) => (elementsRef.current[index] = el as HTMLDivElement)}
// 					>
// 						<h3>{card.title}</h3>
// 						<p>{card.category}</p>
// 					</div>
// 				))}
// 			</div>
// 		</div>
// 	);
// };

// export default FilteredCards;
