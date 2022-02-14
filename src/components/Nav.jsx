import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './Nav.css'
import logo from './nav-logo.png'

import NavPage from './NavPage'

export default function Nav() {
  const [navPageVisible, setNavPageVisible] = useState(false)
  const navigate = useNavigate()
  return (
    <>
      <NavPage visible={navPageVisible} navToggler={setNavPageVisible} />
      <header className="nav">
        <div className="nav-container">
          <div className="nav-logo">
            <div>
              <Link
                to="/"
                style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                onClick={
                  (e) => {
                    // onclick: don't navigate to the link if the nav page is visible, instead make the nav page no longer visible
                    e.preventDefault()
                    if (!navPageVisible) {
                      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
                      navigate("/")
                    } else {
                      setNavPageVisible(false)
                    }
                  }
                }
              >
                <img src={logo} alt="eve logo" height={64} style={{ marginRight: "1rem" }} />
                {/* <span className="nav-logo" style={{ fontSize: "2rem", fontWeight: 700 }}>EVE HOLLOWAY</span> */}
              </Link>
            </div>
          </div>

          <div className="nav-links">
            <Link to="/" className={"menu-opener" + (navPageVisible ? " menu-opener-active" : "")} onClick={(e) => { e.preventDefault(); setNavPageVisible(!navPageVisible); }}>
              <div className="menu-button-hamburger" />
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}