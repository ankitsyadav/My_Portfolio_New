import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Project from "../components/projects/project";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
	const [activeFilter, setActiveFilter] = useState("All");

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	const allTags = [
		"All",
		...new Set(INFO.projects.flatMap((p) => p.tags || [])),
	];

	const filteredProjects =
		activeFilter === "All"
			? INFO.projects
			: INFO.projects.filter(
					(p) => p.tags && p.tags.includes(activeFilter)
			  );

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<section className="projects-hero">
						<span className="projects-badge">Portfolio</span>
						<h1 className="projects-title">
							Things I've Built
						</h1>
						<p className="projects-subtitle">
							A collection of projects showcasing backend
							engineering, DevOps automation, and full-stack
							development.
						</p>
					</section>

					<div className="projects-filters">
						{allTags.map((tag) => (
							<button
								key={tag}
								className={`projects-filter-btn ${
									activeFilter === tag ? "active" : ""
								}`}
								onClick={() => setActiveFilter(tag)}
							>
								{tag}
							</button>
						))}
					</div>

					<div className="projects-grid">
						{filteredProjects.map((project, index) => (
							<div className="projects-grid-item" key={index}>
								<Project
									logo={project.logo}
									title={project.title}
									description={project.description}
									linkText={project.linkText}
									link={project.link}
								/>
							</div>
						))}
					</div>
				</div>
				<Footer />
			</div>
		</React.Fragment>
	);
};

export default Projects;
