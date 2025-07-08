import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getFirestore, doc, onSnapshot, collection } from 'https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js'

const firebaseConfig = {
    apiKey: "AIzaSyCRTeNC7uMKkzIOvHfLUC205acbFXLpFaI",
    authDomain: "portfolio-admin-6b16b.firebaseapp.com",
    projectId: "portfolio-admin-6b16b",
    storageBucket: "portfolio-admin-6b16b.firebasestorage.app",
    messagingSenderId: "972190031999",
    appId: "1:972190031999:web:6b22bdbd7bebfb67191f4a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export {
    doc,
    onSnapshot,
    db,
    collection
}