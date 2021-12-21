import React from 'react';
import styled from 'styled-components';

import NotFoundGIF from '../assets/not-found.gif';

const DivS = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;

const ImgS = styled.img`
  width: 18rem;
`;

const NotFound = () => {
  return (
    <>
      <DivS>
        <div className='text-center'>
          <ImgS src={NotFoundGIF} alt='Not Found Animation' />
          <h1 className='text-center pt-5'>Page is not found.</h1>
        </div>
      </DivS>
    </>
  );
};

export default NotFound;
