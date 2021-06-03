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
        <div className={styles.darkPanel} style={{ display: 'flex', flexDirection: 'column' }}>
            <h1 style={{ color: 'white' }}>The Exchange</h1>

            <div className={styles.borderedBox}
            style={{ marginTop: '1rem', display: 'grid', gridTemplateColumns: '25% 25% 25% 25%', gap: '1rem'}}>
                {companies.map(c =>
                    <div
                        className={styles.borderedBox}
                        style={{ display: 'flex', flexDirection: 'column'}}
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