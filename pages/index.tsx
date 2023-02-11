import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <main className={styles.main}>
        <section className={styles.mainSection}>
          {/* "about" hero */}
          <div className={styles.heroRow}>
            <div className={styles.heroText}>
              <div>
                <h1 className={styles.heroTitle}>Pete Pongpeauk</h1>
                <p className={styles.heroSubtitle}>Computer Science student at George Mason University</p>
              </div>
              {/* links */}
              <div className={styles.heroInnerRow}>
                <a href="https://github.com/ppongpeauk" target="_blank" className={styles.homeLink}>GitHub</a>
                <a href="https://www.linkedin.com/in/pete-pongpeauk/" target="_blank" className={styles.homeLink}>LinkedIn</a>
                <a href="resume.pdf" target="_blank" className={styles.homeLink}>Résumé</a>
              </div>
            </div>
            <div>
              <Image className={styles.heroImage} src="/images/hero.png" alt="Hero" width={256} height={256} />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
