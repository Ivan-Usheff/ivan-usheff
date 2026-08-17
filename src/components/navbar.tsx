import { useNavBar } from "./hooks";

import type { NavBarPropsType } from "../types/components";
import { LanguageDropdown } from "./dropdowns/language.dropdown";


export const NavBar = (props:NavBarPropsType) => {

	const { 
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
					<a href="#about">Sobre mí</a>
					<a href="#skills">Tecnologías</a>
					<a href="#projects">Proyectos</a>
					<a href="#contact">Contacto</a>
				</nav>
				<div className="language-selector">
  				<LanguageDropdown /> 
				</div>

				<button id="theme-toggle" className="theme-toggle" aria-label="Cambiar tema" onClick={handleThemeToggle}>
					{themeIcon}
				</button>

			</div>
		</header>
	)
}