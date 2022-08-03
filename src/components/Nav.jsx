import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import './Nav.css'
import logo from './nav-logo.png'

import NavPage from './NavPage'
import { NavContext } from '../contexts/NavContext';

function NavbarLink(props) {
  return <>
    <ul className="md:flex md:flex-row border-2 md:border-none px-3 pointer-events-auto">
      <Link to={props.link} alt={props.name}>
        <p className="text-2xl text-white transition duration-200 transform hover:text-neutral-300 active:text-neutral-500 font-semibold">
          {props.name}
          {/* <div className='bg-white h-1 w-10 mt-0.5'></div> */}
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
      <div className={`transition-all duration-300 ease-out flex justify-center w-full mx-auto fixed z-40 mix-blend-exclusion ${navBackground ? "h-32" : "h-48"} ${navBackground ? 'pointer-events-none' : ''}`}>
        <nav className="flex justify-between items-center w-full px-8 lg:px-24 z-50">
          <div>
            <div>
              <Link
                to="/home"
                className="text-3xl text-white font-bold transition duration-300 hover:text-neutral-300 active:text-neutral-500 pointer-events-auto"
                onClick={
                  (e) => {
                    // onclick: don't navigate to the link if the nav page is visible, instead make the nav page no longer visible
                    e.preventDefault()
                    if (!navPageVisible) {
                      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
                      navigate("/home")
                    } else {
                      setNavPageVisible(false)
                    }
                  }
                }
              >
                
                Pete Pongpeauk
                {/* <div className='bg-white h-1.5 w-[25%] mt-0.5'></div> */}
                {/* <img src={logo} alt="eve logo" height="64px" width="auto" style={{ marginRight: "1rem" }} /> */}

              </Link>
            </div>
          </div>

          <div className="flex-row justify-end items-center">
            <div className="hidden md:flex">
              <NavbarLink name="Home" link="/home" />
              <NavbarLink name="Projects" link="/projects" />
              <NavbarLink name="Experience" link="/experience" />
              <NavbarLink name="Resume" target="_blank" link="/resume.pdf" download />
            </div>
            <li className="md:hidden md:flex-row border-2 md:border-none px-4 shrink flex">
              <Link to="/" className={"menu-opener" + (navPageVisible ? " menu-opener-active" : "")} onClick={(e) => { e.preventDefault(); setNavPageVisible(!navPageVisible); }}>
                <div className="menu-button-hamburger" />
              </Link>
            </li>
          </div>
        </nav>
      </div>
    </>
  )
}