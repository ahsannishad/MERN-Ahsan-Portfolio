import React from "react";
import { Link } from "react-router-dom";

function ProjectCard(props) {
	return (
		<div className="col-lg-4 col-md-4 mb-4">
			<div className="card blog-card">
				<img
					loading="lazy"
					src={props.thumbnail}
					className="card-img-top blog-card-thumbnail"
					alt="thumbnail"
				/>
				<div className="card-body">
					<h4 className="card-title text-center blog-card-title">
						{props.title}
					</h4>
					<div className="blog-badge text-center">
						<span className="badge project-card-badge badge-light m-2">
							{props.projectBadge1}
						</span>
						<span className="badge project-card-badge badge-light m-2">
							{props.projectBadge2}
						</span>
						<span className="badge project-card-badge badge-light m-2">
							{props.projectBadge3}
						</span>
					</div>

					<p className="card-text text-left blog-card-description">
						{props.description}
					</p>

					<div className="row">
						<div className="col text-left">
							<Link
								to={props.link}
								className="btn btn-sm btn-light blog-readmore-button"
							>
								View Project
							</Link>
						</div>
						<div className="col text-right">
							<p className="card-text blog-card-date ">
								<small className="text-muted">{props.date}</small>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
