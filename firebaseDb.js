import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBysrBLzV6ZEFcsO_k-D3CvbCBRhI4MaW0",
    authDomain: "nusvigate.firebaseapp.com",
    databaseURL: "https://nusvigate.firebaseio.com",
    projectId: "nusvigate",
    storageBucket: "nusvigate.appspot.com",
    messagingSenderId: "794910415753",
    appId: "1:794910415753:web:302c863a8c3fdfdd1d5f58",
    measurementId: "G-2HHFNGE0F1"
};

firebase.initializeApp(firebaseConfig)

firebase.firestore()

export default firebase