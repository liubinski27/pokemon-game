import { Link } from 'react-router-dom';
import classNames from 'classnames';

import style from './style.module.css';

const Header = ({title, descr}) => {

    return (
        <header className={style.root}>
            <div className={style.forest}></div>
            <div className={style.silhouette}></div>
            {/* <div className={style.moon}></div> */}
            <div className={style.container}>
                <h1>{title}</h1>
                <p>{descr}</p>
                <Link to="game" className={classNames(style.btn, style.button)}>
                    Start Game
                </Link>
            </div>
        </header>
    )
}

export default Header;