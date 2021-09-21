import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Layout from '../../../../components/Layout';
import PokemonCard from '../../../../components/PokemonCard';

import style from './style.module.css';
import { useContext } from 'react/cjs/react.development';
import { useHistory } from 'react-router';
import { FireBaseContext } from '../../../../context/firebaseContext';
import { PokemonContext } from '../../../../context/pokemonContext';

const StartPage = () => {

    const firebase = useContext(FireBaseContext);
    const pokemonsContext = useContext(PokemonContext);
    const history = useHistory();
    const [pokemons, setPokemons] = useState({});

    useEffect(() => {
        firebase.getPokemonSoket((pokemons) => {
            setPokemons(pokemons);
        });

        return () => firebase.offPokemonSoket();
    }, []);

    const handleChangeSelected = (key) => {
        const pokemon = {...pokemons[key]};
        pokemonsContext.onSelectedPokemons(key, pokemon);
        setPokemons(prevState => ({
            ...prevState,
            [key]: {
                ...prevState[key],
                selected: !prevState[key].selected,
            }
        }))
    }

    const handleStartGameClick = () => {
        history.push('/game/board');
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
                    <button className={style.button} onClick={handleStartGameClick} disabled={Object.keys(pokemonsContext.pokemons).length < 5}>Start Game</button>
                </div>
                <div className={style.flex}>
                    {
                        Object.entries(pokemons).map(([key, { name, img, id, type, values, selected }]) =>
                            <PokemonCard
                                className={style.card}
                                key={key}
                                id={id}
                                name={name}
                                img={img}
                                type={type}
                                values={values}
                                isActive={true}
                                isSelected={selected}
                                onClickPokemon={() => {
                                    if (Object.keys(pokemonsContext.pokemons).length < 5 || selected) {
                                        handleChangeSelected(key);
                                    }
                                }}
                            />
                        )
                    }
                </div>
            </Layout>
        </div>
    )
}

export default StartPage;