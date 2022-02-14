import { createContext, useState, useEffect } from "react"

export const ThemeContext = createContext()

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState("light")
  const [scrollPosition, setScrollPosition] = useState(0)

  const onScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight

    const scrolled = winScroll / height

    setScrollPosition(scrolled)
  }
  window.addEventListener("scroll", onScroll)

  useEffect(() => {
    if (scrollPosition > 0.5) {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }, [scrollPosition])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {theme && props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider