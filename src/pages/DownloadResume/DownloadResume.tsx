import { Header, Footer } from "components";
import DownloadResumeComponent from "components/DownloadResumeComponent";
import { Res1, Res5 } from "components/ResumeTamplates";
import { useSelectorRedux } from "hooks";
import React from "react";

const DownloadResume: React.FC = () => {
	const { resumeTemplate } = useSelectorRedux();
	return (
		<>
			{/* <Header /> */}
			<main className="container-box">
				<section className="my-5 mx-auto min-w-[700px] max-w-fit flex">
					<DownloadResumeComponent />
				</section>
			</main>
			{/* <Footer /> */}
		</>
	);
};

export default DownloadResume;
