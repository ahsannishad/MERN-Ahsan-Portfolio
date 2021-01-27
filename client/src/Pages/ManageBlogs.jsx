import React, { Fragment } from "react";
import AdminHeader from "../Components/AdminHeader";
import SideBar from "../Components/SideBar";

function ManageBlogs() {
	return (
		<Fragment>
			<AdminHeader />
			<div className="container-fluid">
				<div className="row">
					<SideBar />

					<main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
						<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
							<h1 className="h2">Manage Blogs</h1>
							<div className="btn-toolbar mb-2 mb-md-0">
								<div className="btn-group mr-2">
									<button
										type="button"
										className="btn btn-sm btn-outline-secondary"
									>
										Share
									</button>
									<button
										type="button"
										className="btn btn-sm btn-outline-secondary"
									>
										Export
									</button>
								</div>
								<button
									type="button"
									className="btn btn-sm btn-outline-secondary dropdown-toggle"
								>
									<span data-feather="calendar"></span>
									This week
								</button>
							</div>
						</div>
					</main>
				</div>
			</div>
		</Fragment>
	);
}

export default ManageBlogs;
