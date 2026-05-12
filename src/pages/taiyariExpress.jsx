import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
	faCheckCircle,
	faTimesCircle,
	faChevronDown,
	faChevronUp,
	faBolt,
	faUsers,
	faCommentDots,
	faCalendarCheck,
	faArrowRight,
	faXmark,
} from "@fortawesome/free-solid-svg-icons";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";

import "./styles/taiyariExpress.css";

/* ─── Data ─── */
const PROBLEMS = [
	{
		icon: faTimesCircle,
		title: "Inquiry Miss Ho Jaati Hai",
		desc: "Customer ne message kiya 'Slot available hai kya?' — aap busy the, reply nahi hua, customer chala gaya.",
		example: "Jaise ek salon owner subah 6 customers ke messages miss kar deta hai.",
	},
	{
		icon: faCommentDots,
		title: "Baar Baar Same Sawaal",
		desc: "Roz 10-15 log poochhte hain — 'Timing kya hai?', 'Fees kitni hai?', 'Address kya hai?' — aap thak jaate ho.",
		example: "Ek coaching wale ko roz 20+ baar fees poochha jaata hai.",
	},
	{
		icon: faUsers,
		title: "Late Reply = Lost Customer",
		desc: "Jab aap 2-3 ghante baad reply karte ho, tab tak customer doosri jagah book kar chuka hota hai.",
		example: "Clinic mein 40% appointments isliye nahi hoti kyunki reply late hota hai.",
	},
	{
		icon: faBolt,
		title: "Aap Akele Sab Handle Nahi Kar Sakte",
		desc: "Business chalao ya phone pe reply karo? Dono ek saath nahi hota.",
		example: "Gym trainer ko workout ke beech mein bhi messages check karne padte hain.",
	},
];

const EXAMPLES = [
	{
		business: "💇 Salon",
		customer: "Kal 5 baje slot available hai kya?",
		reply: "Haan ji! 5 baje slot available hai. Aapka naam aur contact number bhejiye, confirm kar denge. 🙏",
	},
	{
		business: "📚 Coaching Institute",
		customer: "Class 10th maths ki fees kitni hai?",
		reply: "Class 10th Maths batch ki fees ₹1200/month hai. Batch Monday-Saturday, 4-5 PM. Demo class free hai! 😊",
	},
	{
		business: "🏥 Clinic",
		customer: "Doctor sahab kal available hain kya?",
		reply: "Kal Dr. Sharma 10 AM – 2 PM available hain. Appointment ke liye naam aur timing bhejein. ✅",
	},
	{
		business: "🏋️ Gym",
		customer: "Monthly membership kitne ki hai?",
		reply: "Monthly membership ₹800 hai. Trial week bilkul free! Aane ka time kya rahega aapka?",
	},
];

const HOW_STEPS = [
	{ num: "01", title: "Form Bharo", desc: "Business details, timings, aur 3-4 common sawaal likhdo jo customers roz poochhte hain." },
	{ num: "02", title: "Hum Setup Karte Hain", desc: "24 ghante mein aapka automation live ho jaata hai. Koi technical kaam nahi." },
	{ num: "03", title: "Customer Message Kare", desc: "Aapka shared WhatsApp number active ho jaata hai — automatic replies start." },
	{ num: "04", title: "Leads Aapke Paas Aayein", desc: "Interested customers ki details directly aapke WhatsApp pe forward hogi." },
];

const INDUSTRIES = [
	{ emoji: "💇", name: "Salon & Parlour" },
	{ emoji: "🏥", name: "Clinic & Doctor" },
	{ emoji: "📚", name: "Coaching Institute" },
	{ emoji: "👗", name: "Boutique & Fashion" },
	{ emoji: "🏋️", name: "Gym & Fitness" },
	{ emoji: "🛒", name: "Local Shop & Store" },
];

const PLAN_FEATURES = [
	"Shared WhatsApp Number (hum manage karte hain)",
	"Automatic Replies — 24/7",
	"FAQ Automation (unlimited sawaal)",
	"Inquiry & Lead Collection",
	"Appointment Request Handling",
	"Lead Forwarding to Your WhatsApp",
	"No Meta API, No Technical Setup",
	"Setup in 24 Hours",
	"Monthly — Cancel Anytime",
];

const FAQS = [
	{
		q: "Kya mujhe apna WhatsApp number dena hoga?",
		a: "Nahi. Hum ek shared centralized WhatsApp number use karte hain jo hum manage karte hain. Aapko koi number setup nahi karna. Leads aapke personal WhatsApp pe forward hoti hain.",
	},
	{
		q: "Kya Meta API ya koi technical knowledge chahiye?",
		a: "Bilkul nahi. Aapko sirf apni business details, timings, aur common sawaalon ke jawab dene hain. Baaki sab hum handle karte hain.",
	},
	{
		q: "Setup mein kitna time lagta hai?",
		a: "Form bharane ke 24 ghante mein aapka automation live ho jaata hai. Zyaadatar cases mein usi din ho jaata hai.",
	},
	{
		q: "Agar band karna ho toh?",
		a: "Monthly subscription hai — koi contract nahi, koi penalty nahi. Jab chahein band karein.",
	},
	{
		q: "Ek number pe ek hi business ka automation chalega ya bahut saare?",
		a: "Shared number hai isliye hum carefully manage karte hain. Aapke customers ko sirf aapke business ki information milegi.",
	},
	{
		q: "Kya ye mobile pe bhi kaam karega?",
		a: "Haan, customer kisi bhi phone se message kar sakta hai — normal WhatsApp pe. Koi app install nahi karna.",
	},
];

/* ─── Onboarding Modal ─── */
function OnboardingModal({ onClose }) {
	const BUSINESS_TYPES = [
		"Salon / Parlour",
		"Clinic / Doctor",
		"Coaching Institute",
		"Boutique / Fashion",
		"Gym / Fitness",
		"Local Shop / Store",
		"Tiffin / Food",
		"Other",
	];

	const [form, setForm] = useState({
		ownerName: "",
		businessName: "",
		businessType: "",
		whatsapp: "",
		timings: "",
		q1: "",
		q2: "",
		q3: "",
	});
	const [submitted, setSubmitted] = useState(false);

	const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

	const handleSubmit = (e) => {
		e.preventDefault();
		const msg = `Taiyari Express — Naya Business Onboarding

Owner: ${form.ownerName}
Business: ${form.businessName}
Type: ${form.businessType}
WhatsApp: ${form.whatsapp}
Timings: ${form.timings}

Common Sawaal:
1. ${form.q1}
2. ${form.q2}
3. ${form.q3}`;

		const encoded = encodeURIComponent(msg);
		window.open(`https://www.taiyari-express.in/`, "_blank");
		setSubmitted(true);
	};

	return (
		<div className="te-modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
			<div className="te-modal">
				<button className="te-modal-close" onClick={onClose} aria-label="Close">
					<FontAwesomeIcon icon={faXmark} />
				</button>

				{submitted ? (
					<div className="te-modal-success">
						<span className="te-modal-success-emoji">🎉</span>
						<h3>Done! WhatsApp pe message bheja ja raha hai.</h3>
						<p>
							Hum <strong>24 ghante mein</strong> aapka setup karenge aur
							aapko WhatsApp pe confirm karenge.
						</p>
						<button className="te-btn te-btn-primary" onClick={onClose}>
							Theek Hai, Dhanyavaad!
						</button>
					</div>
				) : (
					<>
						<div className="te-modal-header">
							<h2 className="te-modal-title">Business Onboarding</h2>
							<p className="te-modal-sub">
								Ye form bharo — hum 24 ghante mein setup karenge. ₹499/month.
							</p>
						</div>

						<form className="te-modal-form" onSubmit={handleSubmit}>
							<div className="te-form-row">
								<div className="te-form-group">
									<label>Aapka Naam *</label>
									<input
										type="text"
										placeholder="Jaise: Ramesh Kumar"
										required
										value={form.ownerName}
										onChange={set("ownerName")}
									/>
								</div>
								<div className="te-form-group">
									<label>Business ka Naam *</label>
									<input
										type="text"
										placeholder="Jaise: Riya Beauty Salon"
										required
										value={form.businessName}
										onChange={set("businessName")}
									/>
								</div>
							</div>

							<div className="te-form-row">
								<div className="te-form-group">
									<label>Business ka Type *</label>
									<select required value={form.businessType} onChange={set("businessType")}>
										<option value="">-- Select karein --</option>
										{BUSINESS_TYPES.map((t) => (
											<option key={t} value={t}>{t}</option>
										))}
									</select>
								</div>
								<div className="te-form-group">
									<label>Aapka WhatsApp Number *</label>
									<input
										type="tel"
										placeholder="10-digit number"
										maxLength={10}
										required
										value={form.whatsapp}
										onChange={set("whatsapp")}
									/>
								</div>
							</div>

							<div className="te-form-group">
								<label>Business ki Timings</label>
								<input
									type="text"
									placeholder="Jaise: 10 AM – 8 PM, Sunday band"
									value={form.timings}
									onChange={set("timings")}
								/>
							</div>

							<div className="te-form-divider">
								<span>3 Common Sawaal Jo Customers Poochhte Hain</span>
							</div>

							<div className="te-form-group">
								<label>Sawaal 1 *</label>
								<textarea
									placeholder="Jaise: Haircut ki fees kitni hai?"
									rows={2}
									required
									value={form.q1}
									onChange={set("q1")}
								/>
							</div>
							<div className="te-form-group">
								<label>Sawaal 2 *</label>
								<textarea
									placeholder="Jaise: Kal 5 baje appointment milegi?"
									rows={2}
									required
									value={form.q2}
									onChange={set("q2")}
								/>
							</div>
							<div className="te-form-group">
								<label>Sawaal 3</label>
								<textarea
									placeholder="Jaise: Aapka address kya hai?"
									rows={2}
									value={form.q3}
									onChange={set("q3")}
								/>
							</div>

							<button type="submit" className="te-btn te-btn-primary te-btn-full te-btn-lg">
								<FontAwesomeIcon icon={faWhatsapp} />
								Bhejo &amp; Setup Shuru Karo
							</button>
							<p className="te-form-note">
								Submitting karने पर aapka WhatsApp open hoga — wahan ek message aayega, bas Send karo.
							</p>
						</form>
					</>
				)}
			</div>
		</div>
	);
}

/* ─── Page Sections ─── */
function TEHero({ onOpenModal }) {
	return (
		<section className="te-hero">
			<div className="te-container">
				<div className="te-hero-inner">
					<span className="te-badge">
						<FontAwesomeIcon icon={faWhatsapp} /> WhatsApp Automation
					</span>
					<h1 className="te-hero-title">
						Apne Business ke WhatsApp Replies{" "}
						<span className="te-highlight">Automatic Karo</span>
					</h1>
					<p className="te-hero-sub">
						Local businesses ke liye simple WhatsApp automation. Na technical tension, na
						complicated setup. Bas ₹499/month.
					</p>
					<div className="te-hero-ctas">
						<button className="te-btn te-btn-primary" onClick={onOpenModal}>
							Abhi Start Karo — ₹499/month
						</button>
						<a
							href="https://www.taiyari-express.in/"
							target="_blank"
							rel="noreferrer"
							className="te-btn te-btn-outline"
						>
							<FontAwesomeIcon icon={faWhatsapp} /> Pehle Baat Karein
						</a>
					</div>
					<p className="te-hero-note">
						No GST · No Meta API · No Technical Setup · Cancel Anytime
					</p>
				</div>
			</div>
		</section>
	);
}

function TEProblem() {
	return (
		<section className="te-section te-section-light">
			<div className="te-container">
				<div className="te-section-header">
					<span className="te-section-badge">The Problem</span>
					<h2 className="te-section-title">Kya Aapke Saath Bhi Aisa Hota Hai?</h2>
					<p className="te-section-sub">
						Ye problems har local business face karta hai. Aap akele nahi hain.
					</p>
				</div>
				<div className="te-grid-4">
					{PROBLEMS.map((p, i) => (
						<div className="te-problem-card" key={i}>
							<div className="te-problem-icon">
								<FontAwesomeIcon icon={p.icon} />
							</div>
							<h3 className="te-problem-title">{p.title}</h3>
							<p className="te-problem-desc">{p.desc}</p>
							<p className="te-problem-example">{p.example}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

function TEExamples() {
	return (
		<section className="te-section">
			<div className="te-container">
				<div className="te-section-header">
					<span className="te-section-badge">Real Examples</span>
					<h2 className="te-section-title">Exactly Aisa Hoga</h2>
					<p className="te-section-sub">
						Customer message kare — automatic reply aaye. Aap kuch nahi karte.
					</p>
				</div>
				<div className="te-examples-grid">
					{EXAMPLES.map((ex, i) => (
						<div className="te-example-card" key={i}>
							<div className="te-example-label">{ex.business}</div>
							<div className="te-chat">
								<div className="te-chat-bubble te-chat-customer">
									<span className="te-chat-tag">Customer</span>
									{ex.customer}
								</div>
								<div className="te-chat-bubble te-chat-auto">
									<span className="te-chat-tag">AutoReply ⚡</span>
									{ex.reply}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

function TEHowItWorks() {
	return (
		<section className="te-section te-section-light">
			<div className="te-container">
				<div className="te-section-header">
					<span className="te-section-badge">How It Works</span>
					<h2 className="te-section-title">Sirf 4 Steps Mein Ready</h2>
					<p className="te-section-sub">
						Koi technical knowledge ki zaroorat nahi. Hum sab handle karte hain.
					</p>
				</div>
				<div className="te-steps">
					{HOW_STEPS.map((s, i) => (
						<React.Fragment key={i}>
							<div className="te-step">
								<div className="te-step-num">{s.num}</div>
								<h3 className="te-step-title">{s.title}</h3>
								<p className="te-step-desc">{s.desc}</p>
							</div>
							{i < HOW_STEPS.length - 1 && (
								<div className="te-step-arrow">
									<FontAwesomeIcon icon={faArrowRight} />
								</div>
							)}
						</React.Fragment>
					))}
				</div>
			</div>
		</section>
	);
}

function TEIndustries() {
	return (
		<section className="te-section">
			<div className="te-container">
				<div className="te-section-header">
					<span className="te-section-badge">Industries</span>
					<h2 className="te-section-title">Kaun Kaun Use Kar Sakta Hai?</h2>
					<p className="te-section-sub">
						Koi bhi local business jo WhatsApp pe customers ko respond karta hai.
					</p>
				</div>
				<div className="te-industry-grid">
					{INDUSTRIES.map((ind, i) => (
						<div className="te-industry-card" key={i}>
							<span className="te-industry-emoji">{ind.emoji}</span>
							<span className="te-industry-name">{ind.name}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

function TEPricing({ onOpenModal }) {
	return (
		<section className="te-section te-section-light" id="pricing">
			<div className="te-container">
				<div className="te-section-header">
					<span className="te-section-badge">Pricing</span>
					<h2 className="te-section-title">Ek Simple Plan. Bas Itna.</h2>
					<p className="te-section-sub">
						No hidden charges. No setup fee. No GST. Sirf ₹499/month.
					</p>
				</div>
				<div className="te-single-plan">
					<div className="te-plan-card">
						<div className="te-plan-top">
							<div>
								<h3 className="te-plan-name">Taiyari Express Plan</h3>
								<p className="te-plan-tagline">Sab kuch included. Kuch chhupa nahi.</p>
							</div>
							<div className="te-plan-price-box">
								<span className="te-plan-price">₹499</span>
								<span className="te-plan-period">/month</span>
							</div>
						</div>
						<ul className="te-plan-features">
							{PLAN_FEATURES.map((f, i) => (
								<li key={i}>
									<FontAwesomeIcon icon={faCheckCircle} className="te-plan-check" />
									{f}
								</li>
							))}
						</ul>
						<button
							className="te-btn te-btn-primary te-btn-full te-btn-lg"
							onClick={onOpenModal}
						>
							<FontAwesomeIcon icon={faWhatsapp} />
							Abhi Start Karo — ₹499/month
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

function TEFAQ() {
	const [openIdx, setOpenIdx] = useState(null);
	return (
		<section className="te-section">
			<div className="te-container">
				<div className="te-section-header">
					<span className="te-section-badge">FAQ</span>
					<h2 className="te-section-title">Aksar Pooche Jaane Wale Sawaal</h2>
				</div>
				<div className="te-faq-list">
					{FAQS.map((faq, i) => (
						<div
							className={`te-faq-item ${openIdx === i ? "te-faq-open" : ""}`}
							key={i}
							onClick={() => setOpenIdx(openIdx === i ? null : i)}
						>
							<div className="te-faq-question">
								<span>{faq.q}</span>
								<FontAwesomeIcon icon={openIdx === i ? faChevronUp : faChevronDown} />
							</div>
							{openIdx === i && (
								<div className="te-faq-answer">{faq.a}</div>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

function TEFinalCTA({ onOpenModal }) {
	return (
		<section className="te-cta-section">
			<div className="te-container">
				<div className="te-cta-inner">
					<span className="te-cta-emoji">💬</span>
					<h2 className="te-cta-title">Ab Koi Inquiry Miss Nahi Hogi</h2>
					<p className="te-cta-sub">
						₹499/month mein aapka WhatsApp 24 ghante kaam karega — bina aapke haath lagaye.
						Setup in 24 hours. Cancel anytime.
					</p>
					<div className="te-hero-ctas">
						<button
							className="te-btn te-btn-white te-btn-lg"
							onClick={onOpenModal}
						>
							Onboard Karo — ₹499/month
						</button>
						<a
							href="https://www.taiyari-express.in/"
							target="_blank"
							rel="noreferrer"
							className="te-btn te-btn-ghost te-btn-lg"
						>
							<FontAwesomeIcon icon={faWhatsapp} /> Pehle Baat Karein
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

/* ─── Main Page ─── */
const TaiyariExpress = () => {
	const [modalOpen, setModalOpen] = useState(false);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		if (modalOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => { document.body.style.overflow = ""; };
	}, [modalOpen]);

	return (
		<React.Fragment>
			<Helmet>
				<title>Taiyari Express — WhatsApp Automation for Local Businesses</title>
				<meta
					name="description"
					content="Simple WhatsApp automation for local Indian businesses. No technical setup. ₹499/month."
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="" />
				<TEHero onOpenModal={() => setModalOpen(true)} />
				<TEProblem />
				<TEExamples />
				<TEHowItWorks />
				<TEIndustries />
				<TEPricing onOpenModal={() => setModalOpen(true)} />
				<TEFAQ />
				<TEFinalCTA onOpenModal={() => setModalOpen(true)} />
				<Footer />
			</div>

			{modalOpen && <OnboardingModal onClose={() => setModalOpen(false)} />}
		</React.Fragment>
	);
};

export default TaiyariExpress;
