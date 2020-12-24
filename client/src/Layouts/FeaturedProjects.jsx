import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectCard from "../Components/ProjectCard";
import Heading from "../Components/Heading";
function FeaturedProjects() {
	const [data, setData] = useState([]);

	useEffect(() => {
		let isMounted = true;
		axios
			.get("/api/featuredprojects")
			.then((res) => {
				if (isMounted) {
					setData(res.data);
				}
			})
			.catch((error) => {
				console.log(error.message);
			});
		return () => {
			isMounted = false;
		};
	}, []);

	return (
		<div className="featured-projects pb-5">
			<div className="container">
				<div className="heading-title p-5">
					<Heading Heading="Featured Projects" textAlign="center" />
				</div>
				<div className="row">
					{data.map((project) => {
						return (
							<ProjectCard
								key={project._id}
								link={`/projects/${project._id}`}
								thumbnail={project.previewImages[0]}
								title={project.title.substring(0, 50) + "..."}
								badge1={project.frameworks[0]}
								badge2={project.frameworks[1]}
								badge3={project.frameworks[2]}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default FeaturedProjects;
