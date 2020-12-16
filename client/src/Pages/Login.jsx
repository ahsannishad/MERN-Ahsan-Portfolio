import React, { useState } from "react";
import { Redirect } from "react-router-dom";

function Login(props) {
	// const [user, setUser] = useState(true);
	// if (user) {
	// 	console.log(props);
	// 	// return <Redirect to={props.location.state.from} />;
	// } else {
	return (
		<div className="text-center mt-5">
			<form className="form-signin mt-5 pt-5">
				<h1 className="h3 mb-3 font-weight-normal mt-5 mb-2 pt-5">
					Please sign in
				</h1>
				<label htmlFor="inputEmail" className="sr-only">
					Email address
				</label>
				<input
					type="email"
					id="inputEmail"
					className="form-control"
					placeholder="Email address"
					required
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
				/>
				<div className="checkbox mb-3"></div>
				<button className="btn btn-lg btn-dark btn-block" type="submit">
					Sign in
				</button>
				<p className="mt-5 mb-3 text-muted">&copy; Ahsan all right reserved</p>
			</form>
		</div>
	);
	// }
}

export default Login;
