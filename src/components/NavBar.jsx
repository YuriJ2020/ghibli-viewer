import React, { useState } from 'react';

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBIcon,
  MDBCollapse,
  MDBNavbarNav,
} from 'mdb-react-ui-kit';

import { BrowserRouter, Link } from 'react-router-dom';

const NavBar = (props) => {
  const [showNav, setShowNav] = useState(false);

  const { children } = props;

  return (
    <>
      <BrowserRouter>
        <MDBNavbar expand='lg' light bgColor='light'>
          <MDBContainer fluid>
            <MDBNavbarBrand href='#'>
              <img
                src='https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.png'
                height='30'
                alt=''
                loading='lazy'
              />
            </MDBNavbarBrand>
            <MDBNavbarToggler
              type='button'
              aria-expanded='false'
              aria-label='Toggle navigation'
              onClick={() => setShowNav(!showNav)}
            >
              <MDBIcon icon='bars' fas />
            </MDBNavbarToggler>
            <MDBCollapse navbar show={showNav}>
              <MDBNavbarNav>
                <MDBNavbarItem>
                  {/* <MDBNavbarLink href='/' active aria-current='page'>
                    All Movies
                  </MDBNavbarLink> */}
                  <Link to='/'>All Movies</Link>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href='/notfound'>Notfound</MDBNavbarLink>
                </MDBNavbarItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
        <MDBContainer>{children}</MDBContainer>
      </BrowserRouter>
    </>
  );
};

const navBarWithSwitch = (CustomSwitch) => (
  <>
    <NavBar>
      <CustomSwitch />
    </NavBar>
  </>
);

export default navBarWithSwitch;
