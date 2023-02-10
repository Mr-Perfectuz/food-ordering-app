import React from 'react'
import { Drawer } from 'antd';
import { useNavMenuContext } from '../../../context/NavMenu';



const NavMenu = () => {
  const [openNavMenu, setOpenNavMenu] = useNavMenuContext()

  const onClose = () => {
    setOpenNavMenu(false);
  };
  return (
    <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={openNavMenu}>
      <p>NavMenu</p>
    </Drawer>
  )
}

export default NavMenu