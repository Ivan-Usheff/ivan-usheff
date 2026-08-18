import type { AboutPropsType } from "../types"



export const About = (props:AboutPropsType) => {

  const { description, ui } = props;

  return (
    <section id="about" className="section">
      <div className="container">

        <h2 className="section-title">
          {ui}
        </h2>

        <p className="about-text">
          {description}
        </p>

      </div>
    </section>
  )
}