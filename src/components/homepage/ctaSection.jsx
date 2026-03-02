import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./styles/ctaSection.css";

const CTASection = () => {
	return (
		<section className="cta-section">
			<div className="cta-inner">
				<h2 className="cta-title">Let's Build Something Great Together</h2>
				<p className="cta-description">
					Have a project in mind? Looking for a backend engineer or
					DevOps consultant? I'd love to hear from you.
				</p>
				<div className="cta-actions">
					<Link to="/contact" className="cta-btn cta-btn-primary">
						<span>Get in Touch</span>
						<FontAwesomeIcon icon={faArrowRight} />
					</Link>
				</div>
			</div>
		</section>
	);
};

export default CTASection;
