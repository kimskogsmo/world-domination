import 'bootstrap/dist/css/bootstrap.min.css';
import FirebaseAuth from '../features/auth/firebaseAuth'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Auth = () => {
    return (
        <>
            <Head>
                <title>Sign up for World Domination</title>
                <meta title="Sign up for World Domination." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <h3>Sign in using any auth provider below</h3>
            </div>
        </>
    )
}

export default Auth