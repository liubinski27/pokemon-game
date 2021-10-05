import style from './style.module.css';

const Input = ({ value, label, type = 'text', name, onChange, required }) => {
    const handleLocalChange = e => {
        onChange && onChange(e.target.value);
    };
    return (
        <>
            <div className={style.root}>
                <input
                    value={value}
                    type={type}
                    name={name}
                    className={style.input}
                    onChange={handleLocalChange}
                    required={required}
                />
                <span className={style.highlight}></span>
                <span className={style.bar}></span>
                <label className={style.label}>{label}</label>
            </div>
        </>
    );
};

export default Input;