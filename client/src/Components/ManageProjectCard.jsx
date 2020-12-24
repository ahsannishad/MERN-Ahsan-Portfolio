import Axios from "axios";
import React from "react";

function ManageProjectCard(props) {
	return (
		<div className="card mb-3 manage-project-card">
			<img
				style={{ borderRadius: "10px" }}
				src={props.thumbnail}
				className="card-img"
				alt="thumbnail"
				width="100%"
			/>
			<div className="card-body">
				<button
					type="button"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
					className="card-title"
					style={{
						float: "right",
						maxwidth: "10%",
						background: "#f4f9f4",
						borderRadius: "100",
						border: "none",
					}}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						className="bi bi-three-dots"
						viewBox="0 0 16 16"
					>
						<path
							fillRule="evenodd"
							d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
						/>
					</svg>
				</button>
				<div className="dropdown-menu">
					<a href={props.EditLink} className="dropdown-item btn btn-light">
						Edit
					</a>
					<button
						type="button"
						className="dropdown-item btn btn-light"
						data-toggle="modal"
						data-target="#staticBackdrop"
					>
						Delete
					</button>
				</div>

				<div
					className="modal fade"
					id="staticBackdrop"
					data-backdrop="static"
					data-keyboard="false"
					tabIndex="-1"
					aria-labelledby="staticBackdropLabel"
					aria-hidden="true"
				>
					<div className="modal-dialog modal-dialog-centered">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="staticBackdropLabel">
									Delete
								</h5>
								<button
									type="button"
									className="close"
									data-dismiss="modal"
									aria-label="Close"
								>
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								<p>Are you Sure You want to delete "{props.title}"</p>
							</div>
							<div className="modal-footer">
								<button
									type="button"
									className="btn btn-dark"
									data-dismiss="modal"
								>
									Cancel
								</button>
								<button
									data-dismiss="modal"
									type="button"
									className="btn btn-danger"
									onClick={(event) => {
										Axios.delete(`/api/projects/${props.id}`)
											.then((res) => {
												console.log("Successfully deleted the project");
											})
											.catch((error) => {
												console.log(
													"Something went wrong while deleting the project"
												);
											});
									}}
								>
									Ok
								</button>
							</div>
						</div>
					</div>
				</div>
				<a href={props.link} className="manage-project-card-link">
					<h5
						style={{ width: "90%", marginBottom: "2px" }}
						className="card-title"
					>
						{props.title.substring(0, 100) + "..."}
					</h5>
				</a>

				<p className="card-text" style={{ width: "90%", marginBottom: "2px" }}>
					<small className="text-muted">{props.description}</small>
				</p>
				<p className="card-text">
					<small className="text-muted mr-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-briefcase"
							viewBox="0 0 16 16"
						>
							<path
								fillRule="evenodd"
								d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6h-1v6a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-6H0v6z"
							/>
							<path
								fillRule="evenodd"
								d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5v2.384l-7.614 2.03a1.5 1.5 0 0 1-.772 0L0 6.884V4.5zM1.5 4a.5.5 0 0 0-.5.5v1.616l6.871 1.832a.5.5 0 0 0 .258 0L15 6.116V4.5a.5.5 0 0 0-.5-.5h-13zM5 2.5A1.5 1.5 0 0 1 6.5 1h3A1.5 1.5 0 0 1 11 2.5V3h-1v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V3H5v-.5z"
							/>
						</svg>{" "}
						{props.category}
					</small>
					<small className="text-muted ">{props.date}</small>
				</p>
			</div>
		</div>
	);
}

export default ManageProjectCard;
