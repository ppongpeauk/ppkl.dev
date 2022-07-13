import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import './Nav.css'
import logo from './nav-logo.png'

import NavPage from './NavPage'
import { NavContext } from '../contexts/NavContext';

function NavbarLink(props) {
  return <>
    <ul className="md:flex md:flex-row border-2 md:border-none px-3">
      <Link to={props.link}>
        <p className="text-2xl text-black transition duration-200 transform md:active:opacity-50 font-semibold mix-blend-difference">
          {props.name}
        </p>
      </Link>
    </ul>
  </>
}

export default function Nav() {
  const [navPageVisible, setNavPageVisible] = useState(false)
  const navigate = useNavigate()
  const { navBackground, setNavBackground } = useContext(NavContext) || { navBackground: false };

  const { projectRef, setProjectRef } = useContext(NavContext) || { projectRef: null };

  return (
    <>
      <NavPage visible={navPageVisible} navToggler={setNavPageVisible} />
      <div className={`transition-all duration-300 ease-out flex justify-center w-full mx-auto fixed z-40 ${navBackground ? "h-32" : "h-48"} ${navBackground && 'bg-white'}`}>
        <nav className="flex justify-between items-center w-full px-8 lg:px-24 z-50">
          <div className="nav-logo">
            <div>
              <Link
                to="/"
                className="text-3xl text-black font-bold mix-blend-difference transition duration-200 active:opacity-50"
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
                {/* <img src={logo} alt="eve logo" height="64px" width="auto" style={{ marginRight: "1rem" }} /> */}
                Pete Pongpeauk
              </Link>
            </div>
          </div>

          <div className="flex-row justify-end items-center">
            <div className="hidden md:flex">
              <NavbarLink name="Home" link="/" />
              <NavbarLink name="Work" link="/projects" />
              <NavbarLink name="Resume" link="/resume" />
            </div>
            <ul className="md:hidden md:flex-row border-2 md:border-none px-4 shrink flex">
              <Link to="/" className={"menu-opener" + (navPageVisible ? " menu-opener-active" : "")} onClick={(e) => { e.preventDefault(); setNavPageVisible(!navPageVisible); }}>
                <div className="menu-button-hamburger" />
              </Link>
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}