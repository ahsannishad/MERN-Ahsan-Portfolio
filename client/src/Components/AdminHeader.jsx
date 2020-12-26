import React, { useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { userContext } from "./../Components/userContext";

function AdminHeader() {
	const { setUser } = useContext(userContext);

	return (
		<nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
			<Link
				className="navbar-brand navbar-admin-brand col-md-3 col-lg-2 mr-0 px-3"
				to="/"
			>
				Ahsan
			</Link>

			<ul className="navbar-nav px-3 signout-button">
				<li className="nav-item text-nowrap">
					<button
						style={{ backgroundColor: "#343a40" }}
						className="btn btn-dark"
						onClick={() => {
							axios.post("/api/user/logout").then((res) => {
								setUser(false);
							});
						}}
					>
						Sign out
					</button>
				</li>
			</ul>

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
