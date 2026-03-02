import React, { useState, useEffect, useCallback } from "react";
import INFO from "../../data/user";
import useScrollReveal from "../../hooks/useScrollReveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronLeft,
	faChevronRight,
	faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./styles/testimonials.css";

const Testimonials = () => {
	const [current, setCurrent] = useState(0);
	const [isPaused, setIsPaused] = useState(false);
	const testimonials = INFO.testimonials;
	const ref = useScrollReveal();

	const next = useCallback(() => {
		setCurrent((prev) => (prev + 1) % testimonials.length);
	}, [testimonials.length]);

	const prev = () => {
		setCurrent(
			(prev) => (prev - 1 + testimonials.length) % testimonials.length
		);
	};

	useEffect(() => {
		if (isPaused) return;
		const timer = setInterval(next, 5000);
		return () => clearInterval(timer);
	}, [isPaused, next]);

	return (
		<section
			className="testimonials-section section reveal"
			ref={ref}
			onMouseEnter={() => setIsPaused(true)}
			onMouseLeave={() => setIsPaused(false)}
		>
			<div className="content-wrapper">
				<div className="section-header">
					<h2 className="section-title">What People Say</h2>
					<p className="section-subtitle">
						Feedback from colleagues and collaborators
					</p>
				</div>

				<div className="testimonials-carousel">
					<button
						className="testimonial-nav testimonial-prev"
						onClick={prev}
						aria-label="Previous"
					>
						<FontAwesomeIcon icon={faChevronLeft} />
					</button>

					<div className="testimonial-card">
						<FontAwesomeIcon
							icon={faQuoteLeft}
							className="testimonial-quote-icon"
						/>
						<blockquote className="testimonial-text">
							{testimonials[current].quote}
						</blockquote>
						<div className="testimonial-author">
							<img
								src={testimonials[current].image}
								alt={testimonials[current].name}
								className="testimonial-avatar"
							/>
							<div>
								<div className="testimonial-name">
									{testimonials[current].name}
								</div>
								<div className="testimonial-role">
									{testimonials[current].role}
								</div>
							</div>
						</div>
					</div>

					<button
						className="testimonial-nav testimonial-next"
						onClick={next}
						aria-label="Next"
					>
						<FontAwesomeIcon icon={faChevronRight} />
					</button>
				</div>

				<div className="testimonial-dots">
					{testimonials.map((_, index) => (
						<button
							key={index}
							className={`testimonial-dot ${current === index ? "active" : ""}`}
							onClick={() => setCurrent(index)}
							aria-label={`Go to testimonial ${index + 1}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
