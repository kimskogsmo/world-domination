
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/globals.css'
import Link from 'next/link';
import { Nav, NavDropdown, Form, FormControl, Button, Navbar } from 'react-bootstrap'

import Cashbar from '../features/Cashbar'

function TransitionLayout({ children }) {
  return (
    <div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
      <div>
        {children}
      </div>
    </div>
  );
}

function MyApp({ Component, pageProps }) {

  return (
    <div className="world-domination" suppressHydrationWarning={true}>
      { process.browser && (
        <>
          <h1 className={styles.minklass}>En titel</h1>
          <header className={styles.header}>
            <div>
              <Link href="/exchange">Exchange</Link>
              <Link href="/politicians">Politicians</Link>
              <Link href="/leaderboards">Leaderboards</Link>
            </div>
            <div>
              <Cashbar money={300}/>
            </div>
            <div>
            <Link href="/">Dashboard</Link>
            </div>
          </header>

          <Component {...pageProps} />
        </>
      )}
    </div>
  )
}

export default MyApp
