import { About, Contact, Footer, Hero, NavBar, Projects, Skills } from "./components"


function App() {

  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
