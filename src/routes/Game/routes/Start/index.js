import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Layout from '../../../../components/Layout';
import PokemonCard from '../../../../components/PokemonCard';

import style from './style.module.css';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonsAsync, handleSelectedPokemons, selectedPokemons, selectPokemonsData } from '../../../../store/pokemons';

const StartPage = () => {

    const pokemonsRedux = useSelector(selectPokemonsData);
    const dispatch = useDispatch();
    const selectedPokemonsRedux = useSelector(selectedPokemons);

    const history = useHistory();
    const [pokemons, setPokemons] = useState({});


    useEffect(() => {
        dispatch(getPokemonsAsync());
    }, []);


    useEffect(() => {
        setPokemons(pokemonsRedux);
    }, [pokemonsRedux]);


    const handleChangeSelected = (key) => {
        if (!pokemons[key]?.selected && Object.keys(selectedPokemonsRedux).length >= 5) return;
        const pokemon = { ...pokemons[key] };
        dispatch(handleSelectedPokemons({ key, pokemon }));
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
                    <button className={style.button} onClick={handleStartGameClick} disabled={Object.keys(selectedPokemonsRedux).length < 5}>Start Game</button>
                </div>
                <div className={style.flex}>
                    {
                        Object.entries(pokemons).map(([key, { name, img, id, type, values, selected }]) =>
                            <PokemonCard
                                className={style.pokemonCard}
                                key={key}
                                id={id}
                                name={name}
                                img={img}
                                type={type}
                                values={values}
                                isActive={true}
                                isSelected={selected}
                                onClickPokemon={() => {
                                    if (Object.keys(selectedPokemonsRedux).length < 5 || selected) {
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