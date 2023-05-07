import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-primary">
			<div className="container">
				<NavLink className="navbar-brand" hrefLang="#" to="/">
					<h2>Crtl+S - IT</h2>
				</NavLink>
				<button
					className="navbar-toggler collapsed"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#mobileMenu"
					aria-controls="mobileMenu"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="toggler-icon top-bar"></span>
					<span className="toggler-icon middle-bar"></span>
					<span className="toggler-icon bottom-bar"></span>
				</button>
				<div className="collapse navbar-collapse" id="mobileMenu">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink
								className="nav-link"
								activeClassName="active"
								to="/cruds/new"
							>ADD NEW EMPLOYEE DETAILS</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								activeClassName="active"
								to="/cruds"
							>UPDATE OR DELETE EXISTING EMPLOYEE</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								activeClassName="active"
								to="/cruds/grid-view"
							>VIEW ALL EMPLOYEE DETAILS</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>

		
	);
};

export default Navbar;
