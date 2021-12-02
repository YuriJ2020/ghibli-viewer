import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const ghibliApi = createApi({
  reducerPath: 'ghibliApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://quote-me-on-ghibli.herokuapp.com/' }),
  endpoints: (builder) => ({
    // getPokemonByName: builder.query({
    //   query: (name) => `movie/${name}`,
    // }),
    getAllMovieById: builder.query({
      query: (id) => `movie/${id}`,
    }),
    getAllMovie: builder.query({
      query: 'all',
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints

// export const { useGetPokemonByNameQuery } = ghibliApi;
export const { useGetAllMovieByIdQuery } = ghibliApi;
