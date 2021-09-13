import classNames from 'classnames';

import style from './style.module.css';

const Menu = ({isOpen}) => {
    return (
        <div className={classNames(style.menuContainer, isOpen ? style.active : style.deactive)}>
            <div className={style.overlay} />
            <div className={style.menuItems}>
                <ul>
                    <li>
                        <a href="#welcome">
                            HOME
                        </a>
                    </li>
                    <li>
                        <a href="#game">
                            GAME
                        </a>
                    </li>
                    <li>
                        <a href="#about">
                            ABOUT
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            CONTACT
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Menu;