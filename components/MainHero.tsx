import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import heroImage from '../assets/hero-image-alt.png'
import masonLogo from '../assets/mason-logo.png'
import styles from './MainHero.module.css'

interface HomeLinkProps {
  href: string
  children: React.ReactNode
}

function HomeLink({ href, children }: HomeLinkProps) {
  const router = useRouter()
  const className = router.pathname === href ? styles.homeLinkActive : ''

  return (
    <Link href={href} className={`${styles.homeLink} ${className}`}>
      {children}
    </Link>
  )
}

export default function MainHero() {
  return (
  <div className={styles.heroRow}>
    <div className={styles.heroText}>
      <div>
        <h1 className={styles.heroTitle}>Hi, I&apos;m Pete.</h1>
        <p className={styles.heroSubtitle}>Computer Science student at George Mason University</p>
      </div>
      {/* main page navigation */}
      {/* <div className={styles.heroInnerRow}>
        <HomeLink href="/">About</HomeLink>
        <HomeLink href="/">Work</HomeLink>
        <HomeLink href="/">Projects</HomeLink>
      </div> */}
      {/* links */}
      <div className={styles.heroInnerRow}>
        <a href="https://github.com/ppongpeauk" target="_blank" rel="noreferrer" className={styles.homeLinkExternal}>GitHub</a>
        <a href="https://www.linkedin.com/in/pete-pongpeauk/" target="_blank" rel="noreferrer" className={styles.homeLinkExternal}>LinkedIn</a>
        <a href="mailto:ppongpeauk@gmail.com" target="_blank" rel="noreferrer" className={styles.homeLinkExternal}>Email</a>
        <a href="resume.pdf" target="_blank" rel="noreferrer" className={styles.homeLinkExternal}>Résumé</a>
      </div>
    </div>
    <div>
      <Image className={styles.heroImage} src={heroImage} alt="Hero" width={256} height={256} priority />
    </div>
  </div>)
}