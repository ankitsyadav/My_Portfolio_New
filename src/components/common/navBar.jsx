import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faDownload } from "@fortawesome/free-solid-svg-icons";

import INFO from "../../data/user";
import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		if (menuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [menuOpen]);

	return (
		<React.Fragment>
			<nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
				<div className="nav-inner">
					<Link to="/" className="nav-logo">
						<img
							src={INFO.main.logo}
							alt="logo"
							className="nav-logo-img"
						/>
						<span className="nav-logo-text">
							{INFO.main.name}
						</span>
					</Link>

					<ul className="nav-links">
						<li className={active === "home" ? "active" : ""}>
							<Link to="/">Home</Link>
						</li>
						<li className={active === "about" ? "active" : ""}>
							<Link to="/about">About</Link>
						</li>
						<li className={active === "projects" ? "active" : ""}>
							<Link to="/projects">Projects</Link>
						</li>
						<li className={active === "contact" ? "active" : ""}>
							<Link to="/contact">Contact</Link>
						</li>
					</ul>

					<a
						href={INFO.main.resumeLink}
						className="nav-cta"
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon icon={faDownload} />
						<span>Resume</span>
					</a>

					<button
						className="nav-hamburger"
						onClick={() => setMenuOpen(!menuOpen)}
						aria-label="Toggle menu"
					>
						<FontAwesomeIcon
							icon={menuOpen ? faXmark : faBars}
						/>
					</button>
				</div>
			</nav>

			{/* Mobile menu overlay */}
			<div
				className={`mobile-menu-overlay ${menuOpen ? "open" : ""}`}
				onClick={() => setMenuOpen(false)}
			/>
			<div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
				<ul className="mobile-menu-links">
					<li className={active === "home" ? "active" : ""}>
						<Link to="/" onClick={() => setMenuOpen(false)}>
							Home
						</Link>
					</li>
					<li className={active === "about" ? "active" : ""}>
						<Link to="/about" onClick={() => setMenuOpen(false)}>
							About
						</Link>
					</li>
					<li className={active === "projects" ? "active" : ""}>
						<Link
							to="/projects"
							onClick={() => setMenuOpen(false)}
						>
							Projects
						</Link>
					</li>
					<li className={active === "contact" ? "active" : ""}>
						<Link
							to="/contact"
							onClick={() => setMenuOpen(false)}
						>
							Contact
						</Link>
					</li>
				</ul>
				<a
					href={INFO.main.resumeLink}
					className="mobile-menu-cta"
					target="_blank"
					rel="noreferrer"
				>
					<FontAwesomeIcon icon={faDownload} />
					<span>Download Resume</span>
				</a>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
