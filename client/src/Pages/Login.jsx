import React from "react";

function Login() {
	return (
		<div className="text-center mt-5">
			<form className="form-signin mt-5">
				<img
					className="mb-4 mt-5"
					src="../assets/brand/bootstrap-solid.svg"
					alt=""
					width="72"
					height="72"
				/>
				<h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
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
}

export default Login;
