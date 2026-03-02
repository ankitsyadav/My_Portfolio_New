import React, { useState } from "react";
import INFO from "../../data/user";
import useScrollReveal from "../../hooks/useScrollReveal";
import "./styles/tabbedSkills.css";

const TabbedSkills = () => {
	const categories = Object.keys(INFO.skills);
	const [activeTab, setActiveTab] = useState(categories[0]);
	const ref = useScrollReveal();

	return (
		<section className="tabbed-skills section reveal" ref={ref}>
			<div className="content-wrapper">
				<div className="section-header">
					<h2 className="section-title">My Expertise</h2>
					<p className="section-subtitle">
						Specialized in backend engineering and DevOps with a
						strong foundation across the full stack
					</p>
				</div>

				<div className="tabs-container">
					<div className="tab-buttons">
						{categories.map((cat) => (
							<button
								key={cat}
								className={`tab-btn ${activeTab === cat ? "active" : ""}`}
								onClick={() => setActiveTab(cat)}
							>
								{cat}
							</button>
						))}
					</div>

					<div className="tab-content">
						<div className="skills-grid">
							{INFO.skills[activeTab].map((skill, index) => (
								<div
									className="skill-chip"
									key={skill}
									style={{
										animationDelay: `${index * 0.05}s`,
									}}
								>
									{skill}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TabbedSkills;
