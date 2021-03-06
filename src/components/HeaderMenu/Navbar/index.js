import classNames from 'classnames';

import style from './style.module.css';

const Navbar = ({bgActive, onClickButton}) => {

    const handleClick = () => {
        onClickButton && onClickButton();
    }

    return (
        <nav className={classNames(style.root, {
            [style.bg]: bgActive
        })}>
            <div className={style.navWrapper}>
                <p className={style.brand}>
                    LOGO
                </p>
                <p className={classNames(style.menuButton, style.deactive)} onClick={handleClick}>
                    <span />
                </p>
            </div>
        </nav>
    )
}

export default Navbar;