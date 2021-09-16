import { Link } from 'react-router-dom';
import { useState } from 'react';

import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';

import POKEMONS from '../../pokemons';

import style from './style.module.css';

const GamePage = () => {
    const [pokemons, setPokemons] = useState(POKEMONS);

    const handleOpenPokemon = (id) => {
        setPokemons(pokemons.map(item => {
            if (item.id === id) {
                item.active = !item.active;
            }
            return item;
        }));
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
                <div className={style.flex}>
                    {
                        pokemons.map(item =>
                            <PokemonCard
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                img={item.img}
                                type={item.type}
                                values={item.values}
                                isActive={item.active}
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