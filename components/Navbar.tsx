import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link className={styles.navbarLink} href="/">
          <h1>Pete</h1>
        </Link>
      </div>
      <div className={styles.links}>
        <Link href="/" className={styles.navbarLink}>// hello</Link>
        <Link href="/" className={styles.navbarLink}>// about</Link>
      </div>
    </nav>
  )
}