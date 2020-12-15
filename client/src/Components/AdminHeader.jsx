import React from "react";
import { Link } from "react-router-dom";
function AdminHeader() {
	return (
		<nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
			<Link
				className="navbar-brand navbar-admin-brand col-md-3 col-lg-2 mr-0 px-3"
				to="/"
			>
				Ahsan
			</Link>
			<button
				className="navbar-toggler position-absolute d-md-none collapsed"
				type="button"
				data-toggle="collapse"
				data-target="#sidebarMenu"
				aria-controls="sidebarMenu"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
		</nav>
	);
}

export default AdminHeader;
