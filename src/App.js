import React from 'react';

import { useGetPokemonByNameQuery } from './store/services/pokemon';

const App = () => {
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
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default App;
