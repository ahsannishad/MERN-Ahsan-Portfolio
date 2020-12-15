import React, { Fragment, useState } from "react";
import AdminHeader from "../Components/AdminHeader";
import SideBar from "../Components/SideBar";
import { fireStorage } from "./../Firebase/config";
import axios from "axios";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";
import "animate.css/animate.min.css";
import Imageplaceholder from "./../Assets/Images/picture1.svg";

function AddProject() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [category, setCategory] = useState("");
	const [images, setImages] = useState([]);
	const [imagesURL, setImagesURL] = useState([]);
	const [previewUrl, setPreviewUrl] = useState("");
	const [functionalities, setFunctionalities] = useState([]);
	const [functionality, setFunctionality] = useState("");
	const [frameworks, setFrameworks] = useState([]);
	const [framework, setFramework] = useState("");
	const imageTypes = ["image/png", "image/jpeg", "image/jpg"];

	const [publishing, setPublishing] = useState(false);
	const [previewImages, setPreviewImages] = useState([]);

	const payload = {
		title,
		description,
		category,
		functionalities,
		frameworks,
		previewImages: imagesURL,
		previewLink: previewUrl,
	};

	async function handleSubmit(event) {
		event.preventDefault();
		setPublishing(true);

		if (images.length < 3) {
			setPublishing(false);
			showAlert({
				title: "Attention!",
				message: "Please select minimum 3 Images",
				version: "warning",
			});
		} else if (!functionalities.length) {
			setPublishing(false);
			showAlert({
				title: "Attention!",
				message: "Please Add Some Functionality",
				version: "warning",
			});
		} else if (!frameworks.length) {
			setPublishing(false);
			showAlert({
				title: "Attention!",
				message: "Please Add Some Frameworks",
				version: "warning",
			});
		} else {
			try {
				//first references
				const firstImageRef = fireStorage.ref(images[0].name);
				const uploadFirstImage = await firstImageRef.put(images[0]);
				const firstImageUrl = await firstImageRef.getDownloadURL();
				setImagesURL((previousImage) => previousImage.concat(firstImageUrl));

				//second references
				const secondImageRef = fireStorage.ref(images[1].name);
				const uploadSecondImage = await secondImageRef.put(images[1]);

				const secondImageUrl = await secondImageRef.getDownloadURL();

				setImagesURL((previousImages) => previousImages.concat(secondImageUrl));

				//third references
				const thirdImageRef = fireStorage.ref(images[2].name);
				const uploadThirdImage = await thirdImageRef.put(images[2]);

				const thirdImageUrl = await thirdImageRef.getDownloadURL();
				setImagesURL((previousPreviewImages) =>
					previousPreviewImages.concat(thirdImageUrl)
				);

				const res = await axios.post("/api/projects", payload);

				if (res.status === 200) {
					showAlert({
						title: "Success!",
						message: "Project Saved successfully into database",
						version: "success",
					});

					setPublishing(false);
				} else {
					showAlert({
						title: "Error!",
						message: "Something went wrong while saving the project",
						version: "danger",
					});
					setPublishing(false);
				}
			} catch (error) {
				setPublishing(false);
				showAlert({
					title: "Error!",
					message: error.message,
					version: "danger",
				});
			}
		}
	}

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
						<form onSubmit={handleSubmit}>
							<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
								<h1 className="h2">Add Project</h1>
								<div className="btn-toolbar mb-2 mb-md-0">
									{publishing ? (
										<button
											type="button"
											className="btn btn-sm btn-dark"
											disabled
										>
											Publishing{" "}
											<div
												className="spinner-border spinner-border-sm text-light"
												role="status"
											>
												<span className="sr-only">Loading...</span>
											</div>
										</button>
									) : (
										<button type="submit" className="btn btn-sm btn-dark">
											<svg
												width="1em"
												height="1em"
												viewBox="0 0 16 16"
												className="bi bi-folder-symlink"
												fill="currentColor"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M9.828 4a3 3 0 0 1-2.12-.879l-.83-.828A1 1 0 0 0 6.173 2H2.5a1 1 0 0 0-1 .981L1.546 4h-1L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3v1z" />
												<path
													fillRule="evenodd"
													d="M13.81 4H2.19a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zM2.19 3A2 2 0 0 0 .198 5.181l.637 7A2 2 0 0 0 2.826 14h10.348a2 2 0 0 0 1.991-1.819l.637-7A2 2 0 0 0 13.81 3H2.19z"
												/>
												<path d="M8.616 10.24l3.182-1.969a.443.443 0 0 0 0-.742l-3.182-1.97c-.27-.166-.616.036-.616.372V6.7c-.857 0-3.429 0-4 4.8 1.429-2.7 4-2.4 4-2.4v.769c0 .336.346.538.616.371z" />
											</svg>{" "}
											Publish
										</button>
									)}
								</div>
							</div>

							<div className="container mb-5">
								<div className="row">
									<div className="col-lg-8 col-12 p-1">
										<input
											onChange={(event) => {
												setTitle(event.target.value);
											}}
											value={title}
											type="text"
											className="form-control"
											placeholder="Tittle..."
											name="title"
											required
										/>
									</div>
									<div className="col-lg-4 col-12 p-1">
										<select
											onChange={(event) => {
												setCategory(event.target.value);
											}}
											value={category}
											className="custom-select"
											required
										>
											<option value="">Select Category...</option>
											<option value="E-comerce">E-comerce</option>
											<option value="Business">Business</option>
											<option value="Product">Product</option>
											<option value="Blog">Blog</option>
											<option value="Magazine">Magazine</option>
											<option value="Education">Education</option>
											<option value="Portfolio">Portfolio</option>
										</select>
									</div>
								</div>
								<button
									type="button"
									onClick={(event) => {
										setImages([]);
										setImagesURL([]);
										setPreviewImages([]);
									}}
									className="btn btn-sm btn-dark remove-image-button"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										className="bi bi-x"
										viewBox="0 0 16 16"
									>
										<path
											fillRule="evenodd"
											d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
										/>
									</svg>
								</button>
								<div className="row project-image">
									<div className="col-lg-8 col-12 p-2">
										{previewImages[0] ? (
											<img
												className="project-preview-image"
												src={previewImages[0]}
												width="100%"
												alt="project slide show"
											/>
										) : (
											<div className="project-image1-div">
												<img
													width="100%"
													height="450px"
													src={Imageplaceholder}
													alt="svg"
												/>
											</div>
										)}
										<input
											accept="image/png, image/jpeg,image/gif"
											onChange={(event) => {
												const selectedFiles = Array.from(event.target.files);

												if (selectedFiles) {
													if (selectedFiles.length < 3) {
														showAlert({
															title: "Error!",
															message: "Minimum 3 images are reacquired",
															version: "danger",
														});
													} else if (selectedFiles.length > 3) {
														showAlert({
															title: "Error!",
															message: "You can only selelct 3 images",
															version: "danger",
														});
													} else if (
														!imageTypes.includes(selectedFiles[0].type)
													) {
														showAlert({
															title: "Error!",
															message:
																"File Must be an image file png,jpg or gif",
															version: "danger",
														});
													} else if (
														!imageTypes.includes(selectedFiles[1].type)
													) {
														showAlert({
															title: "Error!",
															message:
																"File Must be an image file png,jpg or gif",
															version: "danger",
														});
													} else if (
														!imageTypes.includes(selectedFiles[2].type)
													) {
														showAlert({
															title: "Error!",
															message:
																"File Must be an image file png,jpg or gif",
															version: "danger",
														});
													} else {
														const filesArray = Array.from(
															event.target.files
														).map((file) => URL.createObjectURL(file));

														setPreviewImages((prevImages) =>
															prevImages.concat(filesArray)
														);
														Array.from(event.target.files).map(
															(file) => URL.revokeObjectURL(file) // avoid memory leak
														);

														setImages(selectedFiles);
													}
												}
											}}
											type="file"
											id="project-image-selector-input"
											className="custom-project-image-input"
											multiple
										/>
										<label
											htmlFor="project-image-selector-input"
											className="custom-project-image-label"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												className="bi bi-camera-fill"
												viewBox="0 0 16 16"
											>
												<path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
												<path
													fillRule="evenodd"
													d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"
												/>
											</svg>{" "}
											Choose Image
										</label>
									</div>
									<div className="col-lg-4 col-12 p-2">
										<div className="row">
											<div className="col-lg-12 col-6 mb-3">
												{previewImages[1] ? (
													<img
														className="project-preview-image"
														src={previewImages[1]}
														width="100%"
														alt="project slide show"
													/>
												) : (
													<div className="project-image2-div">
														<img
															width="100%"
															height="215px"
															src={Imageplaceholder}
															alt="svg"
														/>
													</div>
												)}
											</div>
											<div className="col-lg-12 col-6 ">
												{previewImages[2] ? (
													<img
														className="project-preview-image"
														src={previewImages[2]}
														width="100%"
														alt="project slide show"
													/>
												) : (
													<div className="project-image3-div">
														<img
															width="100%"
															height="215px"
															src={Imageplaceholder}
															alt="svg"
														/>
													</div>
												)}
											</div>
										</div>
									</div>
								</div>
								<div className="row mt-2">
									<div className="col-lg-8 col-12 p-1">
										<textarea
											required
											onChange={(event) => {
												setDescription(event.target.value);
											}}
											value={description}
											rows="1"
											type="text"
											className="form-control"
											placeholder="Description..."
											name="description"
										/>
									</div>
									<div className="col-lg-4 col-12 p-1">
										<input
											required
											onChange={(event) => {
												setPreviewUrl(event.target.value);
											}}
											value={previewUrl}
											type="text"
											className="form-control"
											placeholder="Preview URL"
											name="previewUrl"
										/>
									</div>
								</div>

								<div className="row">
									<div className="col-lg-6 col-12 p-1">
										<div className="input-group mb-2">
											<input
												value={functionality}
												onChange={(event) => {
													setFunctionality(event.target.value);
												}}
												type="text"
												className="form-control"
												placeholder="functionalities..."
												name="functionalities"
											/>
											<div className="input-group-append">
												<button
													onClick={(event) => {
														setFunctionality("");
														setFunctionalities((prevFunctionality) => {
															return [...prevFunctionality, functionality];
														});
													}}
													type="button"
													className="btn btn-primary"
													id="button-addon"
												>
													Add
												</button>
											</div>
										</div>

										<div>
											{functionalities &&
												functionalities.map((functionality, index) => {
													return (
														<span
															className="badge badge-primary m-2 p-2"
															key={index}
														>
															{functionality}
														</span>
													);
												})}
										</div>
									</div>
									<div className="col-lg-6 col-12 p-1">
										<div className="input-group mb-2">
											<input
												value={framework}
												onChange={(event) => {
													setFramework(event.target.value);
												}}
												type="text"
												className="form-control"
												placeholder="Frameworks..."
												name="frameworks"
											/>
											<div className="input-group-append">
												<button
													onClick={(event) => {
														setFramework("");
														setFrameworks((prevFramework) => {
															return [...prevFramework, framework];
														});
													}}
													type="button"
													className="btn btn-warning"
													id="button-addon2"
												>
													Add
												</button>
											</div>
										</div>

										<div>
											{frameworks &&
												frameworks.map((framework, index) => {
													return (
														<span
															className="badge badge-warning m-2 p-2"
															key={index}
														>
															{framework}
														</span>
													);
												})}
										</div>
									</div>
								</div>
							</div>
						</form>
					</main>
				</div>
			</div>
		</Fragment>
	);
}

export default AddProject;
