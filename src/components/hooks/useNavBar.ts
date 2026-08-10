import { useState } from "react";


const InitialTheme = () => {
	return localStorage.getItem("theme") || "light";
}

const getIcon = (theme:string) => {
  return theme === "light" ? "☀️" : "🌙";
}

const InitialThemeIcon = () => {
	const theme = InitialTheme();
	return getIcon(theme);
}


export const useNavBar = () => {

	const [theme, setTheme] = useState(InitialTheme());
	const [themeIcon, setThemeIcon] = useState(InitialThemeIcon());

	const setIconAndClass	= (newTheme: string) => {
		setThemeIcon(getIcon(newTheme));
		document.body.classList.toggle("dark", newTheme === "dark");
	}

	const handleThemeToggle = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		setIconAndClass(newTheme);
		localStorage.setItem("theme", newTheme);
	}

  return {
    theme,
    themeIcon,
    handleThemeToggle,
    setIconAndClass
  }

}