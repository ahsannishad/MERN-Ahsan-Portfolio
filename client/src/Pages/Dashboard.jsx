import React, { Fragment, useState, useEffect } from "react";
import AdminHeader from "../Components/AdminHeader";
import SideBar from "../Components/SideBar";
import moment from "moment";

import axios from "axios";

function Dashboard() {
	const [projects, setProjects] = useState([]);
	const [messages, setMessages] = useState([]);
	const [projectsLength, setProjectsLength] = useState("");
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
		axios
			.get("/api/projects")
			.then((res) => {
				if (isMounted) {
					setProjectsLength(res.data.length);
				}
			})
			.catch((error) => {
				console.log(error.message);
			});

		axios
			.get("/api/messages")
			.then((res) => {
				if (isMounted) {
					setMessages(res.data);
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
		<Fragment>
			<AdminHeader />
			<div className="container-fluid">
				<div className="row">
					<SideBar />

					<main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
						<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
							<h1 className="h2">Dashboard</h1>
						</div>
						<div className="container-fluid">
							<div className="row">
								<div className="col-lg-3 col-md-3 col-sm-6">
									<div className="card dashboard-card shadow mb-3">
										<div className="row no-gutters">
											<div className="col-md-12">
												<div className="card-body">
													<p className="card-text text-muted">TOTAL MESSAGES</p>
													<h2 className="card-title">0{messages.length}</h2>
													<p className="card-text">
														<small className="text-muted">
															Statics of total messages
														</small>
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-3 col-sm-6">
									<div className="card dashboard-card shadow mb-3">
										<div className="row no-gutters">
											<div className="col-md-12">
												<div className="card-body">
													<p className="card-text text-muted">TOTAL PROJECTS</p>
													<h2 className="card-title">0{projectsLength}</h2>
													<p className="card-text">
														<small className="text-muted">
															Statics of total projects published
														</small>
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-3 col-sm-6">
									<div className="card dashboard-card shadow mb-3">
										<div className="row no-gutters">
											<div className="col-md-12">
												<div className="card-body">
													<p className="card-text text-muted">PAGE VISIT</p>
													<h2 className="card-title">220</h2>
													<p className="card-text">
														<small className="text-muted">
															Statics of home page visit
														</small>
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-3 col-sm-6">
									<div className="card dashboard-card shadow mb-3">
										<div className="row no-gutters">
											<div className="col-md-12">
												<div className="card-body">
													<p className="card-text text-muted">TOTAL BLOGS</p>
													<h2 className="card-title">06</h2>
													<p className="card-text">
														<small className="text-muted">
															Statics of total blogs writen{" "}
														</small>
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="row mt-4 mb-5">
								<div className="col-lg-6">
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
													{projects.map((project) => {
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
								<div className="col-lg-6 ">
									<div className="card dashboard-card shadow">
										<div className="card-body">
											<h5 className="card-title mb-1">Most Recent Messages</h5>
											<small className="card-subtitle text-muted">
												{moment().calendar()}
											</small>
											<p className="card-text mt-3">
												Most Recent Messages from your fan Take a look
											</p>

											<table className="table">
												<tbody>
													{messages &&
														messages.map((message) => {
															return (
																<tr key={message._id}>
																	<td>
																		<p className="mb-0">
																			{message.message.substring(0, 100) +
																				"..."}
																		</p>
																		<small className="text-muted">
																			{moment(message.createdAt).calendar()}
																		</small>
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

export default Dashboard;
