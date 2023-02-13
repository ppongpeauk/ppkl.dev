import styles from './MainHero.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import heroImage from '../assets/hero-image.png'
import masonLogo from '../assets/mason-logo.png'

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
        <h1 className={styles.heroTitle}>Pete Pongpeauk</h1>
        <p className={styles.heroSubtitle}>Computer Science student at George Mason University <Image className={styles.intextLogo} src={masonLogo} alt="Mason Logo" width={16} height={16}></Image></p>
      </div>
      {/* main page navigation */}
      <div className={styles.heroInnerRow}>
        <HomeLink href="/">Work</HomeLink>
        <HomeLink href="/about">About</HomeLink>
      </div>
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