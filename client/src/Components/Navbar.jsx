import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { userContext } from "./../Components/userContext";
import axios from "axios";

function Navbar() {
	const { user, setUser } = useContext(userContext);

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
			<div className="container">
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
							<NavLink
								activeClassName="active-menu"
								className="nav-link"
								to="/"
							>
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
								to="/contact"
							>
								Contact
							</NavLink>
						</li>
					</ul>
					{user && (
						<ul className="navbar-nav ml-auto public-logout-btn">
							<li className="nav-item">
								<button
									type="button"
									className="btn btn-dark btn-sm"
									onClick={() => {
										axios.post("/api/user/logout").then((res) => {
											setUser(false);
										});
									}}
								>
									Logout
								</button>
							</li>
						</ul>
					)}
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
