import React from "react";
import Heading from "../Components/Heading";
import Introduction from "../Components/Introduction";
import SectionImage from "../Components/SectionImage";
import SubHeading from "../Components/SubHeading";
import HeroImage from "./../Assets/Images/Image1.gif";
function Hero() {
	return (
		<div className="hero">
			<div className="container segment">
				<div className="row">
					<div className="col-lg-6 col-md-6 col-sm-12">
						<Introduction Introduction="Hello" textAlign="left" />
						<Heading
							Heading="I am Ahsan a Developer, from Dhaka, Bangladesh"
							textAlign="left"
						/>
						<SubHeading
							SubHeading="I've been developing website since 2018. I build websites 
                                        and applications with the latest technologies that work as
                                        hard as you, achieve results that you want, and generate a
                                        return on your investment. Let me help you grow your
                                        business by developing beautifull websites."
							textAlign="left"
						/>
					</div>
					<div className="col-lg-6 col-md-6 col-sm-12">
						<SectionImage image={HeroImage} alt="Hero" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
