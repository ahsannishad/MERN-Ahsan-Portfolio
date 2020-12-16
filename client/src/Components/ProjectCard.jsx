import React from "react";

function ProjectCard(props) {
	return (
		<div className="card project-card">
			<a href={props.link}>
				<img
					src={props.thumbnail}
					className="card-img-top project-card-thumbnail"
					alt="thumbnail"
				/>
				<div className="card-body">
					<h4 className="card-title text-center project-card-title">
						{props.title}
					</h4>
					<div className="project-badge text-center">
						<span className="badge project-card-badge badge-warning m-2">
							{props.badge1}
						</span>
						<span className="badge project-card-badge badge-warning m-2">
							{props.badge2}
						</span>
						<span className="badge project-card-badge badge-warning m-2">
							{props.badge3}
						</span>
					</div>
				</div>
			</a>
		</div>
	);
}

export default ProjectCard;
