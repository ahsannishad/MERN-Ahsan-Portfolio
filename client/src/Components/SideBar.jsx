import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

function SideBar() {
	const [messagesLength, setMessagesLength] = useState("");

	useEffect(() => {
		let isMounted = true;
		axios
			.get("/api/messages")
			.then((res) => {
				if (isMounted) {
					setMessagesLength(res.data.length);
				}
			})
			.catch((error) => {
				console.log(error.message);
			});
		return () => {
			isMounted = false;
		};
	}, []);
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
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className="bi bi-house"
								viewBox="0 0 16 16"
							>
								<path
									fillRule="evenodd"
									d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
								/>
								<path
									fillRule="evenodd"
									d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
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
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className="bi bi-folder-check"
								viewBox="0 0 16 16"
							>
								<path d="M.5 3l.04.87a1.99 1.99 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2zm5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19c-.24 0-.47.042-.684.12L1.5 2.98a1 1 0 0 1 1-.98h3.672z" />
								<path d="M15.854 10.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708l1.146 1.147 2.646-2.647a.5.5 0 0 1 .708 0z" />
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
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className="bi bi-folder-plus"
								viewBox="0 0 16 16"
							>
								<path d="M.5 3l.04.87a1.99 1.99 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2zm5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19c-.24 0-.47.042-.684.12L1.5 2.98a1 1 0 0 1 1-.98h3.672z" />
								<path d="M13.5 10a.5.5 0 0 1 .5.5V12h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V13h-1.5a.5.5 0 0 1 0-1H13v-1.5a.5.5 0 0 1 .5-.5z" />
							</svg>{" "}
							Add Project
						</NavLink>
					</li>
					{/* <li className="nav-item">
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
							to="/write-blog"
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
							Write Blog
						</NavLink>
					</li> */}
					<li className="nav-item">
						<NavLink
							activeClassName="active-nav"
							className="nav-link"
							to="manage-messages"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className="bi bi-chat-right"
								viewBox="0 0 16 16"
							>
								<path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" />
							</svg>{" "}
							Messages{" "}
							{messagesLength && (
								<span className="badge badge-primary">{messagesLength}</span>
							)}
						</NavLink>
					</li>
				</ul>

				<h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
					<span>Quick Pages</span>
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
