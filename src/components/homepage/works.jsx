import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works" style={{ maxWidth: "auto", margin: "auto" }}>
			<Card
				icon={faBriefcase}
				title="Work Experience"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://i.postimg.cc/9FcNRDF6/1640436028142.jpg"
								alt="Hey Homie"
								className="work-image"
							/>
							<div className="work-title">Hey Homie</div>
							<div className="work-subtitle">
								Software Engineer 1
							</div>
							<div className="work-duration">
								Nov 2022 - Feb 2025
							</div>
						</div>
						<div className="work">
							<img
								src="https://i.postimg.cc/SQ583Zrp/propelx-club-logo.jpg"
								alt="PropelX Ventures"
								className="work-image"
							/>
							<div className="work-title">PropelX Ventures</div>
							<div className="work-subtitle">
								Backend Developer Freelance
							</div>
							<div className="work-duration">
								Aug 2024 - Dec 2024
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
