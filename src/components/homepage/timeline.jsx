import React from "react";
import INFO from "../../data/user";
import useScrollReveal from "../../hooks/useScrollReveal";
import "./styles/timeline.css";

const Timeline = () => {
	const ref = useScrollReveal();

	return (
		<section className="timeline-section section reveal" ref={ref}>
			<div className="content-wrapper">
				<div className="section-header">
					<h2 className="section-title">Work Experience</h2>
					<p className="section-subtitle">
						My professional journey building backend systems and
						cloud infrastructure
					</p>
				</div>

				<div className="timeline">
					{INFO.experience.map((exp, index) => (
						<div className="timeline-item" key={index}>
							<div className="timeline-marker">
								<div className="timeline-dot" />
								{index < INFO.experience.length - 1 && (
									<div className="timeline-line" />
								)}
							</div>
							<div className="timeline-content">
								<div className="timeline-header">
									<img
										src={exp.logo}
										alt={exp.company}
										className="timeline-logo"
									/>
									<div className="timeline-info">
										<h3 className="timeline-company">
											{exp.company}
										</h3>
										<div className="timeline-role">
											{exp.role}
										</div>
										<div className="timeline-meta">
											<span className="timeline-duration">
												{exp.duration}
											</span>
											<span className="timeline-location">
												{exp.location}
											</span>
										</div>
									</div>
								</div>
								<ul className="timeline-points">
									{exp.points.map((point, i) => (
										<li key={i}>{point}</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Timeline;
