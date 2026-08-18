import type { ContactPropType } from "../types"


export const Contact = (props: ContactPropType) => {

  const { message, links, ui } = props

  const linksList = () => {
    return links.map((link, index) => {
      const { name, url, target } = link;
      return(
        <a key={index} href={url} target={target ? "_blank" : "_self"} rel={target ? "noopener noreferrer" : undefined} >
            {name}
        </a>
      )
    })
  }

  return (
    <section id="contact" className="section section-alt">
      <div className="container contact">

        <h2 className="section-title">
          {ui}
        </h2>

        <p>{message}</p>

        <div className="contact-links">
          {linksList()}
        </div>

      </div>
    </section>
  )
}