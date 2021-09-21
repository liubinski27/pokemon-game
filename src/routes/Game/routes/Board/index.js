import { useContext } from 'react/cjs/react.development';

import PokemonCard from '../../../../components/PokemonCard';
import { PokemonContext } from '../../../../context/pokemonContext';
import style from './style.module.css';

const BoardPage = () => {
    const { pokemons } = useContext(PokemonContext);
    console.log(pokemons);
    return (
        <div className={style.root}>
            <div className={style.playerOne}>
                {
                    Object.values(pokemons).map(({id, name, img, type, values}) => {
                        return <PokemonCard
                            className={style.card}
                            key={id}
                            id={id}
                            name={name}
                            img={img}
                            type={type}
                            values={values}
                            minimize
                            isActive
                        />
                    })
                }
            </div>
            <div className={style.board}>
                <div className={style.boardPlate}>1</div>
                <div className={style.boardPlate}>2</div>
                <div className={style.boardPlate}>3</div>
                <div className={style.boardPlate}>4</div>
                <div className={style.boardPlate}>5</div>
                <div className={style.boardPlate}>6</div>
                <div className={style.boardPlate}>7</div>
                <div className={style.boardPlate}>8</div>
                <div className={style.boardPlate}>9</div>
            </div>
        </div>
    );
};

export default BoardPage;