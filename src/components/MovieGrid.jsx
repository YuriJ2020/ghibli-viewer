import React from 'react';

import { useGetAllMoviesQuery } from '../store/services/ghibliApi';
import MovieCard from './MovieCard';

import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

const MovieGrid = () => {
  const { data, error, isLoading } = useGetAllMoviesQuery();

  return (
    <>
      {isLoading ? (
        <p>Still loading...</p>
      ) : error ? (
        <p>{error.data.message}</p>
      ) : (
        <MDBRow>
          {data.map((movie) => (
            <MDBCol key={`col-${movie.id}`} lg='3' md='4' className='justify-content-center'>
              <MovieCard movie={movie} />
            </MDBCol>
          ))}
        </MDBRow>
      )}
    </>
  );
};

export default MovieGrid;
