import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from 'firebase-admin/firestore'
import myCredentials from '../../credentials.js'


export default function connectDb() {
    if(getApps().length === 0) {
        initializeApp({ // if not connect 
            credential:cert(myCredentials)
        })
    }
    return getFirestore();
}