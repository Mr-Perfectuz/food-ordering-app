import React from 'react'
import CartDrawerContextProvider from './CartDrawerProvider'
import NavMenuContextProvider from './NavMenu'
import ProductContextProvider from './Products'


export const Context = ({ children }) => {
  return (
    <NavMenuContextProvider>
      <CartDrawerContextProvider>
        <ProductContextProvider>
          {children}

        </ProductContextProvider>
      </CartDrawerContextProvider>
    </NavMenuContextProvider>
  )
}
