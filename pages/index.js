import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useUser } from '../firebase/useUser'
import Clicker from '../features/Clicker'
import Cashbar from '../features/Cashbar'

export default function Home() {
  const { user, logout } = useUser()

  if (user) {
    return (
      <div className={styles.container}>
        <h3>Welcome back, {user.name}</h3>
        <p>Check out the <a href="/exchange">Exchange</a> for new stuff to buy or invest in.</p>
      </div>
    )
  }

  else return (
    <div className={styles.container}>
      <p><a href="/auth">Log In!</a></p>

      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to clicker
        </h1>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}