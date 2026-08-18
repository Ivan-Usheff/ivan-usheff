import { useNavBar } from "./hooks";

import type { NavBarPropsType } from "../types/components";
import { LanguageDropdown } from "./dropdowns/language.dropdown";


export const NavBar = (props:NavBarPropsType) => {

	const { 
		ui,
		themeIcon, 
		handleThemeToggle, 
		getInitials
	} = useNavBar(props);

	return (
		<header className="navbar">
			<div className="container navbar-content">

				<a href="#" className="logo">
					{getInitials()}<span>.</span>
				</a>

				<nav>
					<a href="#about">{ui.about}</a>
					<a href="#skills">{ui.skills}</a>
					<a href="#projects">{ui.projects}</a>
					<a href="#contact">{ui.contact}</a>
				</nav>
				<div className="language-selector">
  				<LanguageDropdown /> 
				</div>

				<button id="theme-toggle" className="theme-toggle" aria-label={ui.theme} onClick={handleThemeToggle}>
					{themeIcon}
				</button>

			</div>
		</header>
	)
}