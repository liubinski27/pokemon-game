import classNames from 'classnames';

import style from './style.module.css';

const Layout = ({title, descr, urlBg, colorBg = 'yellow', children}) => {
    const styleRoot = urlBg ? {background: `url(${urlBg})`} : {background: `${colorBg}`};
    return (
        <section className={style.root} style={styleRoot}>
            <div className={style.wrapper}>
                <article>
                    <div className={style.title}>
                        <h3>{title}</h3>
                        <span className={style.separator}></span>
                    </div>
                    <div className={classNames(style.desc, style.full)}>
                        <p>{descr}</p>
                    </div>
                </article>
                <div className={style.children}>
                    {children}
                </div>
            </div>
        </section>
    )
}

export default Layout;