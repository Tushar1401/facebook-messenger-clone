import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyBUV7hRJUex1dROI_TV5kl0jR50mV9PkTw",
        authDomain: "facebook-messenger-clone-df482.firebaseapp.com",
        databaseURL: "https://facebook-messenger-clone-df482.firebaseio.com",
        projectId: "facebook-messenger-clone-df482",
        storageBucket: "facebook-messenger-clone-df482.appspot.com",
        messagingSenderId: "137385043628",
        appId: "1:137385043628:web:09e12a15ba15881c2b6109",
        measurementId: "G-7W3XH15XKP"
})

const db = firebaseApp.firestore();

export default db; 