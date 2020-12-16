import React, { useState, useEffect } from "react";
import ProjectCard from "../Components/ProjectCard";
import Axios from "axios";

function Projects() {
	const [data, setData] = useState([]);

	useEffect(() => {
		Axios.get("/api/projects")
			.then((res) => {
				setData(res.data);
			})
			.catch((error) => {
				console.log(error.message);
			});
		// return () => {
		// 	cleanup
		// }
	}, [data]);
	return (
		<div className="container mt-5 mb-5">
			<div className="card-deck mb-4 m-3">
				{data.map((project) => {
					return (
						<ProjectCard
							key={project._id}
							link={`/projects/${project._id}`}
							thumbnail={project.previewImages[0]}
							title={project.title}
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
