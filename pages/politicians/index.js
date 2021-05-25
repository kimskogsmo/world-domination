// måste ha
import 'react'

// use state för state, useeffect när nåt ska ändras/läsas in
import { useState, useEffect } from 'react';

// styles
// // import styles from '../../styles/Home.module.css'

// // använda db
// import init from './../firebase/init';
// import firebase from 'firebase/app'
// import 'firebase/database'
// init();

// själva "funktionen"/componenten
const Politician = ({ id, name, salary, bonus }) => {
    // socpe börjar
    // const [politicians, setPoliticians] = useState([])

    // //scope pausar härifrån
    // useEffect(() => {
    //     const dbRef = firebase.database().ref()

    //     const politiciansRef = dbRef.child('politicians').once('value', snapshot => {

    //         // console.log('123123123123',snapshot.val());
    //         //scope
    //         let politicians = [];

    //         snapshot.forEach(val => {

    //             let politicianInDb = val.val();

    //             let newPolitician = {
    //                 name: politicianInDb.name,
    //                 bonus: politicianInDb.bonus
    //             }
                
    //             politicians.push(newPolitician)
    //         })
            
    //         setPoliticians(politicians)
    //         //scope slut
    //     })
    // }, [])
    // //hit, oc hfortsätter 

    return (
        <div style={{
            padding: "1rem"
        }}>
            
            {party && (<div>Party: Social Democrats</div>)}
            {name && ( <div>Name: John Johnsson</div>)}
            {salary && ( <div>Salary: 149,500</div>)}
            
        </div>
    )
}

export default Politician