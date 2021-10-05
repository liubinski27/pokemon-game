import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as LoginSVG } from '../../../img/login.svg';
import { ReactComponent as UserSVG } from '../../../img/user.svg';
import { selectLocalID, selectUserLoading } from '../../../store/user';

import style from './style.module.css';

const Navbar = ({ bgActive, onClickButton, onClickLogin }) => {

    const isLoadingUser = useSelector(selectUserLoading);
    const localId = useSelector(selectLocalID);

    return (
        <nav id={style.navbar} className={classNames({
            [style.bg]: bgActive
        })}>
            <div className={style.navWrapper}>
                <p className={style.brand}>
                    LOGO
                </p>
                <div className={style.loginAndMenu}>
                    {(!isLoadingUser && !localId) && (
                        <div
                            className={style.loginWrap}
                            onClick={onClickLogin}
                        >
                            <LoginSVG />
                        </div>
                    )}
                    {(!isLoadingUser && localId) && (
                        <Link
                            className={style.loginWrap}
                            to="/login"
                        >
                            <UserSVG />
                        </Link>
                    )}
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