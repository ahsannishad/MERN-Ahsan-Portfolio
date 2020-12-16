import React, { Fragment } from "react";
import Navbar from "../Components/Navbar";

function NotFound() {
	return (
		<Fragment>
			<Navbar />
			<div className="container mt-5 text-center">
				<h1>404 NotFound</h1>
				<p>Opps! It's look like you are lost</p>
			</div>
		</Fragment>
	);
}

export default NotFound;
