import { LinkedIn, GitHub, Email } from "@mui/icons-material"
import './SocialBar.css'

export default function SocialBar() {
  return (
    <ul className="social-bar">
      <li>
        <a className="nav-link-icon" href="" target="_blank" rel="noreferrer"><LinkedIn sx={{ fontSize: 36 }} /></a>
      </li>
      <li>
        <a className="nav-link-icon" href="" target="_blank" rel="noreferrer"><GitHub sx={{ fontSize: 36 }} /></a>
      </li>
    </ul>
  )
}