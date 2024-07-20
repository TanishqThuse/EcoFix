// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import multer from "multer";

const firebaseConfig = {
    apiKey: "AIzaSyDg6HZgohmUj8kqOF9UFc6Q8g-8v2eD3fY",
    authDomain: "ecofix-3ab57.firebaseapp.com",
    projectId: "ecofix-3ab57",
    storageBucket: "gs://ecofix-3ab57.appspot.com",
    messagingSenderId: "197845494064",
    appId: "1:197845494064:web:96c71e26ca4fa0f08980f5",
    measurementId: "G-XKXD38E0BL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const database = getDatabase(app);
const storage = getStorage(app);
 
//Setting up multer as a middleware to grab photo from uploads
const update = multer({ storage: multer.memoryStorage() });

export { app, analytics, auth, database, storage };
export default update;