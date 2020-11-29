import "./App.css";
import { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Projects from "./Pages/Projects";
import Blogs from "./Pages/Blogs";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
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
					<Route exact path="/blogs">
						<Header />
						<Blogs />
						<Footer />
					</Route>
					<Route exact path="/about">
						<Header />
						<About />
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
					<Route exact path="/dashboard">
						<Header />
						<Dashboard />
					</Route>
				</Switch>
			</Router>
		</Fragment>
	);
}

export default App;
