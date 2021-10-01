import { useState } from 'react';
import { NotificationManager } from 'react-notifications';
import LoginForm from '../LoginForm';
import Modal from '../Modal';

import Menu from './Menu'
import NavBar from './Navbar';

const HeaderMenu = ({ bgActive }) => {

  const [isOpen, setOpen] = useState(null);
  const [isOpenModal, setModalOpen] = useState(true);

  const handleOpenMenu = () => {
    setOpen(prevState => !prevState);
  }

  const handleClickLogin = () => {
    setModalOpen(prevState => !prevState);
  }

  const handleSubmitLoginForm = async ({ email, password, isRegistered }) => {
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
    };

    //const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCn00yeXZaR9eC_scgYIO_lotxUcqlqZ04', requestOptions).then(res => res.json());
    let response;
    if (isRegistered === false) {
      response = await fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCn00yeXZaR9eC_scgYIO_lotxUcqlqZ04',
        requestOptions
      ).then(res => res.json());
    }
    if (isRegistered === true) {
      response = await fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCn00yeXZaR9eC_scgYIO_lotxUcqlqZ04',
        requestOptions
      ).then(res => res.json());
    }
    if (response.hasOwnProperty('error')) {
      NotificationManager.error(response.error.message, 'Wrong!');
    } else {
      if (isRegistered === true) {
        localStorage.setItem('idToken', response.idToken);
      }
      NotificationManager.success('Success message');
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
          onSubmit={handleSubmitLoginForm}
        />
      </Modal>
    </>
  )
}

export default HeaderMenu;