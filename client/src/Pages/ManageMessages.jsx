import React, { Fragment, useState, useEffect } from "react";
import AdminHeader from "../Components/AdminHeader";
import SideBar from "../Components/SideBar";
import ManageMessageCard from "../Components/ManageMessageCard";
import moment from "moment";
import axios from "axios";

import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";
import "animate.css/animate.min.css";

function ManageMessages() {
	const [data, setData] = useState([]);

	useEffect(() => {
		let isMounted = true;
		axios.get("/api/messages").then((res) => {
			if (isMounted) {
				setData(res.data);
			}
		});

		return () => {
			isMounted = false;
		};
	}, [data]);

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
							<h1 className="h2">Manage Messages</h1>
							<div className="btn-toolbar mb-2 mb-md-0">
								{data.length ? (
									<button
										type="button"
										className="btn btn-danger"
										data-toggle="modal"
										data-target="#deleteAllMessages"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											className="bi bi-trash-fill"
											viewBox="0 0 16 16"
										>
											<path
												fillRule="evenodd"
												d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"
											/>
										</svg>{" "}
										Delete All
									</button>
								) : null}
								<div
									className="modal fade"
									id="deleteAllMessages"
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
													Delete All Messages
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
												<p>Are you Sure You want to delete all the messages?</p>
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
													className="btn btn-sm btn-danger"
													onClick={(event) => {
														axios
															.delete("/api/messages")
															.then((res) => {
																showAlert({
																	title: "Success!",
																	message: "Successfully deleted All Messages",
																	version: "success",
																});
															})
															.catch((error) => {
																showAlert({
																	title: "Error!",
																	message: error.message,
																	version: "danger",
																});
															});
													}}
												>
													Delete All
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="container-fluid">
							<div className="card-columns">
								{data
									? data.map((message) => {
											return (
												<ManageMessageCard
													key={message._id}
													id={message._id}
													message={message.message}
													name={message.name}
													email={message.email}
													date={moment(message.createdAt).calendar()}
												/>
											);
									  })
									: null}
							</div>
						</div>
					</main>
				</div>
			</div>
		</Fragment>
	);
}

export default ManageMessages;
