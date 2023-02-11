import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar(props: any) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link className={styles.navbarLink} href="/">
          <h1>Pete Pongpeauk</h1>
        </Link>
      </div>
      <div className={styles.links}>
        <Link href="#" className={`${styles.navbarLink} ${styles.navbarLinkAbout}`} id="about-button">About</Link>
        <Link href="#" className={`${styles.navbarLink} ${styles.navbarLinkResume}`} id="resume-button">Resume</Link>
      </div>
    </nav>
  )
}