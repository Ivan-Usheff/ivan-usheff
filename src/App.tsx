import { About, Contact, Footer, Hero, NavBar, Projects, Skills } from "./components"
import { useLanguage } from "./utils";

function App() {

  const { config } = useLanguage()
  const { ui, hero, about, skills, projects, contact } = config;

  return (
    <>
      <NavBar name={hero.name} lastName={hero.lastName} ui={ui.navbar} />
      <main>
        <Hero {...hero } ui={ui.hero} />
        <About {...about}  ui={ui.sections.about} />
        <Skills skills={skills} ui={ui.sections.skills} />
        <Projects {...projects} ui={ui.sections.projects} />
        <Contact {...contact} ui={ui.sections.contact} />
      </main>
      <Footer name={hero.name} lastName={hero.lastName} />
    </>
  )
}

export default App
