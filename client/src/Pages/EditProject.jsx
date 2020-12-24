import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AdminHeader from "../Components/AdminHeader";
import SideBar from "../Components/SideBar";
import { fireStorage } from "./../Firebase/config";
import axios from "axios";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";
import "animate.css/animate.min.css";
import Imageplaceholder from "./../Assets/Images/picture1.svg";

function EditProject() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [category, setCategory] = useState("");
	const [imagesURL, setImagesURL] = useState([]);
	const [previewUrl, setPreviewUrl] = useState("");
	const [functionalities, setFunctionalities] = useState([]);
	const [functionality, setFunctionality] = useState("");
	const [frameworks, setFrameworks] = useState([]);
	const [framework, setFramework] = useState("");

	const [imagesRefer, setImagesRefer] = useState([]);
	const imageTypes = ["image/png", "image/jpeg", "image/jpg", "image/gif"];

	const [publishing, setPublishing] = useState(false);
	const [previewImages, setPreviewImages] = useState([]);
	const [uploadingImages, setUploadingImages] = useState(false);
	const [uploadingImagesSnap, setUploadingImagesSnap] = useState(
		"Uploading Images"
	);
	const { id } = useParams();

	function handleSubmit(event) {
		event.preventDefault();
		setPublishing(true);

		if (imagesURL.length < 3) {
			setPublishing(false);
			showAlert({
				title: "Attention!",
				message: "3 Images are required",
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
			axios
				.put(`/api/projects/${id}`, {
					title,
					description,
					category,
					functionalities,
					frameworks,
					imagesRefer,
					previewImages: imagesURL,
					previewLink: previewUrl,
				})
				.then((res) => {
					setPublishing(false);
					showAlert({
						title: "Success!",
						message: "Successfully Saved the project",
						version: "success",
					});
				})
				.catch((error) => {
					setPublishing(false);
					showAlert({
						title: "Error!",
						message: error.message,
						version: "danger",
					});
				});
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

	useEffect(() => {
		let isMounted = true;
		axios.get(`/api/projects/${id}`).then((res) => {
			if (isMounted) {
				setTitle(res.data[0].title);
				setCategory(res.data[0].category);
				setDescription(res.data[0].description);
				setPreviewUrl(res.data[0].previewLink);
				setFrameworks(res.data[0].frameworks);
				setFunctionalities(res.data[0].functionalities);
				setPreviewImages(res.data[0].previewImages);
				setImagesURL(res.data[0].previewImages);
			}
		});
		return () => {
			isMounted = false;
		};
	}, [id]);

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
											Saving{" "}
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
											Save
										</button>
									)}
								</div>
							</div>

							<div className="container-fluid mb-5">
								<div className="row">
									<div className="col-lg-8 col-12 p-1">
										<input
											onChange={(event) => {
												setTitle(event.target.value);
											}}
											value={title}
											type="text"
											className="form-control add-project-input"
											placeholder="Tittle..."
											name="title"
											required
											maxLength="100"
										/>
									</div>
									<div className="col-lg-4 col-12 p-1">
										<select
											onChange={(event) => {
												setCategory(event.target.value);
											}}
											value={category}
											className="custom-select add-project-input"
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
										setImagesURL([]);
										setPreviewImages([]);
										setImagesRefer([]);
										setUploadingImages(false);
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
									<div className="col-lg-8 col-12 p-2 project-image-selector">
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
															message: "Minimum 3 images are required",
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
														setUploadingImages(true);

														const filesArray = Array.from(
															event.target.files
														).map((file) => URL.createObjectURL(file));

														setPreviewImages((prevImages) =>
															prevImages.concat(filesArray)
														);
														Array.from(event.target.files).map(
															(file) => URL.revokeObjectURL(file) // avoid memory leak
														);

														//setting images Refer
														selectedFiles.map((imageRefer) => {
															return imagesRefer.push(imageRefer.name);
														});

														//first image references
														const firstImagestorageRef = fireStorage.ref(
															selectedFiles[0].name
														);

														firstImagestorageRef.put(selectedFiles[0]).on(
															"state_changed",
															(snap) => {
																let percentage = Math.floor(
																	(snap.bytesTransferred / snap.totalBytes) *
																		100
																);
																setUploadingImagesSnap(
																	`First Image ${percentage} %`
																);
															},
															(error) => {
																console.log(error);
															},
															async () => {
																const url = await firstImagestorageRef.getDownloadURL();
																setImagesURL((previousImage) => {
																	return [...previousImage, url];
																});
															}
														);

														//second image ref
														const secondImagestorageRef = fireStorage.ref(
															selectedFiles[1].name
														);

														secondImagestorageRef.put(selectedFiles[1]).on(
															"state_changed",
															(snap) => {
																let percentage = Math.floor(
																	(snap.bytesTransferred / snap.totalBytes) *
																		100
																);
																setUploadingImagesSnap(
																	`Second Image ${percentage} %`
																);
															},
															(error) => {
																console.log(error);
															},
															async () => {
																const url = await secondImagestorageRef.getDownloadURL();
																setImagesURL((previousImages) => {
																	return [...previousImages, url];
																});
															}
														);

														//third image ref
														const thirdImagestorageRef = fireStorage.ref(
															selectedFiles[2].name
														);

														thirdImagestorageRef.put(selectedFiles[2]).on(
															"state_changed",
															(snap) => {
																let percentage = Math.floor(
																	(snap.bytesTransferred / snap.totalBytes) *
																		100
																);
																setUploadingImagesSnap(
																	`Third Image ${percentage} %`
																);
															},
															(error) => {
																console.log(error);
															},
															async () => {
																await thirdImagestorageRef
																	.getDownloadURL()
																	.then((url) => {
																		setImagesURL((previoustwoImages) => {
																			return [...previoustwoImages, url];
																		});
																	});
															}
														);
													}
												}
											}}
											type="file"
											id="project-image-selector-input"
											className="custom-project-image-input"
											multiple
										/>

										{uploadingImages ? (
											<div className="image-upload">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													fill="currentColor"
													className="bi bi-cloud-check-fill"
													viewBox="0 0 16 16"
												>
													<path
														fillRule="evenodd"
														d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 4.854a.5.5 0 0 0-.708-.708L7 8.793 5.854 7.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"
													/>
												</svg>{" "}
												{imagesURL.length === 3
													? "Images Uploaded"
													: uploadingImagesSnap}
											</div>
										) : (
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
										)}
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
								<div className="row mb-2">
									<div className="col-lg-8 col-12 p-1 ">
										<input
											required
											maxLength="200"
											onChange={(event) => {
												setDescription(event.target.value);
											}}
											value={description}
											type="text"
											className="form-control add-project-input"
											placeholder="Description..."
											name="description"
										/>
									</div>
									<div className="col-lg-4 col-12 p-1">
										<input
											required
											maxLength="100"
											onChange={(event) => {
												setPreviewUrl(event.target.value);
											}}
											value={previewUrl}
											type="text"
											className="form-control add-project-input"
											placeholder="Preview URL"
											name="previewUrl"
										/>
									</div>
								</div>

								<div className="row">
									<div className="col-lg-6 col-12 p-1">
										<div className="input-group mb-2">
											<input
												maxLength="30"
												value={functionality}
												onChange={(event) => {
													setFunctionality(event.target.value);
												}}
												type="text"
												className="form-control add-project-input"
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
													className="btn btn-primary add-btn"
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
												maxLength="30"
												onChange={(event) => {
													setFramework(event.target.value);
												}}
												type="text"
												className="form-control add-project-input"
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
													className="btn btn-dark add-btn"
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
															className="badge badge-light project-card-badge m-2 p-2"
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

export default EditProject;
