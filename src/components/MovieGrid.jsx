import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';

import { useSearchMoviesQuery } from '../store/services/ghibliApi';
import MovieCard from './MovieCard';
import { reset } from '../store/faveSlice';

import totoroGIF from '../assets/totoro.gif';

const MovieGrid = () => {
  const { keyword, cid } = useParams();
  const location = useLocation();
  const { data: movies, error, isLoading } = useSearchMoviesQuery({ keyword, cid });
  const searchParams = new URLSearchParams(location.search);
  const sort = searchParams.get('sort');

  const dispatch = useDispatch();

  let iteratee;
  let order;

  if (sort === 'newest') {
    iteratee = 'releaseYear';
    order = 'desc';
  } else if (sort === 'oldest') {
    iteratee = 'releaseYear';
    order = 'asc';
  } else if (sort === 'rank') {
    iteratee = 'rank';
    order = 'asc';
  } else {
    iteratee = 'id';
    order = 'asc';
  }

  if (!isLoading && !error) {
    const total = movies.length;
    dispatch(reset(total));
  }

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
        <>
          <MDBContainer fluid>
            <MDBContainer>
              <MDBRow>
                {_.orderBy(movies, [iteratee], [order]).map((movie) => (
                  <MDBCol key={`col-${movie.id}`} lg='3' md='6' sm='6'>
                    <MovieCard movie={movie} />
                  </MDBCol>
                ))}
              </MDBRow>
            </MDBContainer>
          </MDBContainer>
        </>
      )}
    </>
  );
};

export default MovieGrid;
