import type { HeroPropsType } from "../types"



export const Hero = (props: HeroPropsType) => {

	const { name, lastName, role, description, links, cv, ui } = props;
	const cvurl = cv ? `${import.meta.env.BASE_URL}/cv/${cv}` : `${import.meta.env.BASE_URL}/cv/`;

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

	const cvDownloaderLink = () => {
		if (cv) {
			return (
				<a 
					href={cvurl} 
					className="button primary" 
					target="_blank"
					rel="noopener noreferrer"
					download={cv}>
					CV
				</a>
			)
		}
	}

	return (
		<section className="hero">
			<div className="container hero-content">

				<p className="subtitle">
					{ui.subtitle}
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
						{ui.viewProjects}
					</a>

					{cvDownloaderLink()}

					{actionsLinks()}

				</div>

			</div>
		</section>
	)
}
