import { useHistory } from "react-router";
import { useContext, useState } from "react/cjs/react.development";
import { PokemonContext } from "../../../../context/pokemonContext";
import PokemonCard from "../../../../components/PokemonCard";
import classNames from "classnames";

import style from './style.module.css';
import { FireBaseContext } from "../../../../context/firebaseContext";

const FinishPage = (pokemons1, pokemons2) => {
    const history = useHistory();
    const firebaseContext = useContext(FireBaseContext);
    const pokemonContext = useContext(PokemonContext);

    const [player2Pokemons, setPlayer2Cards] = useState(pokemonContext.player2Pokemons);

    if (Object.keys(pokemonContext.pokemons).length === 0 && Object.keys(player2Pokemons).length === 0) {
        history.replace('/game');
    }

    const handleBackToStart = () => {
        pokemonContext.cleanContext();
        if (chosenPokemon && chosenPokemon != {}) {
            firebaseContext.addPokemon(chosenPokemon);
        }
        history.replace('/game');
    }

    const [chosenPokemon, setChosenPokemon] = useState({});

    const handleChosePokemon = (id) => {
        if (pokemonContext.winner === 1) {
            Object.values(player2Pokemons).map(pokemon => {
                if (pokemon.id === id) {
                    setChosenPokemon(pokemon);
                }
            })
        }
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
                    Object.entries(player2Pokemons).map(([key, { name, img, id, type, values, selected }]) =>
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