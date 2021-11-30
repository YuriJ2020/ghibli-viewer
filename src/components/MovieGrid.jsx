import React from 'react';

import { useGetPokemonByNameQuery } from '../store/services/pokemon';

const MovieGrid = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery('all');

  return (
    <>
      {isLoading ? (
        <p>Still loading...</p>
      ) : error ? (
        <p>{error.data.message}</p>
      ) : (
        <ul>
          {data.map((movie) => (
            <div key={movie.id}>
              <li>{movie.title}</li>
              <li>{movie.description}</li>
              <li>{movie.director}</li>
              <img src={`http://localhost:8080${movie.profileImage}`} alt='' />
            </div>
          ))}
        </ul>
      )}
    </>
  );
};

export default MovieGrid;
