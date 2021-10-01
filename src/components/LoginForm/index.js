import { useState } from "react"
import Input from "../Input";

import style from './style.module.css';

const LoginForm = ({ onSubmit }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistered, setRegistered] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit && onSubmit({
            email,
            password,
            isRegistered
        });
        setEmail('');
        setPassword('');
    };

    const handleLoginRegisterButton = () => {
        setRegistered(prevState => !prevState);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Input
                    value={email}
                    name="email"
                    onChange={value => setEmail(value)}
                    required
                    label="E-mail"
                />
            </div>
            <div>
                <Input
                    value={password}
                    type="password"
                    name="password"
                    onChange={value => setPassword(value)}
                    required
                    label="Password"
                />
            </div>

            <div className={style.flex}>
                <button className={style.buttonLogin}>
                    {isRegistered ? 'Sign in' : 'Sign up'}
                </button>
                <span className={style.span} onClick={handleLoginRegisterButton}>
                    {isRegistered ? 'Register?' : 'Login?'}
                </span>
            </div>
        </form>
    );
};

export default LoginForm;