import "./App.css";
import { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Projects from "./Pages/Projects";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
	const [user, setUser] = useState(false);
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
				</Switch>
			</Router>
		</Fragment>
	);
}

export default App;
