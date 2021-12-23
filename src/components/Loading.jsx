import React from 'react';
import { Spinner } from 'react-bootstrap';

import styled from 'styled-components';

const DivS = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const Loading = () => {
  return (
    <>
      <DivS>
        <Spinner animation='border' variant='success' />
      </DivS>
    </>
  );
};

export default Loading;
