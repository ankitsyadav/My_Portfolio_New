import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faDownload } from "@fortawesome/free-solid-svg-icons";

import INFO from "../../data/user";
import "./styles/hero.css";

const Hero = () => {
	return (
		<section className="hero">
			<div className="hero-inner">
				<div className="hero-content">
					<div className="hero-badge">{INFO.homepage.subtitle}</div>
					<h1 className="hero-title">{INFO.homepage.title}</h1>
					<p className="hero-description">
						{INFO.homepage.description}
					</p>
					<div className="hero-actions">
						<Link to="/projects" className="hero-btn hero-btn-primary">
							<span>View Projects</span>
							<FontAwesomeIcon icon={faArrowRight} />
						</Link>
						<a
							href={INFO.main.resumeLink}
							className="hero-btn hero-btn-secondary"
							target="_blank"
							rel="noreferrer"
						>
							<FontAwesomeIcon icon={faDownload} />
							<span>Download Resume</span>
						</a>
					</div>
				</div>
				<div className="hero-visual">
					<div className="hero-image-wrapper">
						<div className="hero-image-glow" />
						<img
							src="https://i.postimg.cc/VkYCybWk/profile.png"
							alt="Ankit Singh Yadav"
							className="hero-image"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
