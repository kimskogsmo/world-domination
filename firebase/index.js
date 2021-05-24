import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/database"

// const config = {
//     apiKey:             process.env.FIREBASE_API_KEY,
//     authDomain:         process.env.FIREBASE_AUTH_URL,
//     databaseURL:        process.env.FIREBASE_DB_URL,
//     projectId:          process.env.FIREBASE_PROJECT_ID,
//     storageBucket:      process.env.FIREBASE_BUCKET_ID,
//     messsagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//     appId:              process.env.FIREBASE_APP_ID
// }

// let app;

// if (!firebase.apps.length) {
//     app = firebase.initializeApp(config);
// } else {
//     app = firebase.app()
// }

// let database = app.database(process.env.FIREBASE_DB_URL)

// export {
//     app, database
// }