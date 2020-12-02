import React from "react";
import Heading from "../Components/Heading";
import Introduction from "../Components/Introduction";
import SectionImage from "../Components/SectionImage";
import SubHeading from "../Components/SubHeading";
import SubHeroImage from "./../Assets/Images/Image3.png";
function SubHero() {
	return (
		<div className="sub-hero">
			<div className="container segment">
				<div className="row">
					<div className="col-lg-6 col-md-6 col-sm-12">
						<SectionImage image={SubHeroImage} alt="Hero" />
					</div>
					<div className="col-lg-6 col-md-6 col-sm-12">
						<Introduction
							Introduction="I create &  work with"
							textAlign="left"
						/>
						<Heading
							Heading="Responsive, optimised and mobile friendly design"
							textAlign="left"
						/>
						<SubHeading
							SubHeading="Good UI design will give your potential c ustomers
                                        confidence in your company and your brand.It help 
                                        your website rank. To reach a wider audience of
                                        potential customers, businesses must embrace 
                                        the benefits of responsive web design."
							textAlign="left"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SubHero;
