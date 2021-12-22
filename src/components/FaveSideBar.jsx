import React from 'react';

import styled from 'styled-components';

import { Offcanvas } from 'react-bootstrap';
import { MDBIcon } from 'mdb-react-ui-kit';

import { useSelector, useDispatch } from 'react-redux';
import { selectFavedMovieIds, selectShow, open, close } from '../store/faveSlice';

import FavedItem from './FavedItem';

const FaveSideBar = () => {
  const dispatch = useDispatch();
  const show = useSelector(selectShow);

  const handleShow = () => dispatch(open());
  const handleClose = () => dispatch(close());

  const favedMovieIds = useSelector(selectFavedMovieIds);

  const MDBIconS = styled(MDBIcon)`
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
      transition-duration: 0.2s;
    }
  `;

  return (
    <>
      <MDBIconS icon='heart' size='3x' className='ms-4' style={{ color: '#C5585F' }} onClick={handleShow} around />
      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header style={{ backgroundColor: '#3AA7A0' }} closeButton>
          <Offcanvas.Title className='text-white'>Your Faves List</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='p-0'>
          {favedMovieIds.map((mid) => (
            <div key={mid}>
              <FavedItem id={mid} />
            </div>
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default FaveSideBar;
