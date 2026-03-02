import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faLink } from "@fortawesome/free-solid-svg-icons";

import INFO from "../../data/user";
import useScrollReveal from "../../hooks/useScrollReveal";
import "./styles/featuredProjects.css";

const FeaturedProjects = () => {
	const featured = INFO.projects.filter((p) => p.featured);
	const ref = useScrollReveal();

	return (
		<section className="featured-projects section reveal" ref={ref}>
			<div className="content-wrapper">
				<div className="section-header">
					<h2 className="section-title">Featured Projects</h2>
					<p className="section-subtitle">
						A selection of projects that showcase my skills in
						backend engineering, cloud infrastructure, and
						full-stack development
					</p>
				</div>

				<div className="featured-grid">
					{featured.map((project, index) => (
						<a
							href={project.link}
							className="featured-card"
							key={index}
							target="_blank"
							rel="noreferrer"
						>
							<div className="featured-card-header">
								<div className="featured-card-logo">
									<img
										src={project.logo}
										alt={project.title}
									/>
								</div>
								<FontAwesomeIcon
									icon={faLink}
									className="featured-card-link-icon"
								/>
							</div>
							<h3 className="featured-card-title">
								{project.title}
							</h3>
							<p className="featured-card-desc">
								{project.description}
							</p>
							<div className="featured-card-tags">
								{project.techStack &&
									project.techStack.map((tech, i) => (
										<span
											className="featured-tag"
											key={i}
										>
											{tech}
										</span>
									))}
							</div>
						</a>
					))}
				</div>

				<div className="featured-cta">
					<Link to="/projects" className="view-all-btn">
						<span>View All Projects</span>
						<FontAwesomeIcon icon={faArrowRight} />
					</Link>
				</div>
			</div>
		</section>
	);
};

export default FeaturedProjects;
