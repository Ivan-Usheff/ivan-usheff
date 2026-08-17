import { About, Contact, Footer, Hero, NavBar, Projects, Skills } from "./components"
import { useLanguage } from "./utils";

function App() {

  const { config } = useLanguage()
  const { hero, about, skills, projects, contact } = config;

  return (
    <>
      <NavBar name={hero.name} lastName={hero.lastName} />
      <main>
        <Hero {...hero} />
        <About {...about} />
        <Skills skills = {skills} />
        <Projects {...projects} />
        <Contact {...contact} />
      </main>
      <Footer name={hero.name} lastName={hero.lastName} />
    </>
  )
}

export default App
