import { Helmet } from 'react-helmet'
import figure1 from './figure1.png'
import './About.css'
export default function About() {
  return (
    <>
      <Helmet>
        <title>home</title>
      </Helmet>
      <section className="section-about">
        <div style={{ maxWidth: "25%", padding: "2rem" }}>
          <h1 style={{ fontSize: "48px", fontWeight: 700 }}>Hi, I'm Pete.</h1>
          <p>description</p>

        </div>
        <div style={{ maxWidth: "25%", padding: "2rem" }}>
          <img src={figure1} width="100%" style={{ objectFit: "fit", borderRadius: "50%" }}></img>
        </div>
      </section>
    </>
  )
}