import { useState } from 'react';

import Menu from './Menu'
import NavBar from './Navbar';

const HeaderMenu = () => {

const[isOpen, setOpen] = useState(true);

const handleOpenMenu = () => {
    console.log('####: <HeaderMenu />');
    setOpen(prev => !prev);
}
  
  return (
      <div>
          <Menu 
            isOpen={isOpen}
          />
          <NavBar onClickButton={handleOpenMenu} />
      </div>
  )
}

export default HeaderMenu;