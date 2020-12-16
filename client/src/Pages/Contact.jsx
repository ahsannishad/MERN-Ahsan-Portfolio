import React from "react";
import { useState } from "react";
import SubHeading from "../Components/SubHeading";

function Contact() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const [loading, setLoading] = useState(false);

	function submitHandler(event) {
		event.preventDefault();
		setLoading(true);
	}
	return (
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
						<div className="social-icons">
							<a href="https://www.facebook.com/ahsannishad">
								<i className="fab fa-facebook-square contact-social-icon"></i>
							</a>

							<a href="https://www.instagram.com/ahsannishad.official">
								<i className="fab fa-instagram contact-social-icon"></i>
							</a>
							<a href="https://www.twitter.com/ahan_nishad">
								<i className="fab fa-twitter-square contact-social-icon"></i>
							</a>
							<a href="https://www.github.com/ahsannishad">
								<i className="fab fa-github-square contact-social-icon"></i>
							</a>
						</div>
					</div>
					<div className="col-sm-6 mt-5 text-center contact-form-column ">
						<div className="contact-form-box mt-5">
							<form className="contact-form" onSubmit={submitHandler}>
								<h6 className="contact-form-heading mb-4">
									Send me a message and I won't read it. I promise
									<br />
									<br />
									Hahhaha just kidding
								</h6>
								<div className="row form-group">
									<div className="col">
										<input
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
												className="btn btn-primary"
												type="button"
												disabled
											>
												<i className="fas fa-paper-plane"></i> Sending...
											</button>
										) : (
											<button
												type="submit"
												className="btn btn-primary btn-block"
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
	);
}

export default Contact;
