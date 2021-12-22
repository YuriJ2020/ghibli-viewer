import React, { useState } from 'react';

import { Offcanvas } from 'react-bootstrap';
import { MDBIcon } from 'mdb-react-ui-kit';

import { useSelector } from 'react-redux';
import { selectFavedMovieIds } from '../store/faveSlice';

import FavedItem from './FavedItem';

const FaveSideBar = () => {
  // offCanvas
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const favedMovieIds = useSelector(selectFavedMovieIds);

  return (
    <>
      <MDBIcon icon='heart' size='2x' className='ms-4' onClick={handleShow} />
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Faves List</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {favedMovieIds.map((mid) => (
            <p key={mid}>
              <FavedItem id={mid} />
            </p>
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default FaveSideBar;
