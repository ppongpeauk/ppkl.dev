import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Projects.module.css'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Projects() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pete Pongpeauk - Projects</title>
        <meta name="description" content="Pete Pongpeauk" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section className={styles.mainSection}>
          <div className={styles.mainSectionHeader}>
            <h1 className={styles.mainSection__title}><Link href="/"><ArrowBackIcon className={styles.mainSection__titleBackIcon} /></Link> Projects</h1>
            <hr className={styles.mainSection__hr} />
          </div>
          <div className={styles.mainSection__list}>
            <div className={styles.mainSection__listItem}>
              <h2 className={styles.mainSection__listItemTitle}>Pete Pongpeauk</h2>
              <p className={styles.mainSection__listItemDescription}>This website.</p>
              <p className={styles.mainSection__listItemDescription}>Built with Next.js, TypeScript, and Tailwind CSS.</p>
              <p className={styles.mainSection__listItemDescription}>Hosted on Vercel.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
