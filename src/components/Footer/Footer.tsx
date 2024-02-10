import React from "react";
import { Title, Text } from "ui";
import FooterList from "./FooterList";
import "./Footer.scss";
import { FaFacebookF, FaTelegramPlane, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="flex justify-between">
					<FooterList
						title="Products"
						className="w-1/4 mt-12 items-center inline-block"
						fields={[
							{
								name: "Features",
								url: "/",
							},
							{
								name: "Pricing",
								url: "/",
							},
							{
								name: "Reviews",
								url: "/",
							},
							{
								name: "Updates",
								url: "/",
							},
						]}
					/>
					<FooterList
						title="Company"
						className="w-1/4 mt-12 items-center inline-block"
						fields={[
							{
								name: "Features",
								url: "/",
							},
							{
								name: "Pricing",
								url: "/",
							},
							{
								name: "Reviews",
								url: "/",
							},
							{
								name: "Updates",
								url: "/",
							},
						]}
					/>
					<FooterList
						title="support"
						className="w-1/4 mt-12 items-center inline-block"
						fields={[
							{
								name: "Features",
								url: "/",
							},
							{
								name: "Pricing",
								url: "/",
							},
							{
								name: "Reviews",
								url: "/",
							},
							{
								name: "Updates",
								url: "/",
							},
						]}
					/>
					<div className="mt-12 w-1/4">
						<Title
							className="mb-6 capitalize"
							weight="medium"
							as="h4"
							text="Bizni ijtimoiy tarmoqlarda kuzatib boring"
						/>
						<ul className="flex items-center">
							<li className="">
								<a
									className="bg-slate-200 text-lg p-3 rounded-lg flex items-center justify-center me-4"
									href="#"
									target="_blank"
								>
									<FaFacebookF className="text-gray" />
								</a>
							</li>
							<li>
								<a
									className="bg-slate-200 p-3 text-lg rounded-lg flex items-center justify-center me-4"
									href="#"
									target="_blank"
								>
									<FaTelegramPlane className="text-gray" />
								</a>
							</li>
							<li>
								<a
									className="bg-slate-200 p-3 text-lg rounded-lg flex items-center justify-center me-4"
									href="#"
									target="_blank"
								>
									<FaInstagram className="text-gray" />
								</a>
							</li>
							<li>
								<a
									className="bg-slate-200 p-3 text-lg rounded-lg flex items-center justify-center"
									href="#"
									target="_blank"
								>
									<FaLinkedinIn className="text-gray" />
								</a>
							</li>
						</ul>
					</div>
				</div>
				<Text
					className="flex justify-center mt-16 text-gray text-sm"
					as="p"
					text="All Rights Reserved | Terms and Conditions | Privacy Policy"
				/>
			</div>
		</footer>
	);
};

export default Footer;
