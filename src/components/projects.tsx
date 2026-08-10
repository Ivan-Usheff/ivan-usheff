


export const Projects = () => {
  return (

    <section id="projects" className="section">
      <div className="container">

        <h2 className="section-title">
          Proyectos
        </h2>

        <p className="section-description">
          Algunos proyectos personales y profesionales en los que
          he trabajado.
        </p>


        <div className="projects-grid">

          {/* PROJECT */}

          <article className="project-card">

            <div>

              <span className="project-type">
                Backend
              </span>

              <h3>
                Config Service
              </h3>

              <p>
                Servicio centralizado de configuración diseñado para
                arquitecturas de microservicios.
              </p>

              <div className="project-technologies">
                <span>NestJS</span>
                <span>TypeScript</span>
                <span>MongoDB</span>
                <span>Docker</span>
              </div>

            </div>

            <div className="project-links">

              <a href="#">
                GitHub →
              </a>

              <a href="#">
                Ver proyecto →
              </a>

            </div>

          </article>


          {/* PROJECT */}

          <article className="project-card">

            <div>

              <span className="project-type">
                Backend
              </span>

              <h3>
                Company BFF
              </h3>

              <p>
                Backend For Frontend encargado de conectar aplicaciones
                cliente con distintos microservicios.
              </p>

              <div className="project-technologies">
                <span>NestJS</span>
                <span>WebSockets</span>
                <span>PostgreSQL</span>
                <span>Docker</span>
              </div>

            </div>

            <div className="project-links">

              <a href="#">
                GitHub →
              </a>

              <a href="#">
                Arquitectura →
              </a>

            </div>

          </article>


          {/* PROJECT */}

          <article className="project-card">

            <div>

              <span className="project-type">
                Library
              </span>

              <h3>
                Utils Library
              </h3>

              <p>
                Librería reutilizable para proyectos NestJS con módulos,
                decoradores, entidades base y utilidades comunes.
              </p>

              <div className="project-technologies">
                <span>TypeScript</span>
                <span>NestJS</span>
                <span>npm</span>
              </div>

            </div>

            <div className="project-links">

              <a href="#">
                GitHub →
              </a>

            </div>

          </article>


          {/* PROJECT */}

          <article className="project-card">

            <div>

              <span className="project-type">
                Personal project
              </span>

              <h3>
                RPG 2D
              </h3>

              <p>
                Proyecto personal orientado al desarrollo de un RPG 2D
                aplicando conceptos de arquitectura de software,
                programación orientada a objetos y game loops.
              </p>

              <div className="project-technologies">
                <span>Python</span>
                <span>Pygame</span>
              </div>

            </div>

            <div className="project-links">

              <a href="#">
                GitHub →
              </a>

            </div>

          </article>

        </div>

      </div>
    </section>
  )
}