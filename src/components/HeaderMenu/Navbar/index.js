import classNames from 'classnames';

import style from './style.module.css';

const Navbar = ({onClickButton}) => {

    const handleClick = () => {
        console.log('clicked');
        onClickButton && onClickButton();
    }

    return (
        <nav className={style.root}>
            <div className={style.navWrapper}>
                <p className={style.brand}>
                    LOGO
                </p>
                <a className={classNames(style.menuButton, style.deactive)}>
                    <span onClick={handleClick} />
                </a>
            </div>
        </nav>
    )
}

export default Navbar;