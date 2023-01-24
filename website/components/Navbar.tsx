import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h1>ppngpkl.dev</h1>
      </div>
      <div className={styles.links}>
        <Link href="/" className={styles.navbarLink}>/hello</Link>
        <Link href="/" className={styles.navbarLink}>/about</Link>
      </div>
    </nav>
  )
}