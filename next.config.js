const {
    PHASE_DEVELOPMENT_SERVER,
    PHASE_PRODUCTION_BUILD
} = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
    const isDev = phase === PHASE_DEVELOPMENT_SERVER
    const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'

    const isStaging =
        phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1'

    console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`)

    const env = {
        FIREBASE_API_KEY: "AIzaSyBwkwLGt_ZAN81L4XS3dvsp-KrAr5HSKPw",
        FIREBASE_PROJECT_ID: "kim-skogsmo",
        FIREBASE_BUCKET_ID: "kim-skogsmo.appspot.com",
        FIREBASE_AUTH_URL: "kim-skogsmo.firebaseapp.com",
        FIREBASE_DB_URL: "https://kim-skogsmo.firebaseio.com/",
        FIREBASE_APP_ID: "1:428121487628:web:fc685545bb4e3d8eb3f129",
        FIREBASE_MESSAGING_SENDER_ID: "428121487628",
        TEST: () => {
            if (isDev) return 'asd'
            if (isProd) return 'asd2'
            if (isStaging) return 'asd3'
        }
    }

    return {
        env,
    }
}