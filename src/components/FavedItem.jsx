import React from 'react';
import { useDispatch } from 'react-redux';

import { close } from '../store/faveSlice';

import { useGetMovieByIdQuery } from '../store/services/ghibliApi';
import { MDBCard, MDBBtn } from 'mdb-react-ui-kit';

import { Link } from 'react-router-dom';

const FavedItem = (props) => {
  const { id } = props;
  const { data: movie, error, isLoading } = useGetMovieByIdQuery(id);

  const dispatch = useDispatch();
  const handleClose = () => dispatch(close());

  const detailsPath = `/ghibli-viewer/movie/${id}`;

  return (
    <>
      {isLoading ? (
        <>
          <p>Loading Movie {id}...</p>
        </>
      ) : error ? (
        <p>{error.data.message}</p>
      ) : (
        <>
          <div className='d-flex align-items-center'>
            <Link to={detailsPath} onClick={handleClose}>
              <MDBCard style={{ maxWidth: '12rem' }}>
                <img src={movie.profileImage} alt={movie.title} />
              </MDBCard>
            </Link>
            <div className='py-2 px-2'>
              <p className='font-weight-bold'>{movie.title}</p>
              <p>{movie.releaseYear}</p>
              <p>{movie.director}</p>
              <Link to={detailsPath}>
                <MDBBtn style={{ backgroundColor: '#3AA7A0' }} onClick={handleClose}>
                  Details
                </MDBBtn>
              </Link>
            </div>
          </div>
          <hr className='m-0' />
        </>
      )}
    </>
  );
};

export default FavedItem;
