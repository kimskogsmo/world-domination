import init from './init';
import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
// import useAuth from './../firebase/useAuth'; 

init();

const db = firebase.firestore();

async function getDbUser(uid) {
    let usersRef = await db.collection('people');
    let allUsers = await usersRef.get();

    let dbUser, returnedUser;

    if (allUsers.docs.length > 0) {
        dbUser = allUsers.docs.find(doc => doc.data().id == uid).data()
    }

    if (dbUser && dbUser.exists) {
        console.log('User exists: ', dbUser)

        returnedUser = {
            ...dbUser
        }
    } else {
        console.warn('User didnt exist in firestore')
    }

    return returnedUser
}

export const mapUserData = async (user) => {
    const { uid, email, xa, displayName, photoUrl, emailVerified } = user

    const firestoreUser = await getDbUser(uid)

    const data = {
        ...firestoreUser
    }

    console.log(data)
    
    return {
        id: uid,
        email: email,
        token: xa,
        name: displayName,
        profilePic: photoUrl,
        verified: emailVerified,
        assets: {
            ...firestoreUser
        }
    }
}