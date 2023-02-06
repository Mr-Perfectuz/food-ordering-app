import React, { useContext, useState } from 'react'
import { Button, Drawer } from 'antd';
import { NavMenuContext } from '../../../context/NavMenu';

const NavMenu = () => {
  const [openNavMenu, setOpenNavMenu] = useContext(NavMenuContext)

  const showDrawer = () => {
    openNavMenu(true);
  };

  const onClose = () => {
    openNavMenu(false);
  };
  return (
    <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={openNavMenu}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  )
}

export default NavMenu