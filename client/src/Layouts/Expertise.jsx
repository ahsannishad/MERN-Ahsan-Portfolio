import React from "react";
import Heading from "../Components/Heading";
import Introduction from "../Components/Introduction";
import SectionImage from "../Components/SectionImage";
import SubHeading from "../Components/SubHeading";
import ExpertiseImage from "./../Assets/Images/Image2.jpg";
function Expertise() {
	return (
		<div className="expertise">
			<div className="container segment">
				<div className="row">
					<div className="col-lg-6 col-md-6 col-sm-12">
						<Introduction Introduction="I am expert in" textAlign="left" />
						<Heading Heading="Web design & Development" textAlign="left" />
						<SubHeading
							SubHeading="I build websites and applications with the latest 
                                        technologies that work as hard as you, achieve
                                        results that you want, and generate a return 
                                        on your investment. Modern, fast, mobile first 
                                        website design and UX delivered through 
                                        research, planning and best practices."
							textAlign="left"
						/>
					</div>
					<div className="col-lg-6 col-md-6 col-sm-12">
						<SectionImage image={ExpertiseImage} alt="Hero" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Expertise;
