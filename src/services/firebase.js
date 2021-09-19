import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyCn00yeXZaR9eC_scgYIO_lotxUcqlqZ04",
    authDomain: "pokemon-game-cc86f.firebaseapp.com",
    databaseURL: "https://pokemon-game-cc86f-default-rtdb.firebaseio.com",
    projectId: "pokemon-game-cc86f",
    storageBucket: "pokemon-game-cc86f.appspot.com",
    messagingSenderId: "595259532842",
    appId: "1:595259532842:web:faad4f7513fbc6b46b4553"
};

firebase.initializeApp(firebaseConfig);

export const fire = firebase;
export const database = fire.database();

export default database;