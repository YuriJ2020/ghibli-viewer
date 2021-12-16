import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

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
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
} from 'mdb-react-ui-kit';

import SearchBar from './SearchBar';
import SortDropDownMenu from './SortDropDownMenu';
import { useGetAllCategoriesQuery } from '../store/services/ghibliApi';

import totoro from '../assets/totoro-logo.png';

const NavBar = (props) => {
  const [showNav, setShowNav] = useState(false);

  const { data: categories, isLoading, error } = useGetAllCategoriesQuery();
  const { children } = props;

  return (
    <>
      <BrowserRouter>
        <MDBNavbar expand='lg' dark style={{ backgroundColor: '#26A69A' }}>
          <MDBContainer className='px-5 py-2' fluid>
            <MDBNavbarBrand href='/'>
              <img src={totoro} height='60' alt='' loading='lazy' />
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
                <MDBNavbarItem>
                  <MDBDropdown>
                    <MDBDropdownToggle className='bg-dark'>Categories</MDBDropdownToggle>
                    <MDBDropdownMenu>
                      {isLoading ? (
                        <p>Loading....</p>
                      ) : error ? (
                        <p>{error?.message}</p>
                      ) : (
                        categories.map(({ id, name }) => (
                          <MDBDropdownItem key={id}>
                            <MDBDropdownLink href={`/category/${id}`}>{name}</MDBDropdownLink>
                          </MDBDropdownItem>
                        ))
                      )}
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavbarItem>
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
