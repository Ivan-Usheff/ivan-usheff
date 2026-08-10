import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const InitialTheme = (): Theme => {
  return localStorage.getItem("theme") === "dark"
    ? "dark"
    : "light";
}


export const useNavBar = () => {

	const [theme, setTheme] = useState(InitialTheme());
  const themeIcon = theme === "light" ? "🌙" : "☀️";

	const setIconAndClass	= () => {
    document.body.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
	}

	const handleThemeToggle = () => {
    setTheme(current =>
      current === "light" ? "dark" : "light"
    );
	}

	useEffect(() => {
		setIconAndClass();
	}, [theme]);
  
  return {
    themeIcon, 
    handleThemeToggle
  }

}