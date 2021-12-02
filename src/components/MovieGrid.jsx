import React from 'react';

import { useGetAllMovieByIdQuery } from '../store/services/ghibliApi';
import MovieCard from './MovieCard';

const MovieGrid = () => {
  const { data, error, isLoading } = useGetAllMovieByIdQuery('all');

  return (
    <>
      {isLoading ? (
        <p>Still loading...</p>
      ) : error ? (
        <p>{error.data.message}</p>
      ) : (
        <ul>
          {data.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </ul>
      )}
    </>
  );
};

export default MovieGrid;
