import React from "react";
import Thumbnail1 from "./../Assets/Images/Image4.webp";
import Thumbnail2 from "./../Assets/Images/Image2.jpg";
import Thumbnail3 from "./../Assets/Images/Image7.webp";

function ProjectDetails() {
	return (
		<div className="mt-5 mb-5">
			<div className="container mb-5">
				<div className="row">
					<div className="col">
						<h1 className="project-preview-title">
							Lorem ipsum dolor sit amet consectetur adipiscingelit blandit
							donec congue nibh scelerisque nisi taciti
						</h1>
					</div>
				</div>

				<div className="row">
					<div className="col project-category">
						<p className="card-text">
							<span className="text-muted">
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
								Category
							</span>
						</p>
					</div>
					<div className="col project-date">
						<p className="card-text">
							<span className="text-muted">
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
								02,feb,2020
							</span>
						</p>
					</div>
				</div>
				<hr />
				<div className="row">
					<div className="col-lg-8 col-12 p-2">
						<img
							className="project-preview-image"
							src={Thumbnail1}
							width="100%"
							alt="project slide show"
						/>
					</div>
					<div className="col-lg-4 col-12 p-2">
						<div className="row">
							<div className="col-lg-12 col-6 mb-3">
								<img
									className="project-preview-image"
									src={Thumbnail2}
									width="100%"
									alt="project slide show"
								/>
							</div>
							<div className="col-lg-12 col-6">
								<img
									className="project-preview-image"
									src={Thumbnail3}
									width="100%"
									alt="project slide show"
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="row mb-3 mt-3">
					<div className="col">
						<p className="project-preview-description">
							Lorem ipsum dolor sit amet consectetur adipiscing elit, senectus
							dis vitae ullamcorper sociosqu porttitor curabitur, interdum nibh
							elementum auctor eleifend etiam. Volutpat ultricies no n magnis
							sem class pharetra primis proin, parturient luctus lacus aliquam
							libero inceptos nam, fringilla torquent fusce felis a enim nulla.
							Viverra dignissim risus varius himenaeos phasellus tempor ornare
							erat, hendrerit vel neque egestas donec urna quis luctusLorem
							ipsum dolor sit amet consectetur adipiscing elit, massa proin
							sollicitudin ad ultricies dignissim, ultrices ele ifend parturient
							gravida lacus elementum. Viverra sagittis hac ac dictum fringilla
							montes eros porta nisl habitant, aliquam conubia leo morbi rhoncus
							inceptos faucibus penatibus nascetur
						</p>
					</div>
				</div>

				<div className="row">
					<div className="col-lg-8 col-12">
						<h1 className="project-preview-functionality-title">
							Functionality and Framework used
						</h1>
						<div className="col functionality-badge">
							<div className="project-badge">
								<span className="badge project-card-badge badge-light m-2">
									MERN CRUD
								</span>
								<span className="badge project-card-badge badge-light m-2">
									Image Upload
								</span>
								<span className="badge project-card-badge badge-light m-2">
									Autentication
								</span>
							</div>
						</div>
						<div className="col framework-badge">
							<div className="project-badge">
								<span className="badge project-card-badge badge-light m-2">
									React JS
								</span>
								<span className="badge project-card-badge badge-light m-2">
									Node JS
								</span>
								<span className="badge project-card-badge badge-light m-2">
									Mongo DB
								</span>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-12 mt-5 text-center view-project-card">
						<div className="card-body text-center border rounded-lg">
							<h1 className="card-title">View Project</h1>
							<div className="row">
								<div className="col mb-4">
									<button type="button" className="btn btn-dark m-1">
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
										</svg>
									</button>

									<button type="button" className="btn btn-danger m-1">
										<svg
											width="1em"
											height="1em"
											viewBox="0 0 16 16"
											className="bi bi-link"
											fill="currentColor"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
											<path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
										</svg>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectDetails;
