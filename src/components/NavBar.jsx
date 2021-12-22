import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import styled from 'styled-components';

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBIcon,
  MDBCollapse,
  MDBNavbarNav,
} from 'mdb-react-ui-kit';

import CategoryDropDownMenu from './CategoryDropDownMenu';
import SortDropDownMenu from './SortDropDownMenu';
import SearchBar from './SearchBar';
import HomeLogo from './HomeLogo';
import FaveSideBar from './FaveSideBar';

const MDBNavbarItemS = styled(MDBNavbarItem)`
  @media (min-width: 992px) {
    padding-left: 3rem;
    padding-right: 1rem;
  }
`;

const NavBar = (props) => {
  const [showNav, setShowNav] = useState(false);

  const { children } = props;

  return (
    <>
      <BrowserRouter>
        <MDBNavbar expand='lg' dark style={{ backgroundColor: '#3AA7A0' }}>
          <MDBContainer>
            <HomeLogo />
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
                <MDBNavbarItemS>
                  <CategoryDropDownMenu />
                </MDBNavbarItemS>
                <MDBNavbarItem>
                  <SortDropDownMenu />
                </MDBNavbarItem>
              </MDBNavbarNav>
              <SearchBar />
              <FaveSideBar />
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
