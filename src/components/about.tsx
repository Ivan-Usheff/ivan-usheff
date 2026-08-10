import type { AboutType } from "../types"



export const About = (props:AboutType) => {

  const { description, image, media } = props;

  return (
    <section id="about" className="section">
      <div className="container">

        <h2 className="section-title">
          Sobre mí
        </h2>

        <p className="about-text">
          {description}
        </p>

      </div>
    </section>
  )
}