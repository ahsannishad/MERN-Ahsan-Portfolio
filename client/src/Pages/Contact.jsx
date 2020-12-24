import React, { Fragment } from "react";
import { useState } from "react";
import axios from "axios";
import SubHeading from "../Components/SubHeading";

import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";
import "animate.css/animate.min.css";

function Contact() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const [loading, setLoading] = useState(false);

	function submitHandler(event) {
		event.preventDefault();
		setLoading(true);

		axios
			.post("/api/messages", { name, email, message })
			.then((res) => {
				setName("");
				setEmail("");
				setMessage("");
				setLoading(false);
				showAlert({
					title: "Success",
					message: "Message Sent Successfully",
					version: "success",
				});
			})
			.catch((error) => {
				setLoading(false);
				showAlert({
					title: "Error!",
					message: error.message,
					version: "danger",
				});
			});
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
			<div className="container text-center mt-5 mb-5">
				<div className="container">
					<div className="row">
						<div className="col-sm-6 text-center mt-4 mb-4">
							<img
								className="mb-4 avatar"
								src="https://scontent.fdac41-1.fna.fbcdn.net/v/t1.0-9/123674333_1218376621882766_4037199215118466441_o.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=ioYj518qiAEAX9aw1_u&_nc_ht=scontent.fdac41-1.fna&oh=e57d3c5683c80d17e71492e0adf6930d&oe=60002D75"
								alt="avatar"
							/>

							<h2 className="name">Ahsan Nishad</h2>
							<SubHeading SubHeading="Hey, are you reading my bio again?" />
							<SubHeading SubHeading="ahsannishad@gmail.com" />
							<ul className="social-icons">
								<li>
									<a
										className="facebook"
										href="https://www.facebook.com/ahsannishad"
									>
										<i className="fa fa-facebook"></i>
									</a>
								</li>
								<li>
									<a
										className="twitter"
										href="https://twitter.com/ahsan_nishad"
									>
										<i className="fa fa-twitter"></i>
									</a>
								</li>
								<li>
									<a
										className="dribbble"
										href="https://dribbble.com/ahsannishad"
									>
										<i className="fa fa-dribbble"></i>
									</a>
								</li>
								<li>
									<a
										className="linkedin"
										href="https://www.instagram.com/ahsannishad.official"
									>
										<i className="fa fa-instagram"></i>
									</a>
								</li>
							</ul>
						</div>
						<div className="col-sm-6 mt-5 text-center contact-form-column ">
							<div className="contact-form-box mt-2">
								<form className="contact-form" onSubmit={submitHandler}>
									<h6 className="contact-form-heading">
										Send me a message
										<br />
										<br />
									</h6>
									<div className="row form-group">
										<div className="col">
											<input
												maxLength="100"
												type="text"
												className="form-control"
												placeholder="Full name"
												value={name}
												required
												onChange={(event) => {
													setName(event.target.value);
												}}
											/>
										</div>
									</div>
									<div className="row form-group">
										<div className="col">
											<input
												type="email"
												className="form-control"
												placeholder="Email"
												value={email}
												maxLength="100"
												required
												onChange={(event) => {
													setEmail(event.target.value);
												}}
											/>
										</div>
									</div>
									<div className="row form-group">
										<div className="col">
											<textarea
												type="text"
												className="form-control"
												placeholder="Whats your curse?"
												value={message}
												required
												maxLength="500"
												onChange={(event) => {
													setMessage(event.target.value);
												}}
											/>
										</div>
									</div>
									<div className="row form-group">
										<div className="col">
											{loading ? (
												<button
													className="btn btn-dark btn-block"
													type="button"
													disabled
												>
													<i className="fas fa-paper-plane"></i> Sending...
												</button>
											) : (
												<button
													type="submit"
													className="btn btn-dark btn-block"
												>
													<i className="fas fa-paper-plane"></i> Send
												</button>
											)}
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default Contact;
