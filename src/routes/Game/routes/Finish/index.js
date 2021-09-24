import { useHistory } from "react-router";
import { useContext, useState } from "react/cjs/react.development";
import { PokemonContext } from "../../../../context/pokemonContext";
import PokemonCard from "../../../../components/PokemonCard";
import classNames from "classnames";

import style from './style.module.css';

const FinishPage = (pokemons1, pokemons2) => {
    const history = useHistory();
    const pokemonContext = useContext(PokemonContext);
    console.log(pokemonContext);

    if (Object.keys(pokemonContext.pokemons).length === 0 && pokemonContext.player2Pokemons.length === 0) {
        history.replace('/game');
    }

    const handleBackToStart = () => {
        pokemonContext.cleanContext();
        history.replace('/game');
    }

    const handleClick = () => {
        console.log('asdf')
    }

    const [chosenPokemon, setChosenPokemon] = useState({});

    const handleChosePokemon = (id) => {
        setPlayer2Pokemons(prevState)
    }

    return (
        <div className={style.finish__flex}>
            <div className={classNames(style.row, style.playerOne)}>
                {
                    Object.entries(pokemonContext.pokemons).map(([key, { name, img, id, type, values, selected }]) =>
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
                        />
                    )
                }
            </div>

            <div className={style.button}>
                <button onClick={handleBackToStart}>END GAME</button>
            </div>

            <div className={classNames(style.row, style.playerTwo)}>
                {
                    pokemonContext.player2Pokemons.map(([key, { name, img, id, type, values, selected }]) =>
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
                            onClickPokemon={handleChosePokemon}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default FinishPage;