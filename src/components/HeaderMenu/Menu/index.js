import classNames from 'classnames';
import { Link } from 'react-router-dom';

import style from './style.module.css';

const Menu = ({isOpen, onClickButton}) => {

    const handleClick = () => {
        onClickButton && onClickButton();
    }

    return (
        <div className={classNames(style.menuContainer, isOpen ? style.active : style.deactive)}>
            <div className={style.overlay} />
            <div className={style.menuItems}>
                <ul>
                    <li>
                        <Link to="home" onClick={handleClick}>
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link to="game" onClick={handleClick}>
                            GAME
                        </Link>
                    </li>
                    <li>
                        <Link to="about" onClick={handleClick}>
                            ABOUT
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" onClick={handleClick}>
                            CONTACT
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Menu;