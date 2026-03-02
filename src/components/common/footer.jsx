import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faLinkedin,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faDownload } from "@fortawesome/free-solid-svg-icons";

import INFO from "../../data/user";
import "./styles/footer.css";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-inner">
				<div className="footer-grid">
					{/* Brand column */}
					<div className="footer-brand">
						<Link to="/" className="footer-logo-link">
							<img
								src={INFO.main.logo}
								alt="logo"
								className="footer-logo-img"
							/>
							<span className="footer-logo-name">
								{INFO.main.name}
							</span>
						</Link>
						<p className="footer-tagline">
							Backend &amp; DevOps Engineer building scalable
							systems and cloud infrastructure.
						</p>
					</div>

					{/* Quick Links */}
					<div className="footer-col">
						<h4 className="footer-col-title">Quick Links</h4>
						<ul className="footer-col-list">
							<li><Link to="/">Home</Link></li>
							<li><Link to="/about">About</Link></li>
							<li><Link to="/projects">Projects</Link></li>
							<li><Link to="/contact">Contact</Link></li>
						</ul>
					</div>

					{/* Connect */}
					<div className="footer-col">
						<h4 className="footer-col-title">Connect</h4>
						<ul className="footer-col-list footer-social-list">
							<li>
								<a href={INFO.socials.github} target="_blank" rel="noreferrer">
									<FontAwesomeIcon icon={faGithub} /> GitHub
								</a>
							</li>
							<li>
								<a href={INFO.socials.linkedin} target="_blank" rel="noreferrer">
									<FontAwesomeIcon icon={faLinkedin} /> LinkedIn
								</a>
							</li>
							<li>
								<a href={INFO.socials.instagram} target="_blank" rel="noreferrer">
									<FontAwesomeIcon icon={faInstagram} /> Instagram
								</a>
							</li>
							<li>
								<a href={`mailto:${INFO.main.email}`}>
									<FontAwesomeIcon icon={faEnvelope} /> Email
								</a>
							</li>
						</ul>
					</div>

					{/* Resume / CTA */}
					<div className="footer-col">
						<h4 className="footer-col-title">Resources</h4>
						<a
							href={INFO.main.resumeLink}
							target="_blank"
							rel="noreferrer"
							className="footer-resume-btn"
						>
							<FontAwesomeIcon icon={faDownload} />
							Download Resume
						</a>
					</div>
				</div>

				<div className="footer-bottom">
					<span>
						&copy; {new Date().getFullYear()} {INFO.main.name}. All
						rights reserved.
					</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
