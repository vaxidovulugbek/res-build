import { Header, Footer } from "components";
import { Res1, Res5 } from "components/ResumeTamplates";
import React from "react";

const DownloadResume: React.FC = () => {
	return (
		<>
			<Header />
			<main className="container-box">
				<Res5 />
			</main>
			<Footer />
		</>
	);
};

export default DownloadResume;
