// måste ha
import 'react'

// use state för state, useeffect när nåt ska ändras/läsas in
import { useState, useEffect } from 'react';

// styles
import styles from '../styles/Home.module.css'

// använda db
import init from '../firebase/init';
import firebase from 'firebase/app'
import 'firebase/database'
init();

// själva "funktionen"/componenten
const Politicians = ({ children }) => {
    // socpe börjar
    const [politicians, setPoliticians] = useState([])

    //scope pausar härifrån
    useEffect(() => {
        const dbRef = firebase.database().ref()

        const politiciansRef = dbRef.child('politicians').once('value', snapshot => {

            // console.log('123123123123',snapshot.val());
            //scope
            let politicians = [];

            snapshot.forEach(val => {

                let politicianInDb = val.val();

                let newPolitician = {
                    name: politicianInDb.name,
                    bonus: politicianInDb.bonus
                }
                
                politicians.push(newPolitician)
            })
            
            setPoliticians(politicians)
            //scope slut
        })
    }, [])
    //hit, oc hfortsätter 

    return (
        <div className={styles.darkPanel} style={{ display: 'flex', flexDirection: 'column' }}> 
            <h1 style={{ color: 'white' }}>Politicians</h1>

            <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                width: "100%",
                padding: "2rem",
                gap: "4rem",
                backgroundColor: "white",
            }}>
                {politicians.map(pol =>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr",
                            gap: "2rem"
                        }}
                        key={pol.id}
                    >
                        <span><strong style={{ color: 'white' }}>Name: </strong><span style={{ color: 'blue' }}>{pol.name}</span></span>
                        <span><strong>Bonus: </strong>{pol.bonus}</span>
                        <button>Buy</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Politicians