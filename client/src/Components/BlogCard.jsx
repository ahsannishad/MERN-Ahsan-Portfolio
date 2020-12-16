import React from "react";
import { Link } from "react-router-dom";

function BlogCard(props) {
	return (
		<div className="card blog-card">
			<img
				src={props.thumbnail}
				className="card-img-top blog-card-thumbnail"
				alt="thumbnail"
			/>
			<div className="card-body">
				<h4 className="card-title text-center blog-card-title">
					{props.title}
				</h4>
				<div className="blog-badge text-center">
					<span className="badge blog-card-badge badge-primary m-2">
						{props.badge1}
					</span>
					<span className="badge blog-card-badge badge-primary m-2">
						{props.badge2}
					</span>
					<span className="badge blog-card-badge badge-primary m-2">
						{props.badge3}
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
							Read More
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
	);
}

export default BlogCard;
