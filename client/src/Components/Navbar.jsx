import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
			<NavLink activeClassName="active-menu" className="navbar-brand" to="/">
				Ahsan
			</NavLink>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">
					<li className="nav-item">
						<NavLink activeClassName="active-menu" className="nav-link" to="/">
							Home <span className="sr-only">(current)</span>
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							activeClassName="active-menu"
							className="nav-link"
							to="/projects"
						>
							Projects
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							activeClassName="active-menu"
							className="nav-link"
							to="/blogs"
						>
							Blogs
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							activeClassName="active-menu"
							className="nav-link"
							to="/about"
						>
							About
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							activeClassName="active-menu"
							className="nav-link"
							to="/contact"
						>
							Contact
						</NavLink>
					</li>
				</ul>
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<button type="button" className="btn btn-outline-dark btn-sm">
							Logout
						</button>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
