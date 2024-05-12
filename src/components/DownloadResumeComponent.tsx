// import React from "react";
// import html2pdf from "html2pdf.js";
// import { Res5 } from "./ResumeTamplates";
// import { useSelectorRedux } from "hooks";
// import { connect } from "react-redux";

// class MyComponent extends React.Component {
// 	convertToPdf = () => {
// 		const element = document.getElementById("myElementId"); // PDF-ga o'tkazish uchun element
// 		if (element) {
// 			const pdfOptions = {
// 				margin: 10,
// 				filename: "resume.pdf",
// 				image: { type: "svg", quality: 0.9 },
// 				html2canvas: { scale: 2 },
// 				jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
// 			};

// 			html2pdf().from(element).set(pdfOptions).save();
// 		}
// 	};

// 	convertToSvg = () => {
// 		//logica
// 	};

// 	render() {
// 		return (
// 			<div className="flex">
// 				<div id="myElementId" style={{ boxShadow: "0px 0px 7.41692px rgba(0,0,0,.15)" }}>
// 					<Res5 />
// 				</div>
// 				<button className="flex ms-6" onClick={this.convertToPdf}>
// 					Convert to PDF
// 				</button>
// 				<button className="flex ms-6" onClick={this.convertToSvg}>
// 					download svg resume
// 				</button>
// 			</div>
// 		);
// 	}
// }

// export default MyComponent;

// import React, { useRef } from "react";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";
// import html2pdf from "html2pdf.js";
// import { Res1, Res2, Res3, Res4, Res5, Res6 } from "./ResumeTamplates";
// import { connect } from "react-redux";
// import { saveAs } from "file-saver";
// import * as htmlToImage from "html-to-image";

// import canvg from "canvg";

// interface MyComponentProps {
// 	resumeTemplate: 1 | 2 | 3 | 4 | 5 | 6;
// }

// class MyComponent extends React.Component<MyComponentProps> {
// 	// convertToPdf = () => {
// 	// 	const element = document.getElementById("myElementId");
// 	// 	// if (element) {
// 	// 	// 	html2canvas(element).then((canvas) => {
// 	// 	// 		const imgData = canvas.toDataURL("image/png");
// 	// 	// 		const pdf = new jsPDF();
// 	// 	// 		// Add the image to the PDF document
// 	// 	// 		pdf.addImage(imgData, "PNG", 100, 100, 100, 100);
// 	// 	// 		// Save the PDF document
// 	// 	// 		pdf.save("resume.pdf");
// 	// 	// 	});
// 	// 	// }
// 	// 	if (element) {
// 	// 		const pdfOptions = {
// 	// 			margin: 10,
// 	// 			filename: "resume.pdf",
// 	// 			image: { type: "svg", quality: 0.9 },
// 	// 			html2canvas: { scale: 2 },
// 	// 			jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
// 	// 		};

// 	// 		html2pdf().from(element).set(pdfOptions).save();
// 	// 	}
// 	// };

// 	convertToPdf = () => {
// 		const element = document.getElementById("myElementId");
// 		if (element) {
// 			htmlToImage
// 				.toPng(element)
// 				.then((dataUrl) => {
// 					const pdf = new jsPDF();
// 					pdf.addImage(dataUrl, "SVG", 0, 0, 210, 247); // A4 paper size: 210x297mm
// 					pdf.save("resume.pdf");
// 				})
// 				.catch((error) => {
// 					console.error("Error generating PDF:", error);
// 				});
// 		}
// 	};
// 	render() {
// 		const { resumeTemplate } = this.props;
// 		const resumeComponents = {
// 			1: <Res1 />,
// 			2: <Res2 />,
// 			3: <Res3 />,
// 			4: <Res4 />,
// 			5: <Res5 />,
// 			6: <Res6 />,
// 		};

// 		const componentToRender = resumeComponents[resumeTemplate] || <Res1 />;
// 		return (
// 			<div className="flex">
// 				<div
// 					className=""
// 					id="myElementId"
// 					style={{ boxShadow: "0px 0px 7.41692px rgba(0,0,0,.15)" }}
// 				>
// 					{/* <div className="p-10 bg-slate-200">
// 						<div className="p-10 m-5 shadow-2xl">bu box shadow</div>
// 					</div> */}
// 					<div className="sss">{componentToRender}</div>
// 				</div>
// 				<button className="flex ms-6" onClick={this.convertToPdf}>
// 					PDF'ga aylantirish
// 				</button>
// 			</div>
// 		);
// 	}
// }

// const mapStateToProps = (state: any) => ({
// 	resumeTemplate: state.resumeTemplate,
// });

// export default connect(mapStateToProps)(MyComponent);
import { useSelectorRedux } from "hooks";
import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import { useTranslation } from "react-i18next";
import { Button } from "ui";
import { Res1, Res2, Res3, Res4, Res5, Res6 } from "./ResumeTamplates";

const DownloadResumeComponent: React.FC = () => {
	const contentRef = useRef<HTMLDivElement>(null);
	const { resumeTemplate } = useSelectorRedux();
	const { t } = useTranslation();

	const resumeComponents: { [key: number]: JSX.Element } = {
		1: <Res1 />,
		2: <Res2 />,
		3: <Res3 />,
		4: <Res4 />,
		5: <Res5 />,
		6: <Res6 />,
	};

	const componentToRender = resumeComponents[resumeTemplate] || <Res1 />;
	return (
		<div className="flex">
			<div className="max-[660px]:hidden">
				<div ref={contentRef}>
					<div
						className="p-4 shadow-4xl"
						style={{
							maxWidth: "700px",
							boxShadow: "0px 0px 7.41692px rgba(0,0,0,.15)",
						}}
					>
						{componentToRender}
					</div>
				</div>
			</div>
			<ReactToPrint
				trigger={() => (
					<Button
						style={{ boxShadow: "0px 0px 15px rgba(0,0,0,.15)" }}
						className="flex items-center rounded-full h-[40px] py-2 px-3 ms-6"
					>
						{t("Download PDF")}
					</Button>
				)}
				content={() => contentRef.current}
			/>
		</div>
	);
};

export default DownloadResumeComponent;
