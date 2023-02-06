import React from 'react'
import NavMenuContextProvider from './NavMenu'

export const Context = () => {
  return (
    <NavMenuContextProvider>{children}</NavMenuContextProvider>
  )
}
