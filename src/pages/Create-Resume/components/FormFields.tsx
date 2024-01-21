// import { Button, Col, Row } from "antd";
// import Fields from "components/Fields";
// // import { Fields } from "components";
// import { Field, Formik } from "formik";
// import { get } from "lodash";

// export default function FormFields({ isUpdate = false }) {
// 	return (
// 		<Formik>
// 			<Row gutter={[16, 16]} className="banner_form">
// 				<Col span={12}>
// 					<Field name="url" label="URL" placeholder="URL" component={Fields.InputField} />
// 				</Col>
// 			</Row>
// 		</Formik>
// 	);
// }

import { Button, Col, Row } from "antd";
import Fields from "components/Fields";
import { Field, Formik } from "formik";
import { get } from "lodash";

export default function FormFields({ isUpdate = false }) {
	return (
		<Formik
			initialValues={{ url: "" }}
			onSubmit={(values, actions) => {
				// Sizning formangizni yuborish loyixasi
			}}
		>
			<Row gutter={[16, 16]} className="banner_form">
				<Col span={12}>
					<Field name="url" label="URL" placeholder="URL" component={Fields.InputField} />
				</Col>
			</Row>
		</Formik>
	);
}
