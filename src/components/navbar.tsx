import { useState } from "react";




export const NavBar = () => {

	const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
	const [themeIcon, setThemeIcon] = useState(theme === "light" ? "☀️" : "🌙");

	const handleThemeToggle = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		setThemeIcon(newTheme === "light" ? "☀️" : "🌙");
		localStorage.setItem("theme", newTheme);
		document.body.classList.toggle("dark", newTheme === "dark");
	}

	return (
		<header className="navbar">
			<div className="container navbar-content">

				<a href="#" className="logo">
					IU<span>.</span>
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