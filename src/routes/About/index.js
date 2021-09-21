import style from './style.module.css';

const AboutPage = () => {

    const handleClick = () => {}

    return (
        <div className={style.root}>
            <h1>This is page About!</h1>
            <button onClick={handleClick}>
                Change Theme
            </button>
        </div>
    )
}

export default AboutPage;