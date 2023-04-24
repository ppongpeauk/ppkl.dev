import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { Roboto_Flex } from "next/font/google";
import { useRouter } from 'next/router';

const font = Roboto_Flex({
  subsets: ["latin"],
});

import styles from '../styles/Home.module.css';

import MainHero from '../components/MainHero';

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
      <main className={`${styles.main} ${font.className}`}>
        <section className={styles.mainSection}>
          <MainHero />
        </section>
      </main>
    </>
  )
}
