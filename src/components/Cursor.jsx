import { width } from "@mui/system";
import { useRef, useState, useEffect } from "react";
import './Cursor.css';

export default function Cursor() {
  const dot = useRef(null);
  const dotOutline = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [cursorEnlarged, setCursorEnlarged] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  const mouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }

  const mouseOver = (e) => {

  }

  const mouseDown = (e) => {
    setCursorEnlarged(true);
  }

  const mouseUp = (e) => {
    setCursorEnlarged(false);
  }

  const mouseEnter = (e) => {
    console.log("enter")
    setCursorVisible(true);
  }

  const mouseLeave = (e) => {
    console.log("leave")
    setCursorVisible(false);
  }

  useEffect(() => {
    document.addEventListener('mousemove', mouseMove);
    
    document.addEventListener('mousedown', mouseDown);
    document.addEventListener('mouseup', mouseUp);

    document.addEventListener('mouseenter', mouseEnter);
    document.addEventListener('mouseleave', mouseLeave);

    return () => {
      document.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mousedown', mouseDown);
      document.removeEventListener('mouseup', mouseUp);
      document.removeEventListener('mouseenter', mouseEnter);
      document.removeEventListener('mouseleave', mouseLeave);
    }
  }, []);

  return (
    <>
      <div ref={dotOutline} className={`cursor-outline mix-blend-exclusion`} style={
        {
          top: `${mousePosition["y"]}px`,
          left: `${mousePosition["x"]}px`,
          width: `${cursorEnlarged ? '48px' : '36px'}`,
          height: `${cursorEnlarged ? '48px' : '36px'}`,
          opacity: `${!cursorVisible && "1"}`,
        }
      }></div>
      <div ref={dot} className={`cursor-dot mix-blend-exclusion`} style={
        {
          top: `${mousePosition["y"]}px`,
          left: `${mousePosition["x"]}px`,
          width: `${cursorEnlarged ? '49px' : '4px'}`,
          height: `${cursorEnlarged ? '49px' : '4px'}`,
          opacity: `${!cursorVisible && "1"}`,
        }
      }></div>
    </>
  )
}