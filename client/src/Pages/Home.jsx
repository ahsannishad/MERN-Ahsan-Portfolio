import React, { Fragment } from "react";
import Hero from "../Layouts/Hero";
import SubHero from "../Layouts/SubHero";
import Expertise from "../Layouts/Expertise";
import FeaturedProjects from "../Layouts/FeaturedProjects";
import FeaturedBlogs from "../Layouts/FeaturedBlogs";

function Home() {
	return (
		<Fragment>
			<Hero />
			<SubHero />
			<Expertise />
			<FeaturedProjects />
			<hr className="mt-5 mt-5" />
			<FeaturedBlogs />
		</Fragment>
	);
}

export default Home;
