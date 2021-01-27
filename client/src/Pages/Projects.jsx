import React, { useState, useEffect, Fragment } from "react";
import ProjectCard from "../Components/ProjectCard";
import Axios from "axios";
import moment from "moment";

function Projects() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		let isMounted = true;
		Axios.get("/api/projects")
			.then((res) => {
				if (isMounted) {
					setLoading(false);
					setData(res.data);
				}
			})
			.catch((error) => {
				setLoading(false);
				console.log(error.message);
			});
		return () => {
			isMounted = false;
		};
	}, []);
	return (
		<Fragment>
			{loading ? (
				<div className="text-center loader">
					<div className="spinner-grow" role="status">
						<span className="sr-only">Loading...</span>
					</div>
				</div>
			) : (
				<div className="container mt-5 mb-5">
					<div className="row">
						{data.map((project) => {
							return (
								<ProjectCard
									key={project._id}
									thumbnail={project.previewImages[0]}
									title={project.title.substring(0, 20) + "..."}
									projectBadge1={project.frameworks[0]}
									projectBadge2={project.frameworks[1]}
									projectBadge3={project.frameworks[2]}
									link={`/projects/${project._id}`}
									date={moment(project.createdAt).format("Do MMM YY")}
									description={project.description.substring(0, 80) + "..."}
								/>
							);
						})}
					</div>
				</div>
			)}
		</Fragment>
	);
}

export default Projects;
