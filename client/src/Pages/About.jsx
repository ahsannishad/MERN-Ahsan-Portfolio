import React from "react";

function About() {
	return (
		<div>
			<div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
				<div className="col-md-5 p-lg-5 mx-auto my-5">
					<h1 className="display-4 font-weight-normal">Hi, I am Ahsan</h1>
					<p className="lead font-weight-normal">
						a webdeveloper and google certified digital marketing expart from
						Dhaka, Bangladesh
					</p>
					<button className="btn btn-outline-dark btn-sm">Contact Me</button>
				</div>
				<div className="product-device shadow-sm d-none d-md-block"></div>
				<div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
			</div>
			<div className="container"></div>
		</div>
	);
}

export default About;
