import { useNavBar } from "./hooks";

import type { NavBarPropsType } from "../types/components";


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

				<button id="theme-toggle" className="theme-toggle" aria-label="Cambiar tema" onClick={handleThemeToggle}>
					{themeIcon}
				</button>

			</div>
		</header>
	)
}