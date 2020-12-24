import React, { Fragment, useEffect, useState } from "react";
import AdminHeader from "../Components/AdminHeader";
import SideBar from "../Components/SideBar";
import moment from "moment";
import axios from "axios";

import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";
import "animate.css/animate.min.css";

function ManageProjects() {
	const [data, setData] = useState([]);
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		let isMounted = true;
		axios.get("/api/projects").then((res) => {
			if (isMounted) {
				setData(res.data);
			}
		});

		return () => {
			isMounted = false;
		};
	}, [data]);

	useEffect(() => {
		let isMounted = true;
		axios
			.get("/api/featuredprojects")
			.then((res) => {
				if (isMounted) {
					setProjects(res.data);
				}
			})
			.catch((error) => {
				console.log(error.message);
			});

		return () => {
			isMounted = false;
		};
	}, [projects]);

	function showAlert(props) {
		store.addNotification({
			title: props.title,
			message: props.message,
			type: props.version,
			insert: "top",
			container: "top-right",
			animationIn: ["animate__animated", "animate__fadeIn"],
			animationOut: ["animate__animated", "animate__fadeOut"],
			dismiss: {
				duration: 5000,
				onScreen: false,
			},
		});
	}

	return (
		<Fragment>
			<ReactNotification />
			<AdminHeader />
			<div className="container-fluid">
				<div className="row">
					<SideBar />

					<main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
						<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
							<h1 className="h2">All Projects</h1>
						</div>
						<div className="container-fluid mt-4">
							<div className="row mb-5">
								<div className="col-lg-6 mb-5">
									<div className="card dashboard-card shadow">
										<div className="card-body">
											<h5 className="card-title mb-1">All Projects</h5>
											<small className="card-subtitle text-muted">
												{moment().calendar()}
											</small>
											<p className="card-text mt-3">
												These are all the projects saved in database. If
												necessary Edit or delete them
											</p>

											<table className="table">
												<tbody>
													{data &&
														data.map((project) => {
															return (
																<tr key={project._id}>
																	<td className="align-middle">
																		<img
																			style={{ borderRadius: "10px" }}
																			src={project.previewImages[0]}
																			alt="thumbnail"
																			width="80px"
																		/>
																	</td>
																	<td>
																		<p className="mb-0">
																			{project.title.substring(0, 100)}
																		</p>
																		<small className="text-muted">
																			{moment(project.createdAt).calendar()}
																		</small>
																	</td>
																	<td className="align-middle">
																		<a
																			href={`/projects/${project._id}`}
																			type="button"
																			className="btn btn-primary "
																		>
																			Visit Project{" "}
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width="16"
																				height="16"
																				fill="currentColor"
																				className="bi bi-box-arrow-in-up-right"
																				viewBox="0 0 16 16"
																			>
																				<path
																					fillRule="evenodd"
																					d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5z"
																				/>
																				<path
																					fillRule="evenodd"
																					d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0v-5z"
																				/>
																			</svg>
																		</a>
																	</td>
																	<td className="align-middle">
																		<button
																			type="button"
																			data-toggle="dropdown"
																			aria-haspopup="true"
																			aria-expanded="false"
																			className="align-middle btn btn-light btn-sm "
																			style={{
																				backgroundColor: "white",
																				borderRadius: "100%",
																				border: "none",
																			}}
																		>
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width="16"
																				height="16"
																				fill="currentColor"
																				className="bi bi-three-dots-vertical"
																				viewBox="0 0 16 16"
																			>
																				<path
																					fillRule="evenodd"
																					d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
																				/>
																			</svg>
																		</button>
																		<div className="dropdown-menu">
																			<a
																				className="dropdown-item btn btn-light"
																				href={`/projects/edit/${project._id}`}
																			>
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
																						<h5
																							className="modal-title"
																							id="staticBackdropLabel"
																						>
																							Delete This Project
																						</h5>
																						<button
																							type="button"
																							className="close"
																							data-dismiss="modal"
																							aria-label="Close"
																						>
																							<span aria-hidden="true">
																								&times;
																							</span>
																						</button>
																					</div>
																					<div className="modal-body">
																						<p>
																							Are you sure you want to delete "
																							{project.title}" this project?
																						</p>
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
																								axios
																									.delete(
																										`/api/projects/${project._id}`
																									)
																									.then((res) => {
																										showAlert({
																											title: "Success!",
																											message:
																												"Successfully deleted the project",
																											version: "success",
																										});
																									})
																									.catch((error) => {
																										showAlert({
																											title: "Error!",
																											message:
																												"Something went wrong while deleting the project",
																											version: "danger",
																										});
																									});
																							}}
																						>
																							Ok
																						</button>
																					</div>
																				</div>
																			</div>
																		</div>
																	</td>
																</tr>
															);
														})}
												</tbody>
											</table>
										</div>
									</div>
								</div>
								<div className="col-lg-6 mb-5">
									<div className="card dashboard-card shadow">
										<div className="card-body">
											<h5 className="card-title mb-1">Most Popular Project</h5>
											<small className="card-subtitle text-muted">
												{moment().calendar()}
											</small>
											<p className="card-text mt-3">
												These Projects are most visited by user and got long
												time impression by the visitor also click time response
												was fast
											</p>

											<table className="table">
												<tbody>
													{projects &&
														projects.map((project) => {
															return (
																<tr key={project._id}>
																	<td className="align-middle">
																		<img
																			style={{ borderRadius: "10px" }}
																			src={project.previewImages[0]}
																			alt="thumbnail"
																			width="80px"
																		/>
																	</td>
																	<td>
																		<p className="mb-0">{project.title}</p>
																		<small className="text-muted">
																			{moment(project.createdAt).calendar()}
																		</small>
																	</td>
																	<td className="align-middle">
																		<a
																			href={`/projects/${project._id}`}
																			type="button"
																			className="btn btn-primary "
																		>
																			Visit Project{" "}
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width="16"
																				height="16"
																				fill="currentColor"
																				className="bi bi-box-arrow-in-up-right"
																				viewBox="0 0 16 16"
																			>
																				<path
																					fillRule="evenodd"
																					d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5z"
																				/>
																				<path
																					fillRule="evenodd"
																					d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0v-5z"
																				/>
																			</svg>
																		</a>
																	</td>
																</tr>
															);
														})}
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>
					</main>
				</div>
			</div>
		</Fragment>
	);
}

export default ManageProjects;
