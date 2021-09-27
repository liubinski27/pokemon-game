import { useRouteMatch, Switch, Route } from 'react-router-dom';
import StartPage from './routes/Start';
import BoardPage from './routes/Board';
import FinishPage from './routes/Finish';
import { PokemonContext } from '../../context/pokemonContext';
import { useState } from 'react/cjs/react.development';

const GamePage = () => {

    const [winner, setWinner] = useState(0);
    const [selectedPokemons, setSelectedPokemons] = useState({});
    const [player2Cards, setPlayer2Cards] = useState({});

    const match = useRouteMatch();

    const handleSetWinner = (id) => {
        setWinner(id);
    }

    const handleSelectedPokemons = (key, pokemon) => {
        setSelectedPokemons(prevState => {
            if (prevState[key]) {
                const copyState = {...prevState};
                delete copyState[key];

                return copyState;
            }

            return {
                ...prevState,
                [key]: pokemon
            }
        })
    }

    const cleanPokemons = () => {
        setSelectedPokemons(prevState => {return {}});
        setPlayer2Cards(prevState => {return []});
    }

    const handleSetPlayer2 = (poks) => {
        setPlayer2Cards({...poks});
    }

    return (
        <PokemonContext.Provider value={{
            winner: winner,
            player2Pokemons: player2Cards,
            pokemons: selectedPokemons,
            onSelectedPokemons: handleSelectedPokemons,
            onSetPlayer2: handleSetPlayer2,
            onSetWinner: handleSetWinner,
            cleanContext: cleanPokemons
        }}>
            <Switch>
                <Route path={`${match.path}/`} exact component={StartPage} />
                <Route path={`${match.path}/board`} component={BoardPage} />
                <Route path={`${match.path}/finish`} component={FinishPage} />
            </Switch>
        </PokemonContext.Provider>
    );
};

export default GamePage;