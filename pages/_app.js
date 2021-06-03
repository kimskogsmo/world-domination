
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/globals.css'
import Link from 'next/link';
import { Nav, NavDropdown, Form, FormControl, Button, Navbar } from 'react-bootstrap'

import { useUser } from '../firebase/useUser'
import Toolbar from '../features/Toolbar'
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
  const { user, setUser } = useUser()
  const [gameState, setGameState] = useState('idle')
  const [frame, setFrame] = useState(0)
  console.log('setting')

  // useEffect(() => {
  //   setGameState('running')
  // }, [])

  // while (gameState == 'running') {
  //   setInterval(() => {
  //     let f = frame;
  //     f++;

  //     setFrame(f)
  //   }, 50)
  // }

  if (user) {
    return (
      <div className="world-domination" suppressHydrationWarning={true}>
        { process.browser && (
          <>
            <header>
              <nav className={styles.headerInner}>
                <div>
                  <Link href="/dashboard">Dashboard</Link>
                  <Link href="/exchange">Exchange</Link>
                  <Link href="/politicians">Politicians</Link>
                  <Link href="/leaderboards">Leaderboards</Link>
                </div>
              </nav>
            </header>

            <div style={{
              position: 'absolute', bottom: '1rem', left: '1rem',
              height: '40px',
              width: '40px',
              borderRadius: '40px',
              color: 'white',
              backgroundColor: 'black',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '1.1rem'
            }}>
              {frame}
            </div>
  
            <Component {...pageProps} style={{width: '1240px', margin: '0 auto'}}/>
          </>
        )}
      </div>
    )
  } else {
    return (
      <div className="world-domination" suppressHydrationWarning={true}>
        { process.browser && (
          <>  
            <Component {...pageProps} />
          </>
        )}
      </div>
    )
  }
}

export default MyApp
