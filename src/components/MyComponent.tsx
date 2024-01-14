import React from "react";
import html2pdf from "html2pdf.js";

class MyComponent extends React.Component {
	convertToPdf = () => {
		const element = document.getElementById("myElementId"); // element to convert to PDF
		if (element) {
			html2pdf(element);
		}
	};

	render() {
		return (
			<div>
				<div className="sss" style={{ backgroundColor: "yellow" }} id="myElementId">
					{/* Your content here */}
					<p style={{ color: "red" }}>Hello, World!</p>
				</div>
				<button onClick={this.convertToPdf}>Convert to PDF</button>
			</div>
		);
	}
}

export default MyComponent;
