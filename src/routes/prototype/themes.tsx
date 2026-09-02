import '@fontsource/barlow-condensed/400.css'
import '@fontsource/barlow-condensed/600.css'
import '@fontsource/dm-serif-display'
import '@fontsource/righteous'
import {
	ArrowLeftIcon,
	ArrowRightIcon,
	ArrowUpRightIcon,
	SparkleIcon,
} from '@phosphor-icons/react'
import { Link, createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'

import afterDarkImage from '../../../docs/esti_vision_board/36_661255157830431992_an_illuminated_table_with_food_and_drinks_on_it_next_to_a_couch.jpg'
import softServeImage from '../../../docs/esti_vision_board/53_661255157830430457_curvy_glo_mirror_shaped_home_pin_page.jpg'

import './themes-prototype.css'

const themes = [
	{ key: 'a', name: 'Sunken Lounge' },
	{ key: 'b', name: 'After Dark' },
	{ key: 'c', name: 'Soft Serve' },
] as const

type ThemeKey = (typeof themes)[number]['key']

function normalizeTheme(value: unknown): ThemeKey {
	if (value === 'b' || value === 'c') return value
	return 'a'
}

export const Route = createFileRoute('/prototype/themes')({
	validateSearch: (search: Record<string, unknown>) => ({
		variant: normalizeTheme(search.variant),
	}),
	head: () => ({
		meta: [{ title: 'Theme studies | Skin by Smintz' }],
	}),
	component: ThemePrototypePage,
})

function ThemePrototypePage() {
	const { variant } = Route.useSearch()

	return (
		<>
			{variant === 'b' ? (
				<AfterDarkStudy />
			) : variant === 'c' ? (
				<SoftServeStudy />
			) : (
				<SunkenLoungeStudy />
			)}
			{import.meta.env.DEV ? <PrototypeSwitcher current={variant} /> : null}
		</>
	)
}

function PrototypeSwitcher({ current }: { current: ThemeKey }) {
	const navigate = Route.useNavigate()
	const currentIndex = themes.findIndex((theme) => theme.key === current)

	const cycleTheme = (direction: number) => {
		const nextIndex = (currentIndex + direction + themes.length) % themes.length
		const nextTheme = themes[nextIndex] ?? themes[0]
		void navigate({
			search: { variant: nextTheme.key },
			replace: true,
		})
	}

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			const target = event.target
			if (
				target instanceof HTMLElement &&
				(target.isContentEditable ||
					target.tagName === 'INPUT' ||
					target.tagName === 'TEXTAREA' ||
					target.tagName === 'SELECT')
			) {
				return
			}

			if (event.key === 'ArrowLeft') cycleTheme(-1)
			if (event.key === 'ArrowRight') cycleTheme(1)
		}

		window.addEventListener('keydown', handleKeyDown)
		return () => window.removeEventListener('keydown', handleKeyDown)
	})

	return (
		<nav className="prototype-switcher" aria-label="Theme studies">
			<button
				aria-label="Previous theme"
				className="prototype-switcher-arrow"
				onClick={() => cycleTheme(-1)}
				type="button"
			>
				<ArrowLeftIcon aria-hidden="true" weight="bold" />
			</button>
			<div className="prototype-switcher-options">
				{themes.map((theme) => (
					<Link
						aria-current={theme.key === current ? 'page' : undefined}
						key={theme.key}
						search={{ variant: theme.key }}
						to="/prototype/themes"
					>
						<span>{theme.key.toUpperCase()}</span>
						{theme.name}
					</Link>
				))}
			</div>
			<button
				aria-label="Next theme"
				className="prototype-switcher-arrow"
				onClick={() => cycleTheme(1)}
				type="button"
			>
				<ArrowRightIcon aria-hidden="true" weight="bold" />
			</button>
		</nav>
	)
}

function SunkenLoungeStudy() {
	return (
		<main className="theme-prototype lounge-study">
			<header className="lounge-header">
				<Link className="lounge-brand" to="/">
					<span aria-hidden="true">S</span>
					Skin by Smintz
				</Link>
				<p>Thoughtful esthetics in a softer setting</p>
				<a className="lounge-header-link" href="#theme-details">
					View the direction
					<ArrowUpRightIcon aria-hidden="true" weight="bold" />
				</a>
			</header>

			<section className="lounge-hero" aria-labelledby="lounge-title">
				<div className="lounge-copy">
					<p className="study-kicker">Sunken Lounge</p>
					<h1 id="lounge-title">Come for the glow. Stay for the exhale.</h1>
					<p>
						A cozy, editorial identity where expertise feels personal and
						self-care feels like a standing invitation.
					</p>
					<a className="lounge-button" href="#theme-details">
						Explore the mood
						<ArrowRightIcon aria-hidden="true" weight="bold" />
					</a>
				</div>

				<figure className="lounge-image">
					<img
						alt="Blush and orange esthetics room with arched shelving and pendant lights"
						height="1280"
						src="/images/theme-sunken-lounge.webp"
						width="720"
					/>
					<figcaption>Soft architecture, rich color, real warmth</figcaption>
				</figure>

				<aside className="lounge-menu" aria-label="Sample service menu">
					<p>Treatment menu</p>
					<ul>
						<li>
							<span>The Custom</span>
							<small>Skin-first facial</small>
						</li>
						<li>
							<span>The Reset</span>
							<small>Barrier recovery</small>
						</li>
						<li>
							<span>The Polish</span>
							<small>Texture and tone</small>
						</li>
					</ul>
				</aside>
			</section>

			<ThemeDetails
				accent="#C04C21"
				colors={[
					['Shell', '#F6EEE7'],
					['Walnut', '#5E2914'],
					['Burnt orange', '#C04C21'],
					['Putty', '#C2B7A1'],
				]}
				font="Righteous + Manrope"
				fontClassName="lounge-type-sample"
				notes="Warm, welcoming, intimate. This direction turns the brand into a modern social club for skin care."
				typeSample="Skin care with soul."
			/>
		</main>
	)
}

function AfterDarkStudy() {
	return (
		<main className="theme-prototype after-dark-study">
			<header className="dark-header">
				<Link className="dark-wordmark" to="/">
					SKIN / SMINTZ
				</Link>
				<p>Private esthetics studio</p>
				<a className="dark-booking" href="#theme-details">
					Booking soon
					<ArrowUpRightIcon aria-hidden="true" weight="bold" />
				</a>
			</header>

			<section className="dark-hero" aria-labelledby="dark-title">
				<figure className="dark-image">
					<img
						alt="Sculptural olive side table glowing beside a deep brown sofa"
						height="1079"
						src={afterDarkImage}
						width="1080"
					/>
					<figcaption>Low light. High touch.</figcaption>
				</figure>

				<div className="dark-copy">
					<p className="study-kicker">After Dark</p>
					<h1 id="dark-title">Serious skin. No sterile energy.</h1>
					<p>
						A treatment-club direction with quiet confidence, precise care, and
						just enough nightlife.
					</p>
					<a className="dark-button" href="#theme-details">
						Enter the studio
						<ArrowRightIcon aria-hidden="true" weight="bold" />
					</a>
				</div>

				<div className="dark-services" aria-label="Sample service menu">
					<p>On the menu</p>
					<span>Custom facial</span>
					<span>Clarifying treatment</span>
					<span>Barrier reset</span>
				</div>
			</section>

			<ThemeDetails
				accent="#DCA626"
				colors={[
					['Smoke', '#17110E'],
					['Espresso', '#2E1E18'],
					['Amber', '#DCA626'],
					['Bone', '#F0E5D5'],
				]}
				font="Barlow Condensed + Manrope"
				fontClassName="dark-type-sample"
				notes="Moody, assured, memorable. This direction positions appointments like a coveted evening ritual."
				typeSample="YOUR SKIN HAS ENTERED THE CHAT."
			/>
		</main>
	)
}

function SoftServeStudy() {
	return (
		<main className="theme-prototype soft-serve-study">
			<header className="soft-header">
				<Link className="soft-brand" to="/">
					<SparkleIcon aria-hidden="true" weight="fill" />
					Skin by Smintz
				</Link>
				<nav aria-label="Sample navigation">
					<a href="#soft-services">Treatments</a>
					<a href="#theme-details">The vibe</a>
				</nav>
				<a className="soft-booking" href="#theme-details">
					Join the list
				</a>
			</header>

			<section className="soft-hero" aria-labelledby="soft-title">
				<div className="soft-heading">
					<p className="study-kicker">Soft Serve</p>
					<h1 id="soft-title">Good skin looks like you, only glowier.</h1>
				</div>

				<figure className="soft-image">
					<img
						alt="Large wavy olive mirror glowing in a warm living space"
						height="1350"
						src={softServeImage}
						width="1080"
					/>
				</figure>

				<div className="soft-intro">
					<p>
						Cheerful, informed treatments with room for personality. Come as you
						are and leave feeling more like yourself.
					</p>
					<a href="#soft-services">
						Find your facial
						<ArrowRightIcon aria-hidden="true" weight="bold" />
					</a>
				</div>

				<div className="soft-burst" aria-hidden="true">
					<span>Glow</span>
					<span>easy</span>
				</div>
			</section>

			<section className="soft-services" id="soft-services">
				<p>Choose your mood</p>
				<ul>
					<li>Fresh start</li>
					<li>Deep clean</li>
					<li>Soft landing</li>
				</ul>
			</section>

			<ThemeDetails
				accent="#66743A"
				colors={[
					['Cream', '#FFF2DF'],
					['Blush', '#E8B5A6'],
					['Avocado', '#66743A'],
					['Cocoa', '#4B2D29'],
				]}
				font="DM Serif Display + Manrope"
				fontClassName="soft-type-sample"
				notes="Playful, human, approachable. This direction makes expertise feel friendly without losing polish."
				typeSample="Comfortable in your skin."
			/>
		</main>
	)
}

function ThemeDetails({
	accent,
	colors,
	font,
	fontClassName,
	notes,
	typeSample,
}: {
	accent: string
	colors: ReadonlyArray<readonly [string, string]>
	font: string
	fontClassName: string
	notes: string
	typeSample: string
}) {
	return (
		<section className="theme-details" id="theme-details">
			<div className="theme-details-intro">
				<p className="study-kicker">Direction notes</p>
				<h2>{notes}</h2>
			</div>

			<div className="theme-palette">
				<p>Core palette</p>
				<ul>
					{colors.map(([name, color]) => (
						<li key={color}>
							<span
								className="theme-swatch"
								style={{ backgroundColor: color }}
							/>
							<strong>{name}</strong>
							<small>{color}</small>
						</li>
					))}
				</ul>
			</div>

			<div className="theme-type">
				<div>
					<p>Type pairing</p>
					<span>{font}</span>
				</div>
				<p className={fontClassName}>{typeSample}</p>
				<span
					className="theme-accent-line"
					style={{ backgroundColor: accent }}
				/>
			</div>
		</section>
	)
}
