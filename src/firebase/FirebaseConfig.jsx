
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDCl6Zyl-u_9dAfMIOkiSIkYxeZEcT9Jrc",
    authDomain: "portofolio-590dc.firebaseapp.com",
    projectId: "portofolio-590dc",
    storageBucket: "portofolio-590dc.appspot.com",
    messagingSenderId: "399592978860",
    appId: "1:399592978860:web:2ad6688d6390e217f4e209",
    measurementId: "G-3Q47SP7V2R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const fireDB = getFirestore(app);

export { fireDB, analytics }