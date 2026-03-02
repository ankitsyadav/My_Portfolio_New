import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faLinkedin,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faDownload } from "@fortawesome/free-solid-svg-icons";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					{/* Hero area */}
					<section className="about-hero">
						<div className="about-hero-text">
							<span className="about-badge">About Me</span>
							<h1 className="about-title">
								{INFO.about.title}
							</h1>
							<div className="about-description">
								{INFO.about.description
									.split("\n\n")
									.map((para, i) => (
										<p key={i}>{para}</p>
									))}
							</div>

							<div className="about-actions">
								<a
									href={INFO.main.resumeLink}
									target="_blank"
									rel="noreferrer"
									className="about-resume-btn"
								>
									<FontAwesomeIcon icon={faDownload} />
									Download Resume
								</a>
							</div>
						</div>

						<div className="about-hero-image">
							<div className="about-image-wrapper">
								<img
									src="https://i.postimg.cc/YScCFdp9/Whats-App-Image-2024-03-30-at-1-30-36-AM.jpg"
									alt="Ankit Singh Yadav"
								/>
							</div>

							<div className="about-social-icons">
								<a href={INFO.socials.github} target="_blank" rel="noreferrer">
									<FontAwesomeIcon icon={faGithub} />
								</a>
								<a href={INFO.socials.linkedin} target="_blank" rel="noreferrer">
									<FontAwesomeIcon icon={faLinkedin} />
								</a>
								<a href={INFO.socials.instagram} target="_blank" rel="noreferrer">
									<FontAwesomeIcon icon={faInstagram} />
								</a>
								<a href={`mailto:${INFO.main.email}`}>
									<FontAwesomeIcon icon={faEnvelope} />
								</a>
							</div>
						</div>
					</section>

					{/* Skills grid */}
					<section className="about-skills-section">
						<h2 className="section-title">Skills &amp; Expertise</h2>
						<div className="about-skills-grid">
							{Object.entries(INFO.skills).map(
								([category, skills]) => (
									<div
										className="about-skill-card"
										key={category}
									>
										<h3 className="about-skill-card-title">
											{category}
										</h3>
										<div className="about-skill-chips">
											{skills.map((skill, i) => (
												<span
													className="about-skill-chip"
													key={i}
												>
													{skill}
												</span>
											))}
										</div>
									</div>
								)
							)}
						</div>
					</section>

					{/* Experience mini-timeline */}
					<section className="about-experience-section">
						<h2 className="section-title">Experience</h2>
						<div className="about-experience-list">
							{INFO.experience.map((exp, i) => (
								<div className="about-exp-card" key={i}>
									<img
										src={exp.logo}
										alt={exp.company}
										className="about-exp-logo"
									/>
									<div className="about-exp-info">
										<h4 className="about-exp-role">
											{exp.role}
										</h4>
										<p className="about-exp-company">
											{exp.company} &middot;{" "}
											{exp.location}
										</p>
										<span className="about-exp-duration">
											{exp.duration}
										</span>
									</div>
								</div>
							))}
						</div>
					</section>
				</div>
				<Footer />
			</div>
		</React.Fragment>
	);
};

export default About;
