import firebase from 'firebase/app'
import 'firebase/database'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';

import 'react'
import init from './../firebase/init';

init();

const Exchange = ({ children }) => {
    const [companies, setCompanies] = useState([])

    useEffect(() => {
        const dbRef = firebase.database().ref()

        const companiesRef = dbRef.child('companies').once('value', snapshot => {
            let comps = [];
            
            snapshot.forEach(val => {
                let company = {
                    name: val.ref.key,
                    cost: val.val()
                }
                
                comps.push(company)
            })
            
            setCompanies(comps)
        })
    }, [])

    return (
        <div className={styles.inner}>
            <h3>The exchange</h3>
            <p>Buy and sell stuff</p>
            <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                width: "100%",
                padding: "2rem",
                gap: "2rem",
                backgroundColor: "#f7f7f7",
            }}>
                {companies.map(c =>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr",
                            gap: "0.75rem"
                        }}
                        key={c.id}
                    >
                        <span><strong>Name: </strong>{c.name}</span>
                        <span><strong>Cost: </strong>{c.cost}</span>
                        <button>Buy</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Exchange