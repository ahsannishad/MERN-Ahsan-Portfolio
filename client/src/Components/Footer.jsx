import React from "react";

function Footer() {
	return (
		<footer className="site-footer footer">
			<div className="container mt-auto">
				<div className="row">
					<div className="col-sm-12 col-md-6">
						<h6 className="copyright-text">About</h6>
						<p className="copyright-text">
							I am Ahsan a Developer, from Dhaka, Bangladesh. I've been
							developing website since 2018. I build websites and applications
							with the latest technologies that work as hard as you, achieve
							results that you want, and generate a return on your investment.
							Let me help you grow your business by developing beautifull
							websites.
						</p>
					</div>

					<div className="col-xs-6 col-md-3">
						<h6 className="copyright-text">Quick Links</h6>
						<ul className="footer-links copyright-text">
							<li>
								<a href="https://reactjs.org/">React JS</a>
							</li>
							<li>
								<a href="https://nodejs.org/en/">Node JS</a>
							</li>
							<li>
								<a href="http://expressjs.com/">Express JS</a>
							</li>
							<li>
								<a href="https://getbootstrap.com/">Bootstrap</a>
							</li>
							<li>
								<a href="https://material-ui.com">Material UI</a>
							</li>
						</ul>
					</div>

					<div className="col-xs-6 col-md-3">
						<h6 className="copyright-text">Quick Links</h6>
						<ul className="footer-links copyright-text">
							<li>
								<a href="/">Home</a>
							</li>
							<li>
								<a href="/contact">About Me</a>
							</li>
							<li>
								<a href="/contact">Contact Me</a>
							</li>
							<li>
								<a href="/blogs">Blogs</a>
							</li>
							<li>
								<a href="/projects">Projects</a>
							</li>
						</ul>
					</div>
				</div>
				<hr />
			</div>
			<div className="container">
				<div className="row">
					<div className="col-md-8 col-sm-6 col-xs-12">
						<p className="copyright-text">
							Copyright &copy; 2021 Ahsan All Right reserved
						</p>
					</div>

					<div className="col-md-4 col-sm-6 col-xs-12">
						<ul className="social-icons">
							<li>
								<a
									className="facebook"
									href="https://www.facebook.com/ahsannishad"
								>
									<i className="fa fa-facebook"></i>
								</a>
							</li>
							<li>
								<a className="twitter" href="https://twitter.com/ahsan_nishad">
									<i className="fa fa-twitter"></i>
								</a>
							</li>
							<li>
								<a className="dribbble" href="https://dribbble.com/ahsannishad">
									<i className="fa fa-dribbble"></i>
								</a>
							</li>
							<li>
								<a
									className="linkedin"
									href="https://www.instagram.com/ahsannishad.official"
								>
									<i className="fa fa-instagram"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
