import React from 'react';
// import _ from 'lodash';
import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';

import { flip, selectFave } from '../store/faveSlice';

import { MDBIcon } from 'mdb-react-ui-kit';

const MDBIconS = styled(MDBIcon)`
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
    transition-duration: 0.2s;
  }
`;

const Fave = ({ id }) => {
  const { fave } = useSelector(selectFave(id)) ?? { fave: false };
  const dispatch = useDispatch();

  const handleFaveClick = () => {
    dispatch(flip(id));
  };

  return (
    <>
      <MDBIconS icon='heart' size='2x' className='ms-4' color={fave ? 'danger' : 'light'} onClick={handleFaveClick} />
    </>
  );
};

export default Fave;
