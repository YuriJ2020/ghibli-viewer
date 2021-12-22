import React from 'react';
import { useHistory } from 'react-router-dom';

import { MDBNavbarBrand } from 'mdb-react-ui-kit';

import TotoroPNG from '../assets/totoro-logo.png';

const HomeLogo = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push({ pathname: '/ghibli-viewer' });
  };

  return (
    <MDBNavbarBrand onClick={handleClick}>
      <img src={TotoroPNG} height='60' alt='Totoro Icon' />
      <strong>Studio Ghibli Collection</strong>
    </MDBNavbarBrand>
  );
};

export default HomeLogo;
