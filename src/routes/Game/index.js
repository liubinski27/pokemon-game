import { useRouteMatch, Switch, Route } from 'react-router-dom';
import StartPage from './routes/Start';
import BoardPage from './routes/Board';
import FinishPage from './routes/Finish';
import { PokemonContext } from '../../context/pokemonContext';
import { useState } from 'react/cjs/react.development';

const GamePage = () => {

    const [selectedPokemons, setSelectedPokemons] = useState({});
    const [player2Cards, setPlayer2Cards] = useState({});

    const match = useRouteMatch();

    const handleSetPlayer2 = (poks) => {
        setPlayer2Cards({...poks});
    }

    return (
        <PokemonContext.Provider value={{
            player2Pokemons: player2Cards,
            pokemons: selectedPokemons
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