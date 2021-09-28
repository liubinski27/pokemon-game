import { useHistory } from "react-router";
import { useContext, useState } from "react/cjs/react.development";
import PokemonCard from "../../../../components/PokemonCard";
import classNames from "classnames";

import style from './style.module.css';
import { FireBaseContext } from "../../../../context/firebaseContext";
import { useDispatch, useSelector } from "react-redux";
import { cleanPokemons, winner, player2PokemonsData, selectedPokemons } from "../../../../store/pokemons";

const FinishPage = (pokemons1, pokemons2) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const firebaseContext = useContext(FireBaseContext);

    const poks1 = useSelector(selectedPokemons);
    const poks2 = useSelector(player2PokemonsData);

    if (Object.keys(poks1).length === 0 && Object.keys(poks2).length === 0) {
        history.replace('/game');
    }

    const winnerRedux = useSelector(winner);

    const [isDisabled, setDisabled] = useState(true);
    const [player2Pokemons, setPlayer2Cards] = useState(Object.entries(poks2));
    const [chosenPokemon, setChosenPokemon] = useState(null);

    if (isDisabled === true && (winnerRedux === 0 || winnerRedux === 2)) {
        setDisabled(false);
    }

    const handleBackToStart = () => {
        if (winnerRedux === 0 || winnerRedux === 2) {
            dispatch(cleanPokemons());
            history.replace('/game');
        }
        if (winnerRedux === 1) {
            if (Object.values(chosenPokemon).length > 0) {
                dispatch(cleanPokemons());
                firebaseContext.addPokemon(chosenPokemon);
                history.replace('/game');
            }
        }
    }

    const handleChosePokemon = (id) => {
        if (winnerRedux === 1) {
            setPlayer2Cards(prevState => {
                console.log(prevState);
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