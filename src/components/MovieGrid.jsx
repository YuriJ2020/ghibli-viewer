import React from 'react';
import { useParams } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

import { useSearchMoviesQuery } from '../store/services/ghibliApi';
import MovieCard from './MovieCard';

import totoroGIF from '../assets/totoro.gif';

const MovieGrid = () => {
  const { keyword, cid } = useParams();
  const { data: movies, error, isLoading } = useSearchMoviesQuery({ keyword, cid });

  return (
    <>
      {isLoading ? (
        <>
          <div className='d-flex justify-content-center '>
            <img src={totoroGIF} alt='Loading animation' className='w-25' />
          </div>
          <h1 className='text-center'>LOADING....</h1>
        </>
      ) : error ? (
        <p>{error.data.message}</p>
      ) : (
        <MDBContainer fluid>
          <MDBContainer>
            <MDBRow>
              {movies.map((movie) => (
                <MDBCol key={`col-${movie.id}`} lg='3' md='6' sm='6'>
                  <MovieCard movie={movie} />
                </MDBCol>
              ))}
            </MDBRow>
          </MDBContainer>
        </MDBContainer>
      )}
    </>
  );
};

export default MovieGrid;
