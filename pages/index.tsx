import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <main className={styles.main}>
        <p>coming soon</p>
        {/* <section className={styles.hero}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>Pete Pongpeauk</h1>
            <h3 className={styles.heroSubtitle}>computer science</h3>
          </div>
        </section> */}
        {/* <footer className={styles.footer}>

        </footer> */}
      </main>
    </>
  )
}
