import React from "react";
import INFO from "../../data/user";
import "./styles/techStrip.css";

const TechStrip = () => {
	const techs = INFO.techStack;
	// Duplicate for seamless loop
	const allTechs = [...techs, ...techs];

	return (
		<section className="tech-strip">
			<div className="tech-strip-header">
				<span className="tech-strip-label">Technologies I Work With</span>
			</div>
			<div className="tech-strip-track">
				<div className="tech-strip-scroll">
					{allTechs.map((tech, index) => (
						<div className="tech-strip-item" key={index}>
							<img
								src={tech.logo}
								alt={tech.name}
								className="tech-strip-logo"
							/>
							<span className="tech-strip-name">
								{tech.name}
							</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default TechStrip;
