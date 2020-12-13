import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Oren Leung</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Oren Leung's Personal Website!
        </h1>

        <p className={styles.description}>
          Contact me @{' '}
          <code className={styles.code}>ok2leung@uwaterloo.ca</code>
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/OrenLeung" className={styles.card}>
            <h3>Github &rarr;</h3>
            <p>Find in-depth information about the past projects and research.</p>
          </a>

          <a href="https://www.linkedin.com/in/oren-leung/" className={styles.card}>
            <h3>Linkedin &rarr;</h3>
            <p>Learn about my past education and experiences!</p>
          </a>

          <a href="https://www.linkedin.com/in/oren-leung/" className={styles.card}>
            <h3>Resume &rarr;</h3>
            <p>Developer @ FreeLance </p>
            <p>SWE intern @ VoicAI</p>
            <p>1A Software Eng @ uWaterloo</p>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          {'<'}Oren Leung {'/>'}
        </a>
      </footer>
    </div>
  )
}
