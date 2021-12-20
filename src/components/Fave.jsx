import React from 'react';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';

import { flip } from '../store/faveSlice';

import { MDBIcon } from 'mdb-react-ui-kit';

const Fave = ({ id }) => {
  const { fave } = useSelector((state) => _.find(state.faveSlice.faves, { id })) ?? { fave: false };
  const dispatch = useDispatch();

  const handleFaveClick = () => {
    // e.stopPropagation();
    dispatch(flip(id));
  };

  return (
    <>
      <button onClick={handleFaveClick}>
        <MDBIcon icon='heart' size='2x' className='ms-4' color={fave ? 'info' : 'danger'} />
      </button>
    </>
  );
};

export default Fave;
