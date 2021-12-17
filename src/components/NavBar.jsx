import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import styled from 'styled-components';

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

import CategoryDropDownMenu from './CategoryDropDownMenu';
import SortDropDownMenu from './SortDropDownMenu';
import SearchBar from './SearchBar';

import TotoroPNG from '../assets/totoro-logo.png';

const NavBar = (props) => {
  const [showNav, setShowNav] = useState(false);

  const { children } = props;

  const MDBNavbarItemS = styled(MDBNavbarItem)`
    @media (min-width: 992px) {
      padding-left: 4rem;
      padding-right: 1rem;
    }
  `;

  return (
    <>
      <BrowserRouter>
        <MDBNavbar expand='lg' dark style={{ backgroundColor: '#26A69A' }}>
          <MDBContainer className='px-5 py-2' fluid>
            <MDBNavbarBrand href='/'>
              <img src={TotoroPNG} height='60' alt='' loading='lazy' />
              <h4>Studio Ghibli Collection</h4>
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
                  <MDBNavbarLink href='/'>All Movies</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItemS>
                  <CategoryDropDownMenu />
                </MDBNavbarItemS>
                <MDBNavbarItem>
                  <SortDropDownMenu />
                </MDBNavbarItem>
              </MDBNavbarNav>
              <SearchBar />
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>

        <MDBContainer className='mx-0 px-0' fluid>
          {children}
        </MDBContainer>
      </BrowserRouter>
    </>
  );
};

const navBarWithSwitch = (CustomSwitch) => {
  return (
    <NavBar>
      <CustomSwitch />
    </NavBar>
  );
};

export default navBarWithSwitch;
