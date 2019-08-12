import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyDeXOPbhDWicXgwh0BYXu8UrV25m4ZxKvo",
    authDomain: "crwn-db-5b143.firebaseapp.com",
    databaseURL: "https://crwn-db-5b143.firebaseio.com",
    projectId: "crwn-db-5b143",
    storageBucket: "",
    messagingSenderId: "577067648257",
    appId: "1:577067648257:web:9a64b93f2107c06d"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt : 'select_Account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);



export default firebase;


