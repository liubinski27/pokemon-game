import { useState } from 'react';

import Menu from './Menu'
import NavBar from './Navbar';

const HeaderMenu = ({ bgActive }) => {

  const [isOpen, setOpen] = useState(true);

  const handleOpenMenu = () => {
    setOpen(prev => !prev);
  }

  return (
    <div>
      <Menu
        isOpen={isOpen}
        onClickButton={handleOpenMenu}
      />
      <NavBar
        bgActive={bgActive}
        onClickButton={handleOpenMenu}
      />
    </div>
  )
}

export default HeaderMenu;