import React, { useState } from 'react'
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
import { Button, Drawer } from 'antd';
import NavMenu from './NavMenu'


const Navbar = () => {
  const navigate = useNavigate();
  let isPageWide = useMediaQuery('(max-width: 884px)');

  // drawer
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

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
                <ShoppingCartIcon onClick={showDrawer} />
              </Badge>
              <PermIdentityIcon />
              {
                isPageWide && <MenuIcon color='sction' />
              }
            </IconButton>

          </Icons>
        </Nav.Column>
      </Nav>
      <Wrapper>

        <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
        <NavMenu />

        <Outlet />
        <FoodPage />
      </Wrapper>
    </Container>
  )
}

export default Navbar