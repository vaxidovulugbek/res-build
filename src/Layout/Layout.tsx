import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import cn from "classnames";
import { Footer, Header } from "./components";

const Layout = (props: any) => {
	const { children } = props;

	return (
		<>
			<Header />
			{/* <main className="site-wrapper">{children}</main> */}
			{children}
			<Footer />
		</>
	);
};

export default Layout;
