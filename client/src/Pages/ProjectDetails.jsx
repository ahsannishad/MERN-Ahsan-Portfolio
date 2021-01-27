import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import moment from "moment";

function ProjectDetails() {
	const { projectid } = useParams();
	const [loading, setLoading] = useState(true);
	const [showNoData, setShowNoData] = useState(false);
	const [data, setData] = useState([]);

	useEffect(() => {
		let mounted = true;
		Axios.get(`/api/projects/${projectid}`)
			.then((res) => {
				if (mounted) {
					setLoading(false);
					setData(res.data[0]);
				}
			})
			.catch((error) => {
				setShowNoData(true);
				setLoading(false);
				console.log(error.message);
			});
		return () => {
			mounted = false;
		};
	}, [projectid, showNoData]);
	return (
		<div className="mt-5 mb-5">
			<div
				className="modal fade"
				id="first-preview-image"
				tabIndex="-1"
				aria-labelledby="first-preview-image"
				aria-hidden="true"
			>
				<div className="modal-dialog  modal-dialog-centered">
					<div className="modal-content">
						<img
							className=""
							src={data.previewImages && data.previewImages[0]}
							width="100%"
							alt="project slide show"
						/>
					</div>
				</div>
			</div>
			<div
				className="modal fade"
				id="second-preview-image"
				tabIndex="-1"
				aria-labelledby="second-preview-image"
				aria-hidden="true"
			>
				<div className="modal-dialog  modal-dialog-centered">
					<div className="modal-content">
						<img
							className=""
							src={data.previewImages && data.previewImages[1]}
							width="100%"
							alt="project slide show"
						/>
					</div>
				</div>
			</div>
			<div
				className="modal fade"
				id="third-preview-image"
				tabIndex="-1"
				aria-labelledby="third-preview-image"
				aria-hidden="true"
			>
				<div className="modal-dialog  modal-dialog-centered">
					<div className="modal-content">
						<img
							className=""
							src={data.previewImages && data.previewImages[2]}
							width="100%"
							alt="project slide show"
						/>
					</div>
				</div>
			</div>
			{loading ? (
				<div className="text-center loader">
					<div className="spinner-grow" role="status">
						<span className="sr-only">Loading...</span>
					</div>
				</div>
			) : (
				<div className="container mb-5">
					{showNoData ? (
						<div className="container text-center mt-5 mb-5">
							<h1 className="mt-5">404 Not Found</h1>
							<h5 className="mb-5">
								opps! No Data Found, This link might be broken
							</h5>
						</div>
					) : (
						<div>
							<div className="row">
								<div className="col">
									<h1 className="project-preview-title">{data.title}</h1>
								</div>
							</div>

							<div className="row project-category-date">
								<div className=" col project-category-and-date">
									<span className="text-muted project-category">
										<svg
											width="1em"
											height="1em"
											viewBox="0 0 16 16"
											className="bi bi-blockquote-left"
											fill="currentColor"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm5 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
											/>
											<path d="M3.734 6.352a6.586 6.586 0 0 0-.445.275 1.94 1.94 0 0 0-.346.299 1.38 1.38 0 0 0-.252.369c-.058.129-.1.295-.123.498h.282c.242 0 .431.06.568.182.14.117.21.29.21.521a.697.697 0 0 1-.187.463c-.12.14-.289.21-.503.21-.336 0-.577-.108-.721-.327C2.072 8.619 2 8.328 2 7.969c0-.254.055-.485.164-.692.11-.21.242-.398.398-.562.16-.168.33-.31.51-.428.18-.117.33-.213.451-.287l.211.352zm2.168 0a6.588 6.588 0 0 0-.445.275 1.94 1.94 0 0 0-.346.299c-.113.12-.199.246-.257.375a1.75 1.75 0 0 0-.118.492h.282c.242 0 .431.06.568.182.14.117.21.29.21.521a.697.697 0 0 1-.187.463c-.12.14-.289.21-.504.21-.335 0-.576-.108-.72-.327-.145-.223-.217-.514-.217-.873 0-.254.055-.485.164-.692.11-.21.242-.398.398-.562.16-.168.33-.31.51-.428.18-.117.33-.213.451-.287l.211.352z" />
										</svg>{" "}
										{data.category}
									</span>

									<span className="text-muted project-date">
										<svg
											width="1em"
											height="1em"
											viewBox="0 0 16 16"
											className="bi bi-calendar-check"
											fill="currentColor"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
											/>
											<path
												fillRule="evenodd"
												d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"
											/>
										</svg>{" "}
										{moment(data.createdAt).format("Do MMM YY")}
									</span>
								</div>
							</div>
							<hr />
							<div className="row mb-3">
								<div className="col-lg-8 col-12 pb-3">
									<img
										className="project-preview-image"
										src={data.previewImages && data.previewImages[0]}
										width="100%"
										alt="project slide show"
										data-toggle="modal"
										data-target="#first-preview-image"
									/>
								</div>
								<div className="col-lg-4 col-12">
									<div className="row">
										<div className="col-lg-12 col-6 mb-3">
											<img
												className="project-preview-image"
												src={data.previewImages && data.previewImages[1]}
												width="100%"
												alt="project slide show"
												data-toggle="modal"
												data-target="#second-preview-image"
											/>
										</div>
										<div className="col-lg-12 col-6">
											<img
												className="project-preview-image"
												src={data.previewImages && data.previewImages[2]}
												width="100%"
												alt="project slide show"
												data-toggle="modal"
												data-target="#third-preview-image"
											/>
										</div>
									</div>
								</div>
							</div>

							<div className="row">
								<div className="col-lg-8 col-12 p-2">
									<div className="card mb-3 project-details-card">
										<div className="card-body">
											<h3 className="project-preview-description">
												Project Description
											</h3>
											<p className="project-preview-description">
												{data.description}
											</p>
											<hr />
											<div className="row">
												<div className="col">
													<h3 className="project-preview-functionality-title">
														Functionality
													</h3>
													<div className="project-badge functionality-badge">
														{data.functionalities &&
															data.functionalities.map(
																(functionality, index) => {
																	return (
																		<span
																			key={index}
																			className="badge project-card-badge badge-light m-2"
																		>
																			{functionality}
																		</span>
																	);
																}
															)}
													</div>
												</div>
												<div className="col">
													<h3 className="project-preview-frameworks-title">
														Frameworks
													</h3>
													<div className="project-badge framework-badge">
														{data.frameworks &&
															data.frameworks.map((framework, index) => {
																return (
																	<span
																		key={index}
																		className="badge project-card-badge badge-light m-2"
																	>
																		{framework}
																	</span>
																);
															})}
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-12 text-center view-project-card p-2">
									<div className="card project-details-card">
										<div className="card-body">
											<h3>View Project</h3>
											<hr />
											<p className="mb-3">
												Have a live preview of this project
											</p>
											<a
												href={data.previewLink}
												className="btn btn-block btn-primary project-preview-button"
											>
												<svg
													width="1em"
													height="1em"
													viewBox="0 0 16 16"
													className="bi bi-app-indicator"
													fill="currentColor"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														fillRule="evenodd"
														d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"
													/>
													<path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
												</svg>{" "}
												Preview
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			)}
		</div>
	);
}

export default ProjectDetails;
