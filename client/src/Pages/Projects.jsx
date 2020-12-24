import React, { useState, useEffect } from "react";
import ProjectCard from "../Components/ProjectCard";
import Axios from "axios";

function Projects() {
	const [data, setData] = useState([]);

	useEffect(() => {
		let isMounted = true;
		Axios.get("/api/projects")
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
	}, [data]);
	return (
		<div className="container mt-5 mb-5">
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
	);
}

export default Projects;
