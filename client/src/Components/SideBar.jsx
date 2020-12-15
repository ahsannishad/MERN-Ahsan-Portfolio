import React from "react";
import { NavLink } from "react-router-dom";
function SideBar() {
	return (
		<nav
			id="sidebarMenu"
			className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
		>
			<div className="sidebar-sticky pt-3">
				<ul className="nav flex-column">
					<li className="nav-item">
						<NavLink
							activeClassName="active-nav"
							className="nav-link"
							to="/dashboard"
						>
							<svg
								width="1em"
								height="1em"
								viewBox="0 0 16 16"
								className="bi bi-columns-gap"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M6 1H1v3h5V1zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm14 12h-5v3h5v-3zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5zM6 8H1v7h5V8zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H1zm14-6h-5v7h5V1zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-5z"
								/>
							</svg>{" "}
							Dashboard
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							activeClassName="active-nav"
							className="nav-link"
							to="/manage-projects"
						>
							<svg
								width="1em"
								height="1em"
								viewBox="0 0 16 16"
								className="bi bi-folder"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M9.828 4a3 3 0 0 1-2.12-.879l-.83-.828A1 1 0 0 0 6.173 2H2.5a1 1 0 0 0-1 .981L1.546 4h-1L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3v1z" />
								<path
									fillRule="evenodd"
									d="M13.81 4H2.19a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zM2.19 3A2 2 0 0 0 .198 5.181l.637 7A2 2 0 0 0 2.826 14h10.348a2 2 0 0 0 1.991-1.819l.637-7A2 2 0 0 0 13.81 3H2.19z"
								/>
							</svg>{" "}
							Projects
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							activeClassName="active-nav"
							className="nav-link"
							to="add-project"
						>
							<svg
								width="1em"
								height="1em"
								viewBox="0 0 16 16"
								className="bi bi-folder-plus"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M9.828 4H2.19a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91H9v1H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181L15.546 8H14.54l.265-2.91A1 1 0 0 0 13.81 4H9.828zm-2.95-1.707L7.587 3H2.19c-.24 0-.47.042-.684.12L1.5 2.98a1 1 0 0 1 1-.98h3.672a1 1 0 0 1 .707.293z"
								/>
								<path
									fillRule="evenodd"
									d="M13.5 10a.5.5 0 0 1 .5.5V12h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V13h-1.5a.5.5 0 0 1 0-1H13v-1.5a.5.5 0 0 1 .5-.5z"
								/>
							</svg>{" "}
							Add Project
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							activeClassName="active-nav"
							className="nav-link"
							to="/manage-blogs"
						>
							<svg
								width="1em"
								height="1em"
								viewBox="0 0 16 16"
								className="bi bi-paragraph"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M8 1h4.5a.5.5 0 0 1 0 1H11v12.5a.5.5 0 0 1-1 0V2H9v12.5a.5.5 0 0 1-1 0V1z"
								/>
								<path d="M9 1v8H7a4 4 0 1 1 0-8h2z" />
							</svg>{" "}
							Blogs
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							activeClassName="active-nav"
							className="nav-link"
							to="/add-blog"
						>
							<svg
								width="1em"
								height="1em"
								viewBox="0 0 16 16"
								className="bi bi-pencil-square"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
								<path
									fillRule="evenodd"
									d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
								/>
							</svg>{" "}
							Add Blog
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							activeClassName="active-nav"
							className="nav-link"
							to="messages"
						>
							<svg
								width="1em"
								height="1em"
								viewBox="0 0 16 16"
								className="bi bi-envelope"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"
								/>
							</svg>{" "}
							Messages
						</NavLink>
					</li>
				</ul>

				<h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
					<span>Saved Pages</span>
				</h6>
				<ul className="nav flex-column mb-2">
					<li className="nav-item">
						<NavLink activeClassName="active-nav" className="nav-link" to="/">
							Home
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							activeClassName="active-nav"
							className="nav-link"
							to="/projects"
						>
							Projects
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							activeClassName="active-nav"
							className="nav-link"
							to="/blogs"
						>
							Blogs
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							activeClassName="active-nav"
							className="nav-link"
							to="/contact"
						>
							Contact
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default SideBar;
