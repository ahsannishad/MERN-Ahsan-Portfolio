import React, { Fragment } from "react";
import Hero from "../Layouts/Hero";
import SubHero from "../Layouts/SubHero";
import Expertise from "../Layouts/Expertise";
import FeaturedProjects from "../Layouts/FeaturedProjects";

function Home() {
	return (
		<Fragment>
			<Hero />
			<SubHero />
			<Expertise />
			<FeaturedProjects />
		</Fragment>
	);
}

export default Home;
