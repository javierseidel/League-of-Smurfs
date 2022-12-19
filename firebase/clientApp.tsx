import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


// calls the api keys from our .env file to connect with firebase
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,

    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

// Checks to make sure firebase hasnt already been initialized. If it hasnt, firebase initializes. 
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

export default firebase;


