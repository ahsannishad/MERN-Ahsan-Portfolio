import React from "react";
import Axios from "axios";

function ManageMessageCard(props) {
	return (
		<div className="card shadow mb-3 manage-project-card  m-2">
			<div className="row no-gutters">
				<div className="col-md-12">
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
								background: "white",
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
											Delete Message
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
										<p>Are you Sure You want to delete the message</p>
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
												Axios.delete(`/api/messages/${props.id}`)
													.then((res) => {
														console.log("Successfully deleted the message");
													})
													.catch((error) => {
														console.log(
															"Something went wrong while deleting the message"
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

						<h5
							className="card-title"
							style={{ width: "90%", marginBottom: "0px" }}
						>
							{props.name}
						</h5>
						<small className="text-muted ml-1">{props.email}</small>

						<p className="card-text mt-3">{props.message}</p>
						<p className="card-text">
							<small className="text-muted mr-3">{props.date}</small>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ManageMessageCard;
