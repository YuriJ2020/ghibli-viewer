import React from 'react';
import { useLocation, useParams, Redirect } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import Loading from './Loading';

import { useSearchMoviesQuery } from '../store/services/ghibliApi';
import MovieCard from './MovieCard';
import { reset, selectFaveCount } from '../store/faveSlice';

const MovieGrid = () => {
  const { keyword, cid } = useParams();
  const location = useLocation();
  const { data: movies, error, isLoading } = useSearchMoviesQuery({ keyword, cid });
  const searchParams = new URLSearchParams(location.search);
  const sort = searchParams.get('sort');

  const dispatch = useDispatch();
  const faveCount = useSelector(selectFaveCount);

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

  if (!isLoading && !error && faveCount === 0) {
    const total = movies.length;
    dispatch(reset(total));
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Redirect to='/ghibli-viewer/notfound' />
      ) : (
        <>
          <MDBContainer className='pt-2'>
            <MDBRow>
              {_.orderBy(movies, [iteratee], [order]).map((movie) => (
                <MDBCol key={`col-${movie.id}`} lg='3' md='6' sm='6'>
                  <MovieCard movie={movie} />
                </MDBCol>
              ))}
            </MDBRow>
          </MDBContainer>
        </>
      )}
    </>
  );
};

export default MovieGrid;
