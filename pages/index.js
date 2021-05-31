import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useUser } from '../firebase/useUser'
import UserCompanies from '../features/companies'

import FirebaseAuth from '../features/auth/firebaseAuth'
import { useReducer } from 'react'

export default function Home() {
  const { user, logout } = useUser()

  if (user) {
    return (
      <div className={styles.inner}>
        <h3>Welcome back, Mr. {user.name}</h3>

        <UserCompanies companies={user.assets.companies} />

        <p>Check out the <a style={{ color: 'white' }} href="/exchange">Exchange</a> for new stuff to buy or invest in.</p>
      </div>
    )
  }

  else return (
    <div className={styles.inner}>
      <Head>
        <title>World Domination.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the glorious game World Domination.
        </h1>
        <p>It will be cool as shit. Get richer than your buds and buy their families.</p>
        <p><a href="/auth" style={{ color: 'white' }}>Log In!</a></p>
        <FirebaseAuth />
      </main>

      <footer className={styles.footer}>
        <span>&copy; World Domination 2021</span>
      </footer>
    </div>
  )
}