import { useEffect, useState } from "react";
import type { NavBarPropsType } from "../../types/components";

type Theme = "light" | "dark";

const InitialTheme = (): Theme => {
  return localStorage.getItem("theme") === "dark"
    ? "dark"
    : "light";
}


export const useNavBar = (props: NavBarPropsType) => {

  const { name, lastName } = props;
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

  const getInitials = () => {
    const firstInitial = name.charAt(0).toUpperCase();
    const lastInitial = lastName.charAt(0).toUpperCase();
    return `${firstInitial}${lastInitial}`;
  }

	useEffect(() => {
		setIconAndClass();
	}, [theme]);
  
  return {
    themeIcon, 
    handleThemeToggle,
    getInitials
  }

}