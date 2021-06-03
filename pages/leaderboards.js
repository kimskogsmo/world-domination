import firebase from 'firebase/app'
import 'firebase/database'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';

import 'react'
import init from './../firebase/init';

init();

const Leaderboards = ({ children }) => {
    const [ppl, setPpl] = useState([])

    useEffect(() => {
        const dbRef = firebase.database().ref()

        const pplRef = dbRef.child('people').once('value', snapshot => {
            let somePpl = [];
            
            snapshot.forEach(dude => {
                console.log(dude);
                
                let aDude = {
                    name: dude.ref.key,
                    money: dude.ref.money
                }
                
                somePpl.push(aDude)
            })
            
            setPpl(ppl)
        })
    }, [])

    return (
        <>
        <div className={styles.darkPanel} style={{ display: 'flex', flexDirection: 'column' }}>
            <h1 style={{ color: 'white' }}>Leaderboards</h1>

            {ppl.map(dude => {
                <div>{dude.name}</div>
            })}
            </div>
        </>
    )
}

export default Leaderboards