import React, { createContext, useState } from 'react'

export const NavMenuContext = createContext();

export const NavMenuContextProvider = ({ children }) => {
  const [openNavMenu, setOpenNavMenu] = useState(false);
  return (
    <NavMenu.Provider value={[openNavMenu, setOpenNavMenu]}>
      {children}
    </NavMenu.Provider>
  )
}


export default NavMenuContextProvider;