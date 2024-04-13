import { Button } from "ui";
import "./style.scss";

const index = () => {
	return (
		<section className="page_404">
			<div className="error-page">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 col-lg-offset-3 col-md-10 col-md-offset-3">
							<div className="clearfix">
								<div className="error-page-message error-page-message-lead">
									404
								</div>
								<div className="error-page-message">
									Sorry, but nothing exists here.
								</div>
								<Button
									className="flex mt-3 hover:underline"
									text="go to home"
									link="/"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default index;
