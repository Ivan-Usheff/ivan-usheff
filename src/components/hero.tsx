import type { HeroType } from "../types"



export const Hero = (props: HeroType) => {

	const { name, lastName, role, description, links } = props;


	const actionsLinks = () => {
		return links.map((link, index) => {
			const { name, url, target } = link;
			return (
				<a key={index} href={url} target={target ? "_blank" : undefined} rel="noopener noreferrer"
					className="button secondary">
					{name}
				</a>
			)
		})
	}

	return (
		<section className="hero">
			<div className="container hero-content">

				<p className="subtitle">
					Hola, soy
				</p>

				<h1>
					{name} {lastName}
				</h1>

				<h2>
					{role}
				</h2>

				<p className="hero-description">
					{description}
				</p>

				<div className="hero-actions">

					<a href="#projects" className="button primary">
						Ver proyectos
					</a>
					
					{actionsLinks()}

				</div>

			</div>
		</section>
	)
}
