import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB3PXIaXphYaiA-8ajiYUJ-BOPJBkqYZrc",
    authDomain: "nusvigate-1fffe.firebaseapp.com",
    databaseURL: "https://nusvigate-1fffe.firebaseio.com",
    projectId: "nusvigate-1fffe",
    storageBucket: "nusvigate-1fffe.appspot.com",
    messagingSenderId: "797424671267",
    appId: "1:797424671267:web:b4c62c26b915adcd4d2f96",
    measurementId: "G-4Y6439RD6N"
};

firebase.initializeApp(firebaseConfig)

firebase.firestore()

export default firebase