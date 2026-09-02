import {
	ArrowDownRightIcon,
	ArrowUpRightIcon,
	SparkleIcon,
} from '@phosphor-icons/react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: LandingPage })

const services = [
	{
		name: 'Signature facial',
		description:
			'A considered reset shaped around your skin, your routine, and how you want to feel when you leave.',
	},
	{
		name: 'Clarifying treatment',
		description:
			'Targeted care for congestion and texture, paced to support the skin instead of overwhelming it.',
	},
	{
		name: 'Barrier reset',
		description:
			'Comfort-first treatment for skin that feels reactive, depleted, or simply in need of a softer approach.',
	},
]

function BrandMark() {
	return (
		<a
			className="brand-mark focus-ring"
			href="#top"
			aria-label="Skin by Smintz, back to top"
		>
			<span className="brand-orbit" aria-hidden="true">
				<SparkleIcon weight="fill" />
			</span>
			<span>Skin by Smintz</span>
		</a>
	)
}

function LandingPage() {
	return (
		<main id="top" className="site-shell">
			<section className="hero-section">
				<header className="site-header page-width">
					<BrandMark />
					<nav aria-label="Primary navigation" className="desktop-nav">
						<a className="nav-link focus-ring" href="#services">
							Services
						</a>
						<a className="nav-link focus-ring" href="#approach">
							Approach
						</a>
						<a className="nav-link focus-ring" href="#about">
							About
						</a>
					</nav>
					<a className="header-cta focus-ring" href="#booking">
						Booking soon
					</a>
				</header>

				<div className="hero-grid page-width">
					<div className="hero-copy enter-up">
						<p className="eyebrow">Thoughtful esthetics</p>
						<h1>
							Skin health,
							<span>made personal.</span>
						</h1>
						<p className="hero-description">
							Unhurried, customized facials for skin that feels clear,
							comfortable, and understood.
						</p>
						<div className="hero-actions">
							<a className="button button-primary focus-ring" href="#services">
								Explore services
								<ArrowDownRightIcon aria-hidden="true" weight="bold" />
							</a>
							<a className="button button-secondary focus-ring" href="#about">
								Meet Smintz
							</a>
						</div>
					</div>

					<div className="hero-media">
						<img
							alt="Woman with naturally luminous skin resting her hand along her jaw"
							fetchPriority="high"
							height="1402"
							src="/images/hero-skin.webp"
							width="1122"
						/>
					</div>
				</div>
			</section>

			<section id="approach" className="manifesto-section page-width">
				<div className="manifesto-mark" aria-hidden="true">
					<SparkleIcon weight="fill" />
				</div>
				<p className="manifesto-copy">
					Skincare should feel like a conversation, not a correction. Every
					session begins with listening and ends with a routine that makes sense
					for real life.
				</p>
			</section>

			<section id="services" className="services-section page-width">
				<div className="section-heading">
					<h2>Care for the skin you are in.</h2>
					<p>A focused menu designed to meet your skin where it is today.</p>
				</div>

				<div className="services-layout">
					<div className="services-list">
						{services.map((service) => (
							<article className="service-row" key={service.name}>
								<div>
									<h3>{service.name}</h3>
									<p>{service.description}</p>
								</div>
							</article>
						))}
					</div>

					<figure className="services-media">
						<img
							alt="Esthetician applying a gentle facial treatment with a soft brush"
							height="1024"
							loading="lazy"
							src="/images/treatment.webp"
							width="1536"
						/>
					</figure>
				</div>
			</section>

			<section id="about" className="about-section page-width">
				<div className="about-media">
					<img
						alt="Minimal arrangement of unbranded skincare essentials on cool gray stone"
						height="1050"
						loading="lazy"
						src="/images/skincare-ritual.webp"
						width="1400"
					/>
				</div>
				<div className="about-copy">
					<h2>Less noise. More attention.</h2>
					<p>
						Skin by Smintz is a private esthetics practice built around careful
						observation, practical education, and treatments that respect your
						skin barrier.
					</p>
					<p>
						No rushed protocols. No crowded routines. Just informed care and a
						plan you can actually follow.
					</p>
				</div>
			</section>

			<section id="booking" className="booking-section page-width">
				<div>
					<h2>Your next skin chapter starts here.</h2>
					<p>
						Online scheduling is coming soon. Until then, reach out to start the
						conversation.
					</p>
				</div>
				<a
					className="button booking-button focus-ring"
					href="mailto:hello@skinbysmintz.com"
				>
					Email the studio
					<ArrowUpRightIcon aria-hidden="true" weight="bold" />
				</a>
			</section>

			<footer className="site-footer page-width">
				<BrandMark />
				<p>Personalized esthetics, with intention.</p>
				<p>© {new Date().getFullYear()} Skin by Smintz</p>
			</footer>
		</main>
	)
}
