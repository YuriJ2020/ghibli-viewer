import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const ghibliApi = createApi({
  reducerPath: 'ghibliApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://quote-me-on-ghibli.herokuapp.com' }),
  endpoints: (builder) => ({
    getMovieById: builder.query({
      query: (mid) => `/movie/${mid}`,
    }),

    getAllCategories: builder.query({
      query: () => '/category/all',
    }),

    searchMovies: builder.query({
      query: ({ keyword, cid }) => ({
        url: keyword || cid ? '/movie/search' : '/movie/all',
        params: keyword || cid ? { keyword, categoryId: cid } : null,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMovieByIdQuery, useGetAllCategoriesQuery, useSearchMoviesQuery } = ghibliApi;
