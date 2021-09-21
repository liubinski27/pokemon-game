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

class Firebase {
    constructor() {
        this.fire = firebase;
        this.database = this.fire.database();
    }

    getPokemonSoket = (callback) => {
        this.database.ref('pokemons').on('value', (snapshot) => {
            callback(snapshot.val());
        });
    }

    offPokemonSoket = () => {
        this.database.ref('pokemons').off();
    }

    getPokemonsOnce = async() => {
        return await this.database.ref('pokemons').once('value').then(snapshot => snapshot.val());
    }

    postPokemon = (key, pokemon) => {
        this.database.ref(`pokemons/${key}`).set(pokemon);
    }

    addPokemon = (data, callback) => {
        const newKey = this.database.ref().child('pokemons').push().key;
        this.database.ref('pokemons/' + newKey).set(data).then(() => callback());
    }
}

export default Firebase;