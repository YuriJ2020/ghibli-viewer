import React from 'react';

import { useGetMovieByIdQuery } from '../store/services/ghibliApi';

const FavedItem = (props) => {
  const { id } = props;
  const { data: movie, error, isLoading } = useGetMovieByIdQuery(id);

  return (
    <>
      {isLoading ? (
        <>
          <span>Loading Movie {id}...</span>
        </>
      ) : error ? (
        <span>{error.data.message}</span>
      ) : (
        <>
          <span>{movie.title}</span>
          <img src={movie.profileImage} alt={movie.title} />
        </>
      )}
    </>
  );
};

export default FavedItem;
