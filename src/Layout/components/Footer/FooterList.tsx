import { isArray } from "lodash";
import React from "react";
import { Title, Button } from "ui";
import cn from "classnames";
import { FooterListProps } from "types/interface";

const FooterList: React.FC<FooterListProps> = ({ fields, title, className = "" }) => {
	return (
		<div className={cn("footer__item", className)}>
			<Title
				className="mb-6 capitalize footer__item-title"
				weight="medium"
				as="h4"
				text={title}
			/>
			<nav className="navbar-footer">
				<ul className="flex flex-col">
					{fields &&
						fields.map((item, index) => {
							return (
								<li className="text-base mb-4 max-[480px]:mb-2" key={index}>
									<Button
										className="navbar__items footer__nav-items"
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
