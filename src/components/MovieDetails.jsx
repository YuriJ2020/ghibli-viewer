import React from 'react';
import { Redirect, useParams } from 'react-router-dom';

import { MDBContainer, MDBRow, MDBCol, MDBCardTitle } from 'mdb-react-ui-kit';

import _ from 'lodash';

import { useGetMovieByIdQuery } from '../store/services/ghibliApi';

const MovieDetails = () => {
  const { mid } = useParams();
  const { data: movie, error, isLoading } = useGetMovieByIdQuery(mid);

  return (
    <MDBContainer>
      {isLoading ? (
        <p>Still loading...</p>
      ) : error ? (
        <p>{error.data.message}</p>
      ) : (
        <>
          <MDBRow>
            <MDBCol>
              <MDBCol className='white-text'>
                <MDBCol className='pt-2'>
                  <MDBCardTitle className='h1-responsive m-5 font-weight-bold'>{movie.title}</MDBCardTitle>
                  <MDBRow>
                    <MDBCol lg='6'>
                      <p className='mx-5 mb-4'>{movie.description}</p>
                      <MDBRow className='ml-4'>
                        <MDBCol>
                          <p>
                            <span className='font-weight-bold text-nowrap'>Directed By</span>
                            <br />
                            {movie.director}
                          </p>
                        </MDBCol>
                        <MDBCol>
                          <p>
                            <span className='font-weight-bold  text-nowrap'>Released Year</span>
                            <br />
                            {movie.releaseYear}
                          </p>
                        </MDBCol>
                        <MDBCol>
                          <p>
                            <span className='font-weight-bold'> Runtime </span>
                            <br />
                            {movie.runningTime}
                          </p>
                        </MDBCol>
                      </MDBRow>
                    </MDBCol>

                    {/* <MDBCol lg='6' className='text-center'>
                  <YouTube videoId={movie.youtubePath} opts={opts} onReady={onReady} />
                </MDBCol> */}
                  </MDBRow>
                </MDBCol>
              </MDBCol>
            </MDBCol>
          </MDBRow>
        </>
      )}
    </MDBContainer>
  );
};

export default MovieDetails;
