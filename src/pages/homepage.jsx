import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Hero from "../components/homepage/hero";
import TechStrip from "../components/homepage/techStrip";
import StatsBar from "../components/homepage/statsBar";
import TabbedSkills from "../components/homepage/tabbedSkills";
import FeaturedProjects from "../components/homepage/featuredProjects";
import Timeline from "../components/homepage/timeline";
import Testimonials from "../components/homepage/testimonials";
import CTASection from "../components/homepage/ctaSection";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/homepage.css";

const Homepage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "home");

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<Hero />
				<TechStrip />
				<StatsBar />
				<TabbedSkills />
				<FeaturedProjects />
				<Timeline />
				<Testimonials />
				<CTASection />
				<Footer />
			</div>
		</React.Fragment>
	);
};

export default Homepage;
