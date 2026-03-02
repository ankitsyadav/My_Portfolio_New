import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faLinkedin,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
	faEnvelope,
	faLocationDot,
	faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<section className="contact-hero">
						<span className="contact-badge">Get in Touch</span>
						<h1 className="contact-title">
							Let&rsquo;s Work Together
						</h1>
						<p className="contact-description">
							Have a project idea, a question, or just want to
							say hi? I&rsquo;d love to hear from you. I
							typically respond within 24 hours.
						</p>
					</section>

					<div className="contact-grid">
						{/* Email card */}
						<a
							href={`mailto:${INFO.main.email}`}
							className="contact-card"
						>
							<div className="contact-card-icon">
								<FontAwesomeIcon icon={faEnvelope} />
							</div>
							<h3>Email</h3>
							<p>{INFO.main.email}</p>
							<span className="contact-card-action">
								Send Email{" "}
								<FontAwesomeIcon
									icon={faArrowUpRightFromSquare}
								/>
							</span>
						</a>

						{/* LinkedIn card */}
						<a
							href={INFO.socials.linkedin}
							target="_blank"
							rel="noreferrer"
							className="contact-card"
						>
							<div className="contact-card-icon">
								<FontAwesomeIcon icon={faLinkedin} />
							</div>
							<h3>LinkedIn</h3>
							<p>Connect professionally</p>
							<span className="contact-card-action">
								Open Profile{" "}
								<FontAwesomeIcon
									icon={faArrowUpRightFromSquare}
								/>
							</span>
						</a>

						{/* GitHub card */}
						<a
							href={INFO.socials.github}
							target="_blank"
							rel="noreferrer"
							className="contact-card"
						>
							<div className="contact-card-icon">
								<FontAwesomeIcon icon={faGithub} />
							</div>
							<h3>GitHub</h3>
							<p>Check out my code</p>
							<span className="contact-card-action">
								View Repos{" "}
								<FontAwesomeIcon
									icon={faArrowUpRightFromSquare}
								/>
							</span>
						</a>

						{/* Instagram card */}
						<a
							href={INFO.socials.instagram}
							target="_blank"
							rel="noreferrer"
							className="contact-card"
						>
							<div className="contact-card-icon">
								<FontAwesomeIcon icon={faInstagram} />
							</div>
							<h3>Instagram</h3>
							<p>Follow my journey</p>
							<span className="contact-card-action">
								View Profile{" "}
								<FontAwesomeIcon
									icon={faArrowUpRightFromSquare}
								/>
							</span>
						</a>

						{/* Location card */}
						<div className="contact-card contact-card--muted">
							<div className="contact-card-icon">
								<FontAwesomeIcon icon={faLocationDot} />
							</div>
							<h3>Location</h3>
							<p>India</p>
							<span className="contact-card-action">
								Available remotely
							</span>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</React.Fragment>
	);
};

export default Contact;
