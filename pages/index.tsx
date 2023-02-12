import { Inter } from '@next/font/google'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

import heroImage from '../assets/hero-image.png'
import masonLogo from '../assets/mason-logo.png'

const inter = Inter({ subsets: ['latin'] })

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


export default function Home() {
  return (
    <>
      <Head>
        <title>Pete Pongpeauk</title>
        <meta name="description" content="Pete Pongpeauk" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="apple-mobile-web-app-title" content="Pete Pongpeauk"/>
        <meta name="application-name" content="Pete Pongpeauk"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
      </Head>
      {/* <Navbar /> */}
      <main className={styles.main}>
        <section className={styles.mainSection}>
          {/* "about" hero */}
          <div className={styles.heroRow}>
            <div className={styles.heroText}>
              <div>
                <h1 className={styles.heroTitle}>Pete Pongpeauk</h1>
                <p className={styles.heroSubtitle}>Computer Science student at George Mason University <Image className={styles.intextLogo} src={masonLogo} alt="Mason Logo" width={16} height={16}></Image></p>
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
          </div>
        </section>
      </main>
    </>
  )
}
