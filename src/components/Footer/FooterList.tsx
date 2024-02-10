import { isArray } from "lodash";
import React from "react";
import { Title, Button } from "ui";
import cn from "classnames";

interface Field {
	name: string;
	url?: string;
}

interface FooterListProps {
	title: string;
	fields: Field[];
	className?: string;
}

const FooterList: React.FC<FooterListProps> = ({ fields, title, className = "" }) => {
	return (
		<div className={cn("footer__item", className)}>
			<Title className="mb-6 capitalize" weight="medium" as="h4" text={title} />
			<nav className="navbar">
				<ul className="flex flex-col">
					{fields &&
						fields.map((item, index) => {
							return (
								<li className="text-base mb-4" key={index}>
									<Button
										className="navbar__items"
										link={item?.url}
										text={item?.name}
									/>
								</li>
							);
						})}
				</ul>
			</nav>
		</div>
	);
};

export default FooterList;
