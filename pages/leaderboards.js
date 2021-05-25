// måste ha
import 'react'

// use state för state, useeffect när nåt ska ändras/läsas in
import { useState, useEffect } from 'react';

// styles
import styles from '../styles/Home.module.css'

// använda db
import init from './../firebase/init';
import firebase from 'firebase/app'
import 'firebase/database'
init();

// själva "funktionen"/componenten
const Leaderboards = ({ children }) => {
    // socpe börjar
    const [ppls, setPpl] = useState([])

    //scope pausar härifrån
    useEffect(() => {
        const dbRef = firebase.database().ref()

        const pplRef = dbRef.child('people').once('value', snapshot => {

            // console.log('123123123123',snapshot.val());
            //scope
            let ppl = [];

            snapshot.forEach(val => {

                let d = val.val();

                let dude = {
                    name: d.name,
                    netWorth: d.netWorth
                }
                
                ppl.push(dude)
            })
            
            setPpl(ppl)
            //scope slut
        })
    }, [])
    //hit, oc hfortsätter 

    return (
        <>
            <div>leaderboards</div>

            {ppls.map(dude => {
                <div>{dude.name}</div>
            })}
        </>
    )
}

export default Leaderboards