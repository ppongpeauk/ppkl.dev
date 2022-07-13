import { NavLink, useNavigate } from 'react-router-dom'
import { LinkedIn, GitHub, Email } from "@mui/icons-material"

function NavigatorLink(props) {
  const navigate = useNavigate();
  return (
    <>
      <NavLink
        to={props.link}
        className="navigator-item"
        onClick={
          (e) => {
            e.preventDefault()
            props.navToggler(false)
            navigate(props.link)
          }}
      >
        {props.content}
      </NavLink>
    </>
  )
}

export default function NavPage(props) {
  return (
    <div className={"navigator-page" + (!props.visible ? " not-visible" : "")}>
      {/* site navigation links */}
      <NavigatorLink link="/home" content="Home" navToggler={props.navToggler} />
      <NavigatorLink link="/projects" content="Work" navToggler={props.navToggler} />
      <NavigatorLink link="/resume.pdf" content="Resume" navToggler={props.navToggler} />
      {/* social media links */}
      <div>
        <div className="navigator-item-icon">
          <a className="nav-link-icon" href="https://www.linkedin.com/in/pete-pongpeauk/" target="_blank" rel="noreferrer" alt="LinkedIn"><LinkedIn sx={{ fontSize: 48 }} /></a>
          <a className="nav-link-icon" href="https://github.com/ppongpeauk" target="_blank" rel="noreferrer"alt="GitHub"><GitHub sx={{ fontSize: 48 }} /></a>
          <a className="nav-link-icon" href="mailto:kurtsiberg@gmail.com" target="_blank" rel="noreferrer"alt="Email"><Email sx={{ fontSize: 48 }} /></a>
        </div>
      </div>
    </div>
  )
}