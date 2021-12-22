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

    @media (min-width: 992px) {
      padding-right: 2rem;
    }
    &:hover {
      transform: scale(1.2);
      transition-duration: 0.2s;
    }
  `;

  return (
    <>
      <MDBIconS far icon='heart' size='2x' color='light' onClick={handleShow} />
      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header style={{ backgroundColor: '#3AA7A0' }} closeButton>
          <Offcanvas.Title className='text-white'>Favourite Movies</Offcanvas.Title>
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
