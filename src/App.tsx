import { About, Contact, Footer, Hero, NavBar, Projects, Skills } from "./components"
import { PERSONAL_CONFIG } from "./config/personal.config";

function App() {

  const { hero, about, skills, projects, contact } = PERSONAL_CONFIG;

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
