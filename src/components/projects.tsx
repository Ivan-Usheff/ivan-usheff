import type { ProjectType } from "../types"



export const Projects = (props: ProjectType) => {

  const { description, projects } = props;

  const projectCards = () => {
    if(!projects || projects.length === 0) 
      return null;
    return projects.map((project, index) => {
      const { type, name, description, technologies, links } = project;
      return (
        <article key={index} className="project-card"> 
          <div>
            <span className="project-type"> {type} </span>
            <h3> {name} </h3>
            <p> {description} </p>
            <div className="project-technologies">
              {technologies.map((tech, techIndex) => (
                <span key={techIndex}>{tech}</span>
              ))}
            </div>
          </div>
          <div className="project-links">
            {
              links.map((link, linkIndex) => {
                const { name, url, target } = link;
                return (
                  <a key={linkIndex} href={url} target={target ? "_blank" : undefined}>
                    {name} →
                  </a>
                )
              })
            }
          </div>
        </article>
      )
    })
  }

  return (

    <section id="projects" className="section">
      <div className="container">

        <h2 className="section-title">
          Proyectos
        </h2>

        <p className="section-description">
          {description}
        </p>


        <div className="projects-grid">
          
          {/* PROJECT */}
          {projectCards()}

        </div>

      </div>
    </section>
  )
}