import { useState } from 'react';
import { NotificationManager } from 'react-notifications';
import { useDispatch } from 'react-redux';
import { getUserAsync, getUserUpdateAsync } from '../../store/user';
import LoginForm from '../LoginForm';
import Modal from '../Modal';

import Menu from './Menu'
import NavBar from './Navbar';

const signinSignupUser = async ({ email, password, type }) => {
  const requestOptions = {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
      returnSecureToken: true,
    }),
  };

  switch (type) {
    case 'signup':
      return await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCn00yeXZaR9eC_scgYIO_lotxUcqlqZ04', requestOptions).then(res => res.json());
    case 'signin':
      return await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCn00yeXZaR9eC_scgYIO_lotxUcqlqZ04', requestOptions).then(res => res.json());
    default:
      return 'I cannnot login user';
  }
}

const HeaderMenu = ({ bgActive }) => {

  const [isOpen, setOpen] = useState(null);
  const [isOpenModal, setModalOpen] = useState(true);
  const dispatch = useDispatch();

  const handleOpenMenu = () => {
    setOpen(prevState => !prevState);
  }

  const handleClickLogin = () => {
    setModalOpen(prevState => !prevState);
  }

  const handleSubmitLoginForm = async (props) => {
    
    const response = await signinSignupUser(props);

    if (response.hasOwnProperty('error')) {
      NotificationManager.error(response.error.message, 'Wrong!');
    } else {
      if (props.type === 'signup') {
        const pokemonStart = await fetch('https://reactmarathon-api.herokuapp.com/api/pokemons/starter').then(res => res.json());
        console.log(pokemonStart);

        for (const item of pokemonStart.data) {
          await fetch(`https://pokemon-game-cc86f-default-rtdb.firebaseio.com/${response.localId}/pokemons.json?auth=${response.idToken}`, {
            method: 'POST',
            body: JSON.stringify(item),
          });
        }
      }
      localStorage.setItem('idToken', response.idToken);
      NotificationManager.success('Success message');
      dispatch(getUserUpdateAsync());
      handleClickLogin();
    }
  };

  return (
    <>
      <Menu
        isOpen={isOpen}
        onClickButton={handleOpenMenu}
      />
      <NavBar
        bgActive={bgActive}
        isOpen={isOpenModal}
        onClickButton={handleOpenMenu}
        onClickLogin={handleClickLogin}
      />
      <Modal
        isOpen={isOpenModal}
        title="Log in..."
        onCloseModal={handleClickLogin}
      >
        <LoginForm
          isResetField={!isOpenModal}
          onSubmit={handleSubmitLoginForm}
        />
      </Modal>
    </>
  )
}

export default HeaderMenu;