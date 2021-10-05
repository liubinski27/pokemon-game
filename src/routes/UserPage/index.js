import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router";
import { removeUser, selectUser } from "../../store/user"

import style from './style.module.css';

const UserPage = () => {
    const userData = useSelector(selectUser);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogOutUser = () => {
        localStorage.removeItem('idToken');
        dispatch(removeUser());
        history.replace('/');
    };

    return (
        <>
            <div className={style.root}>
                <div className={style.content}>
                    <h3>Email: </h3>{userData.email}
                </div>
                <div className={style.content}>
                    <h3>LocalID: </h3>{userData.localId}
                </div>
                <div className={style.content}>
                    <h3>Created at: </h3>
                    {new Date(Number(userData.createAt)).toLocaleDateString()}
                </div>
            </div>
            <button onClick={handleLogOutUser}>Log Out User</button>
        </>
    );
};

export default UserPage;