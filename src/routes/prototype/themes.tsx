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

import apricotClubImage from '../../../docs/esti_vision_board/05_661255157830799797_an_assortment_of_orange_colored_objects_and_plants_pin_page.jpg'
import grooveGardenImage from '../../../docs/esti_vision_board/18_661255157830636619_many_different_colored_glass_items_are_stacked_on_top_of_each_ot.jpg'
import afterDarkImage from '../../../docs/esti_vision_board/36_661255157830431992_an_illuminated_table_with_food_and_drinks_on_it_next_to_a_couch.jpg'
import vinylGlowImage from '../../../docs/esti_vision_board/47_661255157830430553_many_different_colored_lamps_on_a_pink_background_pin_page.jpg'
import softServeImage from '../../../docs/esti_vision_board/53_661255157830430457_curvy_glo_mirror_shaped_home_pin_page.jpg'

import './themes-prototype.css'

// Six brand studies on one throwaway route, including three Lounge and Soft Serve hybrids.
const themes = [
	{ key: 'a', name: 'Sunken Lounge' },
	{ key: 'b', name: 'After Dark' },
	{ key: 'c', name: 'Soft Serve' },
	{ key: 'd', name: 'Apricot Club' },
	{ key: 'e', name: 'Groove Garden' },
	{ key: 'f', name: 'Vinyl Glow' },
] as const

type ThemeKey = (typeof themes)[number]['key']

function normalizeTheme(value: unknown): ThemeKey {
	if (
		value === 'b' ||
		value === 'c' ||
		value === 'd' ||
		value === 'e' ||
		value === 'f'
	) {
		return value
	}
	return 'a'
}

export const Route = createFileRoute('/prototype/themes')({
	validateSearch: (search: Record<string, unknown>) => ({
		variant: normalizeTheme(search.variant),
	}),
	head: () => ({
		meta: [{ title: 'Theme studies | Skin Groove' }],
	}),
	component: ThemePrototypePage,
})

function renderThemeStudy(variant: ThemeKey) {
	if (variant === 'b') return <AfterDarkStudy />
	if (variant === 'c') return <SoftServeStudy />
	if (variant === 'd') return <ApricotClubStudy />
	if (variant === 'e') return <GrooveGardenStudy />
	if (variant === 'f') return <VinylGlowStudy />
	return <SunkenLoungeStudy />
}

function ThemePrototypePage() {
	const { variant } = Route.useSearch()

	return (
		<>
			{renderThemeStudy(variant)}
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
					Skin Groove
				</Link>
				<p>Virtual esthetics, tuned to you</p>
				<a className="lounge-header-link" href="#theme-details">
					View the direction
					<ArrowUpRightIcon aria-hidden="true" weight="bold" />
				</a>
			</header>

			<section className="lounge-hero" aria-labelledby="lounge-title">
				<div className="lounge-copy">
					<p className="study-kicker">Sunken Lounge</p>
					<h1 id="lounge-title">Glow. Exhale.</h1>
					<p>
						Personal guidance, thoughtful routines, and a curated shelf, all
						from the comfort of home.
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

				<aside className="lounge-menu" aria-label="Sample virtual service menu">
					<p>Virtual menu</p>
					<ul>
						<li>
							<span>The Consult</span>
							<small>One-to-one skin review</small>
						</li>
						<li>
							<span>The Routine</span>
							<small>A personal home plan</small>
						</li>
						<li>
							<span>The Edit</span>
							<small>Curated retail picks</small>
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
					SKIN / GROOVE
				</Link>
				<p>Virtual esthetics and retail</p>
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
					<figcaption>Low light. Clear advice.</figcaption>
				</figure>

				<div className="dark-copy">
					<p className="study-kicker">After Dark</p>
					<h1 id="dark-title">Skin after dark.</h1>
					<p>
						A virtual skin club with precise guidance, considered products, and
						just enough nightlife.
					</p>
					<a className="dark-button" href="#theme-details">
						See the menu
						<ArrowRightIcon aria-hidden="true" weight="bold" />
					</a>
				</div>

				<div className="dark-services" aria-label="Sample virtual service menu">
					<p>On the menu</p>
					<span>Virtual consultation</span>
					<span>Routine review</span>
					<span>Curated retail</span>
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
				notes="Moody, assured, memorable. This direction makes screen-to-shelf skin care feel like a private club."
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
					Skin Groove
				</Link>
				<nav aria-label="Sample navigation">
					<a href="#soft-services">Consultations</a>
					<a href="#theme-details">The vibe</a>
				</nav>
				<a className="soft-booking" href="#theme-details">
					Join the list
				</a>
			</header>

			<section className="soft-hero" aria-labelledby="soft-title">
				<div className="soft-heading">
					<p className="study-kicker">Soft Serve</p>
					<h1 id="soft-title">Good skin. More you.</h1>
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
						Cheerful guidance with room for personality. Meet online, get a
						clear routine, and shop a considered edit.
					</p>
					<a href="#soft-services">
						Find your routine
						<ArrowRightIcon aria-hidden="true" weight="bold" />
					</a>
				</div>

				<div className="soft-burst" aria-hidden="true">
					<span>Glow</span>
					<span>easy</span>
				</div>
			</section>

			<section className="soft-services" id="soft-services">
				<p>Choose your starting point</p>
				<ul>
					<li>Virtual consult</li>
					<li>Routine refresh</li>
					<li>Retail edit</li>
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

function ApricotClubStudy() {
	return (
		<main className="theme-prototype apricot-club-study">
			<header className="apricot-header">
				<Link className="apricot-brand" to="/">
					Skin Groove
				</Link>
				<nav aria-label="Sample navigation">
					<a href="#apricot-services">Virtual care</a>
					<a href="#theme-details">Retail edit</a>
				</nav>
				<a className="apricot-header-link" href="#apricot-services">
					See virtual care
				</a>
			</header>

			<section className="apricot-hero" aria-labelledby="apricot-title">
				<div className="apricot-heading">
					<p className="study-kicker">Apricot Club</p>
					<h1 id="apricot-title">Find your skin rhythm.</h1>
				</div>

				<figure className="apricot-image">
					<img
						alt="Collection of sculptural orange lamps and playful home objects"
						height="1200"
						src={apricotClubImage}
						width="675"
					/>
				</figure>

				<div className="apricot-intro">
					<p>
						Straightforward virtual guidance, a routine that fits, and products
						you will look forward to using.
					</p>
					<a href="#apricot-services">
						See virtual care
						<ArrowRightIcon aria-hidden="true" weight="bold" />
					</a>
				</div>
			</section>

			<section className="apricot-services" id="apricot-services">
				<h2>A skin club that comes to you.</h2>
				<div>
					<p>
						<strong>Meet</strong>
						<span>One-to-one video consultation</span>
					</p>
					<p>
						<strong>Edit</strong>
						<span>A routine built for real life</span>
					</p>
					<p>
						<strong>Shop</strong>
						<span>A considered product shelf</span>
					</p>
				</div>
			</section>

			<ThemeDetails
				accent="#65733D"
				colors={[
					['Apricot', '#F0B790'],
					['Cocoa', '#512B23'],
					['Avocado', '#65733D'],
					['Custard', '#FFE7CF'],
				]}
				font="Righteous + Manrope"
				fontClassName="apricot-type-sample"
				notes="Sociable, clear, and warm. Lounge colors meet Soft Serve shapes in a friendly virtual skin club."
				typeSample="Find your skin rhythm."
			/>
		</main>
	)
}

function GrooveGardenStudy() {
	return (
		<main className="theme-prototype groove-garden-study">
			<header className="garden-header">
				<Link className="garden-brand" to="/">
					Skin Groove
				</Link>
				<p>Virtual esthetics for real routines</p>
				<a className="garden-header-link" href="#garden-services">
					Explore care
					<ArrowUpRightIcon aria-hidden="true" weight="bold" />
				</a>
			</header>

			<section className="garden-hero" aria-labelledby="garden-title">
				<div className="garden-copy">
					<p className="study-kicker">Groove Garden</p>
					<h1 id="garden-title">Clear skin advice.</h1>
					<p>
						Virtual support that cuts through the noise, keeps the ritual, and
						builds a better shelf.
					</p>
					<a href="#garden-services">
						Build your routine
						<ArrowRightIcon aria-hidden="true" weight="bold" />
					</a>
				</div>

				<figure className="garden-image">
					<img
						alt="Colorful collection of translucent glass lights and objects"
						height="1200"
						src={grooveGardenImage}
						width="675"
					/>
				</figure>
			</section>

			<section className="garden-services" id="garden-services">
				<h2>Good skin care starts with a good conversation.</h2>
				<div className="garden-service-orbit">
					<article>
						<h3>Consult</h3>
						<p>Talk through your skin, goals, and current shelf.</p>
					</article>
					<article>
						<h3>Refine</h3>
						<p>Leave with a clear routine and practical next steps.</p>
					</article>
					<article>
						<h3>Restock</h3>
						<p>Shop a small edit selected with intention.</p>
					</article>
				</div>
			</section>

			<ThemeDetails
				accent="#D9552F"
				colors={[
					['Garden', '#626A3E'],
					['Tangerine', '#D9552F'],
					['Pollen', '#D6B66B'],
					['Milk glass', '#FFF0DB'],
				]}
				font="DM Serif Display + Manrope"
				fontClassName="garden-type-sample"
				notes="Earthy, expressive, and grounded. This hybrid keeps the lounge depth while making the brand feel fresh and open."
				typeSample="Grow into your glow."
			/>
		</main>
	)
}

function VinylGlowStudy() {
	return (
		<main className="theme-prototype vinyl-glow-study">
			<header className="vinyl-header">
				<Link className="vinyl-brand" to="/">
					Skin Groove
				</Link>
				<nav aria-label="Sample navigation">
					<a href="#vinyl-services">Consult</a>
					<a href="#vinyl-services">Shop</a>
				</nav>
				<a className="vinyl-header-link" href="#theme-details">
					About the direction
				</a>
			</header>

			<section className="vinyl-hero" aria-labelledby="vinyl-title">
				<figure className="vinyl-image">
					<img
						alt="Playful collection of rounded retro lamps on a blush background"
						height="1200"
						src={vinylGlowImage}
						width="675"
					/>
				</figure>

				<div className="vinyl-copy">
					<p className="study-kicker">Vinyl Glow</p>
					<h1 id="vinyl-title">Your best skin era.</h1>
					<p>
						Virtual expertise, a useful routine, and a focused product edit,
						designed for home.
					</p>
					<a href="#vinyl-services">
						Find your groove
						<ArrowRightIcon aria-hidden="true" weight="bold" />
					</a>
				</div>
			</section>

			<section className="vinyl-services" id="vinyl-services">
				<p>Virtual skin consultation</p>
				<p>Routine tune-up</p>
				<p>Curated retail</p>
			</section>

			<ThemeDetails
				accent="#C43E23"
				colors={[
					['Apricot', '#F0B790'],
					['Burnt orange', '#C43E23'],
					['Avocado', '#65733D'],
					['Brown vinyl', '#5A2A22'],
				]}
				font="Righteous + DM Serif Display"
				fontClassName="vinyl-type-sample"
				notes="Bold, nostalgic, and upbeat. Apricot warmth and burnt orange lead, with avocado used as a quiet graphic counterpoint."
				typeSample="Put your skin on repeat."
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
