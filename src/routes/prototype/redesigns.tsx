import {
	ArrowLeftIcon,
	ArrowRightIcon,
	ArrowUpRightIcon,
} from '@phosphor-icons/react'
import { createFileRoute } from '@tanstack/react-router'
import { useCallback, useEffect } from 'react'

import { cn } from '@/lib/utils/ui'

import vinylGlowImage from '../../../docs/esti_vision_board/47_661255157830430553_many_different_colored_lamps_on_a_pink_background_pin_page.jpg'

import './redesigns-prototype.css'

type VariantKey = 'consult' | 'editorial' | 'cabinet'

const variants: Array<{ key: VariantKey; name: string }> = [
	{ key: 'consult', name: 'The Consultation' },
	{ key: 'editorial', name: 'The Skin Edit' },
	{ key: 'cabinet', name: 'The Groove Cabinet' },
]

const serviceDetails = [
	{
		title: 'Virtual consultation',
		body: 'A focused video appointment about your skin, current products, goals, and everyday habits.',
	},
	{
		title: 'Routine edit',
		body: 'A practical plan that keeps what works, removes what does not, and explains every step.',
	},
	{
		title: 'Curated retail',
		body: 'A considered selection of products chosen to support your routine without adding clutter.',
	},
]

const buttonToneClasses = {
	orange: 'lab-button-orange',
	ink: 'lab-button-ink',
	outline: 'lab-button-outline',
} as const

export const Route = createFileRoute('/prototype/redesigns')({
	validateSearch: (
		search: Record<string, unknown>,
	): { variant: VariantKey } => ({
		variant:
			search.variant === 'editorial'
				? 'editorial'
				: search.variant === 'cabinet'
					? 'cabinet'
					: 'consult',
	}),
	head: () => ({
		meta: [
			{ title: 'Skin Groove | Layout Studies' },
			{
				name: 'description',
				content: 'Three layout directions for the Skin Groove website.',
			},
		],
	}),
	component: RedesignPrototype,
})

function PlaceholderButton({
	children,
	tone = 'orange',
}: {
	children: string
	tone?: 'orange' | 'ink' | 'outline'
}) {
	return (
		<button
			className={cn('lab-button', buttonToneClasses[tone])}
			disabled
			type="button"
		>
			{children}
			<span className="lab-button-note">Coming soon</span>
		</button>
	)
}

function Wordmark({ inverse = false }: { inverse?: boolean }) {
	return (
		<a
			className={cn('lab-wordmark', inverse && 'lab-wordmark-inverse')}
			href="#top"
		>
			Skin Groove
		</a>
	)
}

function SimpleNav({ inverse = false }: { inverse?: boolean }) {
	return (
		<nav className={cn('lab-nav', inverse && 'lab-nav-inverse')}>
			<Wordmark inverse={inverse} />
			<div className="lab-nav-links">
				<a href="#services">Services</a>
				<a href="#approach">Approach</a>
				<a href="#about">About</a>
			</div>
			<PlaceholderButton tone={inverse ? 'outline' : 'ink'}>
				Book
			</PlaceholderButton>
		</nav>
	)
}

function ConsultVariant() {
	return (
		<article id="top" className="lab-page consult-page">
			<SimpleNav />

			<header className="consult-hero">
				<div className="consult-hero-copy lab-enter">
					<h1>Meet your skin where it is.</h1>
					<p>
						One-to-one virtual guidance and a routine built for your real life.
					</p>
					<div className="lab-button-row">
						<PlaceholderButton>Book a consult</PlaceholderButton>
						<a className="lab-text-link" href="#services">
							See how it works <ArrowRightIcon aria-hidden="true" />
						</a>
					</div>
				</div>

				<figure className="consult-hero-photo lab-photo-reveal">
					<img
						alt="Unbranded skincare arranged on a smoked-glass table in an apricot sunken lounge"
						fetchPriority="high"
						height="1024"
						src="/images/skin-groove-lounge-still-life.webp"
						width="1536"
					/>
				</figure>
			</header>

			<section className="consult-promise" id="approach">
				<div className="consult-promise-copy">
					<h2>Your routine starts with a conversation.</h2>
					<p>
						Professional guidance does not need a treatment room. We look at
						your goals, products, patterns, and questions together, then turn
						the noise into a plan you understand.
					</p>
				</div>
			</section>

			<section className="consult-process" id="services">
				<div className="consult-process-intro">
					<h2>What virtual care looks like.</h2>
					<p>
						A clear path from first conversation to a routine that fits your
						day.
					</p>
				</div>
				<div className="consult-process-list">
					{serviceDetails.map((service) => (
						<article key={service.title}>
							<h3>{service.title}</h3>
							<p>{service.body}</p>
						</article>
					))}
				</div>
			</section>

			<section className="consult-routine">
				<figure>
					<img
						alt="A simple group of skincare products for an everyday routine"
						height="1024"
						loading="lazy"
						src="/images/skincare-ritual.webp"
						width="1536"
					/>
				</figure>
				<div>
					<h2>Keep the products that earn their place.</h2>
					<p>
						A good routine does not need to be crowded. Each recommendation has
						a purpose, an order, and a reason.
					</p>
					<PlaceholderButton tone="outline">Visit the shop</PlaceholderButton>
				</div>
			</section>

			<section className="consult-about" id="about">
				<div className="consult-about-mark" aria-hidden="true">
					<span />
				</div>
				<div>
					<h2>Care, not correction.</h2>
					<p>
						Skin Groove is built around careful observation, useful education,
						and respect for your skin barrier.
					</p>
				</div>
			</section>

			<PrototypeFooter />
		</article>
	)
}

function EditorialVariant() {
	return (
		<article id="top" className="lab-page editorial-page">
			<SimpleNav />

			<header className="editorial-hero">
				<div className="editorial-hero-title lab-enter">
					<h1>
						Good skin advice should feel like <em>relief.</em>
					</h1>
				</div>
				<figure className="editorial-portrait lab-photo-reveal">
					<img
						alt="Woman with naturally luminous skin resting her hand along her jaw"
						fetchPriority="high"
						height="1402"
						src="/images/hero-skin.webp"
						width="1122"
					/>
				</figure>
				<div className="editorial-hero-aside">
					<p>
						Virtual esthetics for a calmer routine and a shelf that finally
						makes sense.
					</p>
					<PlaceholderButton>Book a consult</PlaceholderButton>
				</div>
			</header>

			<section className="editorial-manifesto" id="approach">
				<p className="editorial-dropcap">
					Your skin is not a problem to solve. It is something to understand.
				</p>
				<div>
					<p>
						Skin Groove replaces product overwhelm with a considered point of
						view. We begin with what you notice, how your routine feels, and
						what your day can realistically hold.
					</p>
					<p>
						The result is clear guidance you can return to, plus a focused edit
						of products when you need them.
					</p>
				</div>
			</section>

			<section className="editorial-services" id="services">
				<h2>The skin edit.</h2>
				<div className="editorial-service-grid">
					{serviceDetails.map((service) => (
						<article key={service.title}>
							<h3>{service.title}</h3>
							<p>{service.body}</p>
						</article>
					))}
				</div>
			</section>

			<section className="editorial-collage">
				<figure className="editorial-collage-large">
					<img
						alt="Unbranded skincare on a glass table in a curved apricot lounge"
						height="1024"
						loading="lazy"
						src="/images/skin-groove-lounge-still-life.webp"
						width="1536"
					/>
				</figure>
				<div className="editorial-collage-copy">
					<h2>Your shelf can breathe, too.</h2>
					<p>
						Shop a concise product edit shaped by professional care, not trend
						cycles.
					</p>
					<PlaceholderButton tone="outline">Shop the edit</PlaceholderButton>
				</div>
				<figure className="editorial-collage-small">
					<img
						alt="Rounded retro lamps in orange, cream, green, and pink"
						height="1200"
						loading="lazy"
						src={vinylGlowImage}
						width="675"
					/>
				</figure>
			</section>

			<section className="editorial-close" id="about">
				<h2>Less noise. More attention.</h2>
				<p>
					Come with your questions, your current products, and your real
					routine. We will start there.
				</p>
				<PlaceholderButton tone="ink">Book</PlaceholderButton>
			</section>

			<PrototypeFooter />
		</article>
	)
}

function CabinetVariant() {
	return (
		<article id="top" className="lab-page cabinet-page">
			<SimpleNav />

			<header className="cabinet-hero">
				<div className="cabinet-hero-copy lab-enter">
					<h1>A better routine, picked with purpose.</h1>
					<p>
						Virtual skin guidance and a tightly edited shop, together in one
						place.
					</p>
					<div className="lab-button-row">
						<PlaceholderButton>Shop the cabinet</PlaceholderButton>
						<PlaceholderButton tone="outline">Book</PlaceholderButton>
					</div>
				</div>
				<div className="cabinet-hero-mosaic lab-photo-reveal">
					<figure className="cabinet-main-photo">
						<img
							alt="Skincare vessels arranged on a glass table in an apricot lounge"
							fetchPriority="high"
							height="1024"
							src="/images/skin-groove-lounge-still-life.webp"
							width="1536"
						/>
					</figure>
					<figure className="cabinet-side-photo">
						<img
							alt="A concise group of skincare products"
							height="1024"
							src="/images/skincare-ritual.webp"
							width="1536"
						/>
					</figure>
				</div>
			</header>

			<section className="cabinet-principle" id="approach">
				<h2>Nothing on the shelf without a reason.</h2>
				<div className="cabinet-principle-columns">
					<p>
						Skin Groove connects recommendations to the person using them. Your
						routine comes first. The product list follows.
					</p>
					<p>
						That means fewer impulse buys, clearer instructions, and a cabinet
						that supports what your skin actually needs.
					</p>
				</div>
			</section>

			<section className="cabinet-shelves" id="services">
				<h2>Two ways in.</h2>
				<div className="cabinet-shelf cabinet-shelf-consult">
					<div>
						<h3>Start with your skin.</h3>
						<p>
							Bring your routine to a virtual consultation. Leave with a clear,
							personal plan.
						</p>
					</div>
					<PlaceholderButton tone="ink">Book a consult</PlaceholderButton>
				</div>
				<div className="cabinet-shelf cabinet-shelf-shop">
					<div>
						<h3>Start with the edit.</h3>
						<p>
							Browse a small, considered collection with a clear reason for
							every product.
						</p>
					</div>
					<PlaceholderButton>Visit the shop</PlaceholderButton>
				</div>
			</section>

			<section className="cabinet-feature">
				<figure>
					<img
						alt="Woman with naturally luminous skin resting her hand along her jaw"
						height="1402"
						loading="lazy"
						src="/images/hero-skin.webp"
						width="1122"
					/>
				</figure>
				<div>
					<p className="cabinet-pull-quote">
						A little groove, a lot of good judgment.
					</p>
					<p>
						The shop is not a warehouse. It is the online retail extension of
						the care behind every consultation.
					</p>
				</div>
			</section>

			<section className="cabinet-about" id="about">
				<h2>Skin advice with taste.</h2>
				<p>
					Skin Groove brings trained attention, practical education, and a clear
					retail point of view into your home.
				</p>
				<a className="lab-text-link" href="#top">
					Meet Skin Groove <ArrowUpRightIcon aria-hidden="true" />
				</a>
			</section>

			<PrototypeFooter />
		</article>
	)
}

function PrototypeFooter() {
	return (
		<footer className="lab-footer">
			<Wordmark />
			<p>Virtual esthetics, with personality.</p>
			<p>© {new Date().getFullYear()} Skin Groove</p>
		</footer>
	)
}

function PrototypeSwitcher({ current }: { current: VariantKey }) {
	const navigate = Route.useNavigate()
	const currentIndex = variants.findIndex((item) => item.key === current)

	const move = useCallback(
		(offset: number) => {
			const nextIndex =
				(currentIndex + offset + variants.length) % variants.length
			window.scrollTo(0, 0)
			void navigate({
				search: { variant: variants[nextIndex]?.key ?? 'consult' },
				replace: true,
			})
		},
		[currentIndex, navigate],
	)

	useEffect(() => {
		const onKeyDown = (event: KeyboardEvent) => {
			if (
				event.target instanceof HTMLElement &&
				event.target.matches(
					'input, textarea, select, button, [contenteditable="true"]',
				)
			)
				return

			if (event.key === 'ArrowLeft') move(-1)
			if (event.key === 'ArrowRight') move(1)
		}

		window.addEventListener('keydown', onKeyDown)
		return () => window.removeEventListener('keydown', onKeyDown)
	}, [move])

	return (
		<aside className="prototype-switcher" aria-label="Choose a layout study">
			<button
				aria-label="Previous layout"
				onClick={() => move(-1)}
				type="button"
			>
				<ArrowLeftIcon aria-hidden="true" weight="bold" />
			</button>
			<div className="prototype-switcher-options">
				{variants.map((variant) => (
					<button
						aria-current={variant.key === current ? 'page' : undefined}
						className={cn(variant.key === current && 'is-active')}
						key={variant.key}
						onClick={() => {
							window.scrollTo(0, 0)
							void navigate({
								search: { variant: variant.key },
								replace: true,
							})
						}}
						type="button"
					>
						{variant.name}
					</button>
				))}
			</div>
			<button aria-label="Next layout" onClick={() => move(1)} type="button">
				<ArrowRightIcon aria-hidden="true" weight="bold" />
			</button>
		</aside>
	)
}

function RedesignPrototype() {
	const { variant } = Route.useSearch()

	return (
		<div className="layout-lab">
			<PrototypeSwitcher current={variant} />
			{variant === 'consult' && <ConsultVariant />}
			{variant === 'editorial' && <EditorialVariant />}
			{variant === 'cabinet' && <CabinetVariant />}
		</div>
	)
}
