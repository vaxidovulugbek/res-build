// import React from "react";
// import html2pdf from "html2pdf.js";

// class MyComponent extends React.Component {
// 	convertToPdf = () => {
// 		const element = document.getElementById("myElementId"); // element to convert to PDF
// 		if (element) {
// 			html2pdf(element);
// 		}
// 	};

// 	render() {
// 		return (
// 			<div>
// 				<div className="sss" style={{ backgroundColor: "yellow" }} id="myElementId">
// 					<p style={{ color: "red" }}>Hello, World!</p>
// 				</div>
// 				<button onClick={this.convertToPdf}>Convert to PDF</button>
// 			</div>
// 		);
// 	}
// }

// export default MyComponent;

import React from "react";
import html2pdf from "html2pdf.js";

class MyComponent extends React.Component {
	convertToPdf = () => {
		const element = document.getElementById("myElementId"); // PDF-ga o'tkazish uchun element
		if (element) {
			const pdfOptions = {
				margin: 10,
				filename: "sarlavha.pdf",
				image: { type: "svg", quality: 0.9 },
				html2canvas: { scale: 2 },
				jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
			};

			html2pdf().from(element).set(pdfOptions).save();
		}
	};

	render() {
		return (
			<div>
				<div className="sss" style={{ backgroundColor: "yellow" }} id="myElementId">
					<p style={{ color: "red" }}>Hello, World!</p>
				</div>
				<button onClick={this.convertToPdf}>Convert to PDF</button>
			</div>
		);
	}
}

export default MyComponent;
