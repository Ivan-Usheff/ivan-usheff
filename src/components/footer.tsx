import type { FooterPropsType } from "../types/components"



export const Footer = (props: FooterPropsType) => {

	const { name, lastName } = props;

	return (
		<footer>
			<div className="container">
					<p>
						© {new Date().getFullYear()} {name} {lastName}
					</p>
			</div>
		</footer>
	)
}