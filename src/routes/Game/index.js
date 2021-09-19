import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';

import POKEMONS from '../../pokemons';

import database from "../../services/firebase";

import style from './style.module.css';

const GamePage = () => {

    const [pokemons, setPokemons] = useState({});

    useEffect(() => {
        database.ref('pokemons').once('value', (snapshot) => {
            setPokemons(snapshot.val());
        });
    }, []);

    const handleOpenPokemon = (id) => {
        setPokemons(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = { ...item[1] };
                if (pokemon.id === id) {
                    if (pokemon.active === true) {
                        pokemon.active = !pokemon.active;
                    } else {
                        pokemon.active = true;
                    }
                    setCardStatus(item[0], item[1]);
                };

                acc[item[0]] = pokemon;

                return acc;
            }, {});
        });
    }

    const addPokemon = () => {
        const newPokemon = Object.entries(pokemons)[Math.floor(Math.random() * 5) + 1][1];
        const newKey = database.ref().child('pokemons').push().key;
        database.ref('pokemons/' + newKey).set(newPokemon).then(
            () => {
                database.ref('pokemons').once('value', (snapshot) => {
                    setPokemons(snapshot.val());
                })
            }
        )
    }

    const setCardStatus = (objID, poke) => {
        database.ref(`pokemons/${objID}`).set(poke)
    }

    return (
        <div className={style.root}>
            <h1>This is Game Page!</h1>
            <Link to="home" className={style.button}>Back to Home</Link>
            <Layout
                title="I want"
                descr="to learn React!"
                colorBg="none"
            >
                <div className={style.button__flex}>
                    <button className={style.button} onClick={addPokemon}>ADD NEW POKEMON</button>
                </div>
                <div className={style.flex}>
                    {
                        Object.entries(pokemons).map(([key, { name, img, id, type, values, active }]) =>
                            <PokemonCard
                                key={key}
                                id={id}
                                name={name}
                                img={img}
                                type={type}
                                values={values}
                                isActive={active}
                                onClickPokemon={handleOpenPokemon}
                            />
                        )
                    }
                </div>
            </Layout>
        </div>
    )
}

export default GamePage;