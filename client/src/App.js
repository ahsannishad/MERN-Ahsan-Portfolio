import "./App.css";
import { Fragment, useState, useEffect } from "react";
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
import ProtectedRoute from "./Components/ProtectedRoute";
import Axios from "axios";
import { userContext } from "./Components/userContext";

function App() {
	const [user, setUser] = useState(false);

	useEffect(() => {
		let isMounted = true;
		Axios.get("/api/user/authenticated").then((res) => {
			if (isMounted) {
				setUser(res.data);
			}
		});

		return () => {
			isMounted = false;
		};
	}, []);

	return (
		<Fragment>
			<Router>
				<userContext.Provider value={{ user, setUser }}>
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
						<Route exact path="/admin" component={Login} />

						<ProtectedRoute exact path="/dashboard" component={Dashboard} />
						<ProtectedRoute exact path="/add-project" component={AddProject} />
						<ProtectedRoute
							exact
							path="/manage-projects"
							component={ManageProjects}
						/>
						<ProtectedRoute
							exact
							path="/projects/edit/:id"
							component={EditProject}
						/>
						<ProtectedRoute
							exact
							path="/manage-blogs"
							component={ManageBlogs}
						/>
						<ProtectedRoute exact path="/write-blog" component={WriteBlog} />
						<ProtectedRoute
							exact
							path="/manage-messages"
							component={ManageMessages}
						/>

						<Route path="*">
							<NotFound />
						</Route>
					</Switch>
				</userContext.Provider>
			</Router>
		</Fragment>
	);
}

export default App;
