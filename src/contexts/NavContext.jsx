import { createContext, useState, useEffect } from "react"

export const NavContext = createContext()

const NavContextProvider = (props) => {
  const [navBackground, setNavBackground] = useState(false)
  const [projectRef, setProjectRef] = useState(null)
  const [scrollPosition, setScrollPosition] = useState(0)

  // const onScroll = () => {
  //   const winScroll =
  //     document.body.scrollTop || document.documentElement.scrollTop

  //   const height =
  //     document.documentElement.scrollHeight -
  //     document.documentElement.clientHeight

  //   const scrolled = winScroll / height

  //   setScrollPosition(scrolled)
  // }
  const onScroll = () => {
    if (window.scrollY >= 20) {
      setNavBackground(true)
    } else {
      setNavBackground(false)
    }
  }
  window.addEventListener("scroll", onScroll)

  // useEffect(() => {
  //   if (scrollPosition > 0.1) {
  //     setNavBackground(true)
  //   } else {
  //     setNavBackground(false)
  //   }
  // }, [scrollPosition])

  return (
    <NavContext.Provider value={{ navBackground, setNavBackground }}>
      {props.children}
    </NavContext.Provider>
  )
}

export default NavContextProvider