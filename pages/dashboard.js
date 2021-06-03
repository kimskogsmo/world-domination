import { useState, useRef, useEffect } from 'react'

import styles from '../styles/Home.module.css'
import { useUser } from '../firebase/useUser'
import Social from './../features/social'
import Sidebar from './../features/sidebar'
import Toolbar from './../features/Toolbar'

const CashButton = () => {
    const [buttonState, setButtonState] = useState('idle');
    const [style, setStyle] = useState({});
    const [animate, setAnimate] = useState(0);
    const [button] = useRef(0);

    const click = () => {
        setButtonState('clicked');
        setAnimate(1)
    }

    const mouseup = () => {
        setButtonState('mouseup');
    }

    const mouseover = () => {
        setButtonState('hovered');
    }

    const mouseleave = () => {
        setButtonState('idle');
    }
    
    return (
        <button
            className={styles.cashButton}
            ref={button}
            onMouseDown={() => setAnimate(1)}
            onMouseUp={() => setAnimate(0)}
            animate={animate}
        >
            <img src="./cash-button.png" />
        </button>
    );
}

const Dashboard = ({ }) => {
    const { user, logout } = useUser()

    if (user) {
        return (
            <section className={styles.darkPanel}>
                <div className={styles.clickerArea}>
                    <h3 style={{ color: 'white', fontWeight: '700', fontSize: '2.4rem' }}>Your dashboard</h3>
                    <p style={{ color: 'white', fontWeight: '400', fontSize: '1.4rem' }}>Press the magic button to gain cash infinitely.</p>

                    <Toolbar assets={user.assets} compressed={true}/>

                    <CashButton />
                </div>
                <div className={styles.profileArea}>
                    <Sidebar user={user} />
                </div>
            </section>
        )
    }
    else return (
        <section>Log in first</section>
    )
}

export default Dashboard