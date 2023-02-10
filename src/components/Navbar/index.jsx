import React, { useContext, useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { Nav, Container, Wrapper, Logo, Icons } from './style'

//import logo img
import logo from '../../assets/images/logo.jpeg'

// import navbar data
import { navbar } from '../../utils/navbar'
// import FoogPage component
import FoodPage from '../../pages/FoodPage'

// import icons from material ui
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery } from '../../hooks/useMediaQuery'

// import drawer from ant design
import { Drawer } from 'antd';
import NavMenu from './NavMenu'
import { NavMenuContext, useNavMenuContext } from '../../context/NavMenu'

// import CartDrawer
import CartDrawer from '../Cart/CartDrawer';

// import CartDrawerContext
import { useCartDrawer } from '../../context/CartDrawerProvider'


const Navbar = () => {
  const navigate = useNavigate();
  let isPageWide = useMediaQuery('(max-width: 884px)');

  // NavMenuContext
  const [openNavMenu, setOpenNavMenu] = useNavMenuContext();


  // cart drawer
  const [openCartDrawer, setOpenCartDrawer] = useCartDrawer();


  return (
    <Container>
      <Nav>
        <Nav.Column>
          <Nav.Column.Wrapper>
            <Nav.Column.Wrapper.Box>

              <Logo src={logo} alt='logo' loading='lazy' onClick={() => navigate('/home')} />
              <Nav.Column.Title>Tasty Treat</Nav.Column.Title>

            </Nav.Column.Wrapper.Box>
          </Nav.Column.Wrapper>

        </Nav.Column>

        <Nav.Column>
          {!isPageWide &&
            <Nav.Column.Ul>
              {
                navbar?.map((navlink) => (
                  !navlink?.hidden &&
                  <NavLink key={navlink?.id} to={navlink.path}
                    style={({ isActive }) => {
                      return {
                        color: isActive ? 'crimson' : 'var(----primary-black)',
                        fontWeight: isActive ? '700' : '600',
                        fontSize: '20px'
                      }
                    }}>
                    {navlink?.title}
                  </NavLink>
                )
                )
              }
            </Nav.Column.Ul>
          }
        </Nav.Column>

        <Nav.Column>

          {/* Icons  */}
          <Icons>

            <IconButton aria-label="cart">
              <Badge badgeContent={4} color="error">
                <ShoppingCartIcon onClick={() => setOpenCartDrawer(!openCartDrawer)} />
              </Badge>
              <PermIdentityIcon onClick={() => navigate('/login')} />
              {
                isPageWide && <MenuIcon color='sction' onClick={() => setOpenNavMenu(!openNavMenu)} />
              }
            </IconButton>

          </Icons>
        </Nav.Column>
      </Nav>
      <Wrapper>

        <CartDrawer />
        <NavMenu />

      </Wrapper>
      <Outlet />
      <FoodPage />
    </Container>
  )
}

export default Navbar