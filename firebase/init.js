import firebase from 'firebase/app'
// the below imports are option - comment out what you don't need
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/analytics'
import 'firebase/performance'

const config = {
    apiKey:             process.env.FIREBASE_API_KEY,
    authDomain:         process.env.FIREBASE_AUTH_URL,
    databaseURL:        process.env.FIREBASE_DB_URL,
    projectId:          process.env.FIREBASE_PROJECT_ID,
    storageBucket:      process.env.FIREBASE_BUCKET_ID,
    messsagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId:              process.env.FIREBASE_APP_ID
}

export default function init() {
    if (!firebase.apps.length) {
        firebase.initializeApp(config)
        // Check that `window` is in scope for the analytics module!
        if (typeof window !== 'undefined') {
            // Enable analytics. https://firebase.google.com/docs/analytics/get-started
            if ('measurementId' in config) {
                firebase.analytics()
                firebase.performance()
            }
        }
        console.log('Firebase was successfully init.')
    }
}