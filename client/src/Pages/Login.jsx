import axios from "axios";
import React, { useState, useContext, Fragment } from "react";
import { Redirect } from "react-router-dom";
import { userContext } from "./../Components/userContext";

import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";
import "animate.css/animate.min.css";

function Login(props) {
	const { user, setUser } = useContext(userContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);

	function handleSubmit(event) {
		event.preventDefault();
		setLoading(true);
		axios
			.post("/api/user/login", { username: email, password: password })
			.then((res) => {
				if (res.status === 200) {
					setUser(true);
				}

				setLoading(false);
			})
			.catch((error) => {
				setLoading(false);
				showAlert({
					title: "Incorrect!",
					message:
						"Incorrect username or password, Please type correct username or password",
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
			container: "top-center",
			animationIn: ["animate__animated", "animate__fadeIn"],
			animationOut: ["animate__animated", "animate__fadeOut"],
			dismiss: {
				duration: 10000,
				onScreen: false,
			},
		});
	}

	if (user) {
		return props.location.state ? (
			<Redirect to={props.location.state.from.pathname} />
		) : (
			<Redirect to="/dashboard" />
		);
	}

	return (
		<Fragment>
			<ReactNotification />
			<div className="container text-center signIn-container">
				<form className="form-signin " onSubmit={handleSubmit}>
					<h1 className="h3 mb-5 font-weight-bold">Please sign in</h1>

					<label htmlFor="inputEmail" className="sr-only">
						Email address
					</label>
					<input
						type="text"
						id="inputEmail"
						className="form-control"
						placeholder="Email address"
						required
						value={email}
						onChange={(event) => {
							setEmail(event.target.value);
						}}
						autoFocus
					/>
					<label htmlFor="inputPassword" className="sr-only">
						Password
					</label>
					<input
						type="password"
						id="inputPassword"
						className="form-control"
						placeholder="Password"
						required
						value={password}
						onChange={(event) => {
							setPassword(event.target.value);
						}}
					/>

					{!loading ? (
						<button className="btn btn-lg btn-dark btn-block" type="submit">
							Login
						</button>
					) : (
						<button
							className="btn btn-lg btn-dark btn-block"
							type="button"
							disabled
						>
							Login...
						</button>
					)}
				</form>

				<footer className="footer mt-auto py-3">
					<div className="container text-center sticky-bottom mb-4 mt-5">
						<span className="text-muted">&copy; Musfique Ahsan Nishad</span>
					</div>
				</footer>
			</div>
		</Fragment>
	);
}

export default Login;
