import React from 'react';

import styled from 'styled-components';

import totoroGIF from '../assets/totoro.gif';

const DivS = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const ImgS = styled.img`
  width: 14rem;
`;

const Loading = () => {
  return (
    <>
      <DivS>
        <ImgS src={totoroGIF} alt='Loading animation' />
        <h1 className='text-center'>LOADING....</h1>
      </DivS>
    </>
  );
};

export default Loading;
