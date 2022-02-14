import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'
import figure1 from './figure3.png'
import './Home.css'
export default function Home() {
  return (
    <>
      <Helmet>
        <title>page d'accueil</title>
      </Helmet>
      <section className="section-home">
        <div style={{ maxWidth: "25%", padding: "2rem" }}>
          <div>
            <h1 style={{ fontSize: "48px", fontWeight: "bold" }}>Hi, I'm <strong>Pete.</strong></h1>
            <p>17 y/o full-stack software engineer from Washington, D.C.</p>
          </div>
          <div className="home-button-container">
            <Link to="/work" className="home-button">see work</Link>
          </div>
        </div>
        <div style={{ maxWidth: "384px", padding: "2rem" }}>
          <img className="home-mugshot" src={figure1} width="100%"></img>
        </div>
      </section>
      <section className="section-projects">
        <div style={{ maxWidth: "25%", padding: "2rem" }}>
          <div>
            <h1 style={{ fontSize: "48px", fontWeight: "bold" }}>Projects</h1>
            <p>Here are all of the projects that I've worked on!</p>
          </div>
        </div>
        <div className="project-card-list" style={{ maxWidth: "512px", padding: "2rem" }}>
          <div className="project-card">
            <div className="project-card-image">
              <img src="https://via.placeholder.com/192x192" alt="placeholder" />
            </div>
          </div>
          <div className="project-card">
            <div className="project-card-image">
              <img src="https://via.placeholder.com/192x192" alt="placeholder" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}