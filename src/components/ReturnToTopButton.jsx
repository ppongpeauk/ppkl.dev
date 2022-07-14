import { useState, useEffect } from "react"
import { ArrowUpward } from "@mui/icons-material"
export default function ReturnToTopButton() {
  const [visible, setVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    if (scrollY > 512) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }, [scrollY])

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY)
    })
  }, [])

  return <>
    <div className={`transition-all duration-300 fixed bottom-0 right-0 mr-8 mb-8 z-50 mix-blend-difference ${visible ? 'bottom-0 opacity-100 pointer-events-auto' : '-bottom-16 opacity-0 pointer-events-none'}`}>
      <button className="transition duration-300 ease-in-out bg-transparent hover:opacity-75 active:opacity-100 text-white font-semibold active:text-black active:bg-white border-white border-[3px] rounded-full p-2" onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }) }}>
        <ArrowUpward fontSize="large" />
      </button>
    </div>
  </>
}