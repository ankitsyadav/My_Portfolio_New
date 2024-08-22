import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://i.postimg.cc/SQ583Zrp/propelx-club-logo.jpg"
								alt="PropelX Ventures"
								className="work-image"
							/>
							<div className="work-title">PropelX Ventures</div>
							<div className="work-subtitle">
								Software Engineer 1
							</div>
							<div className="work-duration">
								August 2024 - Present
							</div>
						</div>
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
								Nov 2022 - October 2024
							</div>
						</div>

						<div className="work">
							<img
								src="https://i.postimg.cc/qRWs0ZDc/images.png"
								alt="SCHOLASTICBEING SOLUTIONS PRIVATE LIMITED"
								className="work-image"
							/>
							<div className="work-title">
								SCHOLASTICBEING SOLUTIONS PRIVATE LIMITED
							</div>
							<div className="work-subtitle">
								Javascript Developer
							</div>
							<div className="work-duration">
								{" "}
								Jan 2022 - Nov 2022
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
