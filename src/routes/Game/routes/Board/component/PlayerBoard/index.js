import { useState } from 'react/cjs/react.development';
import classNames from 'classnames';
import PokemonCard from '../../../../../../components/PokemonCard';

import style from './style.module.css';

const PlayerBoard = ({ player, cards, onClickCard }) => {

    const [isSelected, setSelected] = useState(null);

    return (
        <>
            {
                cards.map((item) => (
                    <div
                        key={item.id}
                        className={classNames(style.cardBoard, { [style.selected]: isSelected === item.id })}
                        onClick={() => {
                            setSelected(item.id);
                            onClickCard && onClickCard({
                                player,
                                ...item,
                            })
                        }}>
                        <PokemonCard
                            className={style.pokemonCard}
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            img={item.img}
                            type={item.type}
                            values={item.values}
                            minimize
                            isActive
                        />
                    </div>
                ))
            }
        </>
    )
}

export default PlayerBoard;