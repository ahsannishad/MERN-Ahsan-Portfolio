import React from "react";
import ProjectCard from "../Components/ProjectCard";

import Thumbnail1 from "./../Assets/Images/Image4.webp";
import Thumbnail2 from "./../Assets/Images/Image2.jpg";
import Thumbnail3 from "./../Assets/Images/Image7.webp";

function Projects() {
	return (
		<div className="container mt-5 mb-5">
			<div className="card-deck mb-4 m-3">
				<ProjectCard
					thumbnail={Thumbnail1}
					title="Example Project Title"
					badge1="React JS"
					badge2="Node JS"
					badge3="Mongo DB"
				/>
				<ProjectCard
					thumbnail={Thumbnail2}
					title="Example Project Title"
					badge1="React JS"
					badge2="Node JS"
					badge3="Mongo DB"
				/>
				<ProjectCard
					thumbnail={Thumbnail3}
					title="Example Project Title"
					badge1="React JS"
					badge2="Node JS"
					badge3="Mongo DB"
				/>
			</div>
			<div className="card-deck mb-4 m-3">
				<ProjectCard
					thumbnail={Thumbnail1}
					title="Example Project Title"
					badge1="React JS"
					badge2="Node JS"
					badge3="Mongo DB"
				/>
				<ProjectCard
					thumbnail={Thumbnail2}
					title="Example Project Title"
					badge1="React JS"
					badge2="Node JS"
					badge3="Mongo DB"
				/>
				<ProjectCard
					thumbnail={Thumbnail3}
					title="Example Project Title"
					badge1="React JS"
					badge2="Node JS"
					badge3="Mongo DB"
				/>
			</div>
		</div>
	);
}

export default Projects;