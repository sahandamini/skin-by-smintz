import { ArrowDownRightIcon, ArrowUpRightIcon } from '@phosphor-icons/react'
import { createFileRoute } from '@tanstack/react-router'

import vinylGlowImage from '../../docs/esti_vision_board/47_661255157830430553_many_different_colored_lamps_on_a_pink_background_pin_page.jpg'

export const Route = createFileRoute('/')({ component: LandingPage })

const services = [
	{
		name: 'Virtual skin consultation',
		description:
			'A one-to-one video consultation shaped around your skin, your goals, and the products you already use.',
	},
	{
		name: 'Routine edit',
		description:
			'A focused review that turns an overcrowded or confusing shelf into a routine you can actually follow.',
	},
	{
		name: 'Curated retail',
		description:
			'A considered product edit selected to support your routine without adding noise or unnecessary steps.',
	},
]

function BrandMark() {
	return (
		<a className="brand-mark focus-ring" href="#top">
			Skin Groove
		</a>
	)
}

function LandingPage() {
	return (
		<main id="top" className="groove-site">
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
					Virtual care soon
				</a>
			</header>

			<section className="hero-section page-width" aria-labelledby="hero-title">
				<figure className="hero-media hero-enter">
					<img
						alt="Playful collection of rounded retro lamps on a blush background"
						fetchPriority="high"
						height="1200"
						src={vinylGlowImage}
						width="675"
					/>
				</figure>

				<div className="hero-copy copy-enter">
					<p className="eyebrow">Virtual esthetics</p>
					<h1 id="hero-title">Your best skin era.</h1>
					<p className="hero-description">
						Virtual expertise, a useful routine, and a focused product edit,
						designed for home.
					</p>
					<a className="button button-primary focus-ring" href="#services">
						Explore virtual care
						<ArrowDownRightIcon aria-hidden="true" weight="bold" />
					</a>
				</div>
			</section>

			<div
				className="service-ribbon page-width"
				aria-label="Available services"
			>
				<p>Virtual skin consultation</p>
				<p>Routine tune-up</p>
				<p>Curated retail</p>
			</div>

			<section id="approach" className="approach-section page-width">
				<div className="approach-record" aria-hidden="true">
					<span />
				</div>
				<div className="approach-copy">
					<h2>Skincare should feel like a conversation, not a correction.</h2>
					<p>
						Every consultation begins with listening and ends with a routine
						that makes sense for real life.
					</p>
				</div>
			</section>

			<section id="services" className="services-section page-width">
				<div className="section-heading">
					<h2>Care that meets you where you are.</h2>
					<p>
						Virtual guidance and a focused retail edit for everyday skin
						decisions.
					</p>
				</div>

				<div className="services-layout">
					<div className="services-list">
						{services.map((service) => (
							<article className="service-row" key={service.name}>
								<h3>{service.name}</h3>
								<p>{service.description}</p>
							</article>
						))}
					</div>

					<figure className="services-media">
						<img
							alt="Skincare products arranged for a simple daily routine"
							height="1024"
							loading="lazy"
							src="/images/skincare-ritual.webp"
							width="1536"
						/>
					</figure>
				</div>
			</section>

			<section id="about" className="about-section page-width">
				<figure className="about-media">
					<img
						alt="Woman with naturally luminous skin resting her hand along her jaw"
						height="1402"
						loading="lazy"
						src="/images/hero-skin.webp"
						width="1122"
					/>
				</figure>
				<div className="about-copy">
					<h2>Less noise. More attention.</h2>
					<p>
						Skin Groove is a virtual esthetics practice built around careful
						observation, practical education, and routines that respect your
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
						Virtual consultations and online retail are coming soon. Until then,
						reach out to start the conversation.
					</p>
				</div>
				<a
					className="button booking-button focus-ring"
					href="mailto:hello@skinbysmintz.com"
				>
					Email Skin Groove
					<ArrowUpRightIcon aria-hidden="true" weight="bold" />
				</a>
			</section>

			<footer className="site-footer page-width">
				<BrandMark />
				<p>Virtual esthetics, with personality.</p>
				<p>© {new Date().getFullYear()} Skin Groove</p>
			</footer>
		</main>
	)
}
