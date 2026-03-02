import React from "react";
import INFO from "../../data/user";
import useScrollReveal from "../../hooks/useScrollReveal";
import "./styles/statsBar.css";

const StatsBar = () => {
	const ref = useScrollReveal();

	return (
		<section className="stats-bar reveal" ref={ref}>
			<div className="stats-bar-inner">
				{INFO.stats.map((stat, index) => (
					<div className="stat-item" key={index}>
						<div className="stat-value">{stat.value}</div>
						<div className="stat-label">{stat.label}</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default StatsBar;
