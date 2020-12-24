import "./App.css";
import { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Assets/Images/ahsan-logo.png";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Projects from "./Pages/Projects";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import ProjectDetails from "./Pages/ProjectDetails";
import AddProject from "./Pages/AddProject";
import ManageProjects from "./Pages/ManageProjects";
import ManageBlogs from "./Pages/ManageBlogs";
import WriteBlog from "./Pages/WriteBlog";
import ManageMessages from "./Pages/ManageMessages";
import NotFound from "./Pages/NotFound";
import EditProject from "./Pages/EditProject";

function App() {
	return (
		<Fragment>
			<Router>
				<Switch>
					<Route exact path="/">
						<Header />
						<Home />
						<Footer />
					</Route>
					<Route exact path="/projects">
						<Header />
						<Projects />
						<Footer />
					</Route>
					<Route exact path="/projects/:projectid">
						<Header />
						<ProjectDetails />
						<Footer />
					</Route>
					<Route exact path="/blogs">
						<Header />
						<Blogs />
						<Footer />
					</Route>
					<Route exact path="/contact">
						<Header />
						<Contact />
						<Footer />
					</Route>
					<Route exact path="/admin">
						<Login />
					</Route>
					<Route exact path="/dashboard" component={Dashboard} />
					<Route exact path="/add-project" component={AddProject} />
					<Route exact path="/manage-projects" component={ManageProjects} />
					<Route exact path="/projects/edit/:id" component={EditProject} />
					<Route exact path="/manage-blogs" component={ManageBlogs} />
					<Route exact path="/write-blog" component={WriteBlog} />
					<Route exact path="/manage-messages" component={ManageMessages} />
					<Route component={NotFound} />
				</Switch>
			</Router>
		</Fragment>
	);
}

export default App;
