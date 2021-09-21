import classNames from 'classnames';

import cardBackSide from './img/card-back-side.jpg';

import style from './style.module.css';

const PokemonCard = ({className, name, img, id, type, values, minimize, isActive, isSelected, onClickPokemon }) => {

    const handleClick = () => {
        onClickPokemon && onClickPokemon(id);
    }

    return (
        <div className={classNames(className, style.pokemonCard, { [style.active]: isActive, [style.selected]: isSelected })} onClick={handleClick}>
            <div className={style.cardFront}>
                <div className={classNames(style.wrap, style.front)}>
                    <div className={classNames(style.pokemon, style[type])}>
                        <div className={style.values}>
                            <div className={classNames(style.count, style.top)}>{values.top}</div>
                            <div className={classNames(style.count, style.right)}>{values.right}</div>
                            <div className={classNames(style.count, style.bottom)}>{values.bottom}</div>
                            <div className={classNames(style.count, style.left)}>{values.left}</div>
                        </div>
                        <div className={style.imgContainer}>
                            <img src={img} alt={name} />
                        </div>
                        {!minimize && (<div className={style.info}>
                            <span className={style.number}>#{id}</span>
                            <h3 className={style.name}>
                                {name}
                            </h3>
                            <small className={style.type}>
                                Type: <span>{type}</span>
                            </small>
                        </div>)}
                    </div>
                </div>
            </div>

            <div className={style.cardBack}>
                <div className={classNames(style.wrap, style.back)} />
            </div>

        </div>
    )
}

export default PokemonCard;