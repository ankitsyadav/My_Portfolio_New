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

						{/* Newton School of Technology */}
						<div className="work">
							<img
								src="https://i.postimg.cc/sDFJxLdq/channels4-profile.jpg"
								alt="Newton School of Technology"
								className="work-image"
							/>
							<div className="work-title">
								Newton School of Technology – Pune
							</div>
							<div className="work-subtitle">
								SDE + SME (Backend & DevOps)
							</div>
							<div className="work-duration">
								Aug 2025 – Present
							</div>

							<ul className="work-points">
								<li>Mentoring 200+ students in Node.js, DevOps, Docker, CI/CD, and AWS deployments</li>
								<li>Designed reusable backend architecture templates for auth, APIs, and worker services</li>
								<li>Built CI/CD pipelines using GitHub Actions, Docker, and Nginx reducing deployment effort by 70%</li>
								<li>Guided development of scalable, fault-tolerant backend systems with caching and async jobs</li>
							</ul>
						</div>

						{/* FinXBridge / M2P Fintech */}
						<div className="work">
							<img
								src="https://i.postimg.cc/Bn0JnJv1/m2p-logo.png"
								alt="FinXBridge with M2P Fintech"
								className="work-image"
							/>
							<div className="work-title">
								FinXBridge (with M2P Fintech) – Hyderabad
							</div>
							<div className="work-subtitle">
								Software Development Engineer 1 (Backend + DevOps)
							</div>
							<div className="work-duration">
								Jan 2025 – Aug 2025
							</div>

							<ul className="work-points">
								<li>Developed low-latency backend services for Flipkart EMI onboarding on API Orchestration platform</li>
								<li>Achieved sub-200ms API latency under peak production traffic</li>
								<li>Built microservices for Mercedes-Benz Financial Services LOS with retries and validations</li>
							</ul>
						</div>

						{/* Hey Homie */}
						<div className="work">
							<img
								src="https://i.postimg.cc/9FcNRDF6/1640436028142.jpg"
								alt="Hey Homie"
								className="work-image"
							/>
							<div className="work-title">
								Hey Homie
							</div>
							<div className="work-subtitle">
								Backend Engineer (SDE 1)
							</div>
							<div className="work-duration">
								Nov 2022 – Jan 2025
							</div>

							<ul className="work-points">
								<li>Built 80+ WhatsApp automation bots for B2B workflows and high-volume messaging using Uchat.</li>
								<li>Developed internal automation tools using Node.js and Google Apps Script</li>
								<li>Optimized MongoDB schemas and aggregation pipelines improving query performance by 50%</li>
								<li>Implemented monitoring dashboards</li>
							</ul>
						</div>

					</div>
				}
			/>
		</div>
	);
};

export default Works;
