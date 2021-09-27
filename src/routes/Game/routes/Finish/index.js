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
    const poks1 = pokemonContext.pokemons;
    const poks2 = Object.entries(pokemonContext.player2Pokemons);

    if (Object.keys(poks1).length === 0 && poks2.length === 0) {
        history.replace('/game');
    }

    const winner = pokemonContext.winner;

    const [isDisabled, setDisabled] = useState(true);
    const [player2Pokemons, setPlayer2Cards] = useState(poks2);
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAA, ', player2Pokemons);
    const [chosenPokemon, setChosenPokemon] = useState(null);

    if (isDisabled === true && (winner === 0 || winner === 2)) {
        setDisabled(false);
    }

    const handleBackToStart = () => {
        if (winner === 0 || winner === 2) {
            pokemonContext.cleanContext();
            history.replace('/game');
        }
        if (winner === 1) {
            if (Object.values(chosenPokemon).length > 0) {
                console.log('12345 ', Object.values(chosenPokemon));
                pokemonContext.cleanContext();
                firebaseContext.addPokemon(chosenPokemon);
                history.replace('/game');
            }
        }
    }

    const handleChosePokemon = (id) => {
        if (winner === 1) {
            setPlayer2Cards(prevState => {
                return prevState.map(pokemon => {
                    if (pokemon[1].id === id) {
                        setChosenPokemon({
                            ...pokemon[1],
                            selected: false
                        });
                        pokemon[1].selected = true;
                    } else pokemon[1].selected = false;
                    return pokemon;
                })
            })
            setDisabled(false);
        }
    }

    return (
        <div className={style.finish__flex}>
            <div className={classNames(style.row, style.playerOne)}>
                {
                    Object.entries(poks1).map(([key, { name, img, id, type, values, selected }]) =>
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

            <div className={style.buttonBlock}>
                <button className={style.button} onClick={handleBackToStart} disabled={isDisabled}>END GAME</button>
            </div>

            <div className={classNames(style.row, style.playerTwo)}>
                {
                    player2Pokemons.map(([key, { name, img, id, type, values, selected }]) =>
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