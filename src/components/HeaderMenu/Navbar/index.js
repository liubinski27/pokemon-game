import classNames from 'classnames';
import { ReactComponent as LoginSVG } from '../../../img/login.svg';

import style from './style.module.css';

const Navbar = ({ bgActive, onClickButton, onClickLogin }) => {

    return (
        <nav id={style.navbar} className={classNames({
            [style.bg]: bgActive
        })}>
            <div className={style.navWrapper}>
                <p className={style.brand}>
                    LOGO
                </p>
                <div className={style.loginAndMenu}>
                    <div
                        className={style.loginWrap}
                        onClick={onClickLogin}
                    >
                        <LoginSVG />
                    </div>
                    <p
                        className={classNames(style.menuButton, style.deactive)}
                        onClick={onClickButton}
                    >
                        <span />
                    </p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;