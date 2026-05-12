import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";

import INFO from "../data/user";

import "./styles/initiatives.css";

const Initiatives = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const init = INFO.initiatives[0];

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Initiatives | ${INFO.main.title}`}</title>
				<meta
					name="description"
					content="Things I'm building to help small Indian businesses grow."
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="initiatives" />
				<div className="content-wrapper">

					{/* Hero */}
					<section className="init-hero">
						<span className="init-badge">My Initiatives</span>
						<h1 className="init-title">
							Building Tools for{" "}
							<span className="init-highlight">Small Businesses</span>
						</h1>
						<p className="init-desc">
							Main chahta hoon ki India ke chhote businesses — salons, clinics,
							coaching centres, local shops — woh sab tools use kar sakein jo
							bade brands use karte hain. Simple. Affordable. No technical tension.
						</p>
					</section>

					{/* Initiative Card */}
					<section className="init-cards-section">
						<div className="init-card">

							<div className="init-card-header">
								<div>
									<div className="init-card-name-row">
										<h2 className="init-card-name">{init.name}</h2>
										<span className="init-status-badge">🚧 Building</span>
									</div>
									<p className="init-card-tagline">{init.tagline}</p>
								</div>
								<div className="init-card-price">
									<span className="init-price-amount">{init.price}</span>
									<span className="init-price-label">One simple plan</span>
								</div>
							</div>

							<p className="init-card-desc">{init.description}</p>

							<div className="init-vision-box">
								<span className="init-vision-label">Vision</span>
								<p className="init-vision-text">{init.vision}</p>
							</div>

							<div className="init-two-col">
								{/* Features */}
								<div>
									<h4 className="init-col-title">Kya Milega?</h4>
									<ul className="init-feature-list">
										{init.features.map((f, i) => (
											<li key={i}>
												<FontAwesomeIcon icon={faCheckCircle} className="init-check" />
												{f}
											</li>
										))}
									</ul>
								</div>

								{/* Target businesses */}
								<div>
									<h4 className="init-col-title">Kiske Liye Hai?</h4>
									<div className="init-targets">
										{init.targets.map((t, i) => (
											<span key={i} className="init-target-chip">{t}</span>
										))}
									</div>
								</div>
							</div>

							<div className="init-card-actions">
								<a
									href="https://www.taiyari-express.in/"
									target="_blank"
									rel="noreferrer"
									className="init-btn-primary"
								>
									<FontAwesomeIcon icon={faWhatsapp} />
									WhatsApp Pe Start Karo — ₹499/month
								</a>
								<a
									href="https://www.taiyari-express.in/"
									target="_blank"
									rel="noreferrer"
									className="init-btn-ghost"
								>
									Full Details Dekho
									<FontAwesomeIcon icon={faArrowRight} />
								</a>
							</div>

						</div>
					</section>

					{/* More coming soon */}
					<section className="init-coming-soon">
						<div className="init-coming-inner">
							<span className="init-coming-emoji">🔭</span>
							<h3 className="init-coming-title">Aur Bhi Kuch Ban Raha Hai</h3>
							<p className="init-coming-desc">
								Isse bhi zyaada chhote businesses ke liye ideas hain. Slowly sab
								yahan aayenge.
							</p>
						</div>
					</section>

				</div>
				<Footer />
			</div>
		</React.Fragment>
	);
};

export default Initiatives;
