import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import _ from 'lodash';

import YouTube from 'react-youtube';

import { MDBContainer, MDBRow, MDBCol, MDBCardTitle } from 'mdb-react-ui-kit';
import styled from 'styled-components';

import { useGetMovieByIdQuery } from '../store/services/ghibliApi';

const MDBContainerS = (props) => {
  const { movie, className, children } = props;
  const MDBContainerStyled = styled(MDBContainer)`
    background-image: url(${movie.posterImage}), linear-gradient(to right, #2e2e2e, #ffffff);
  `;
  return <MDBContainerStyled className={className} children={children}></MDBContainerStyled>;
};

const MovieDetails = () => {
  const { mid } = useParams();
  const { data: movie, error, isLoading } = useGetMovieByIdQuery(mid);

  const opts = {
    height: '330',
    width: '460',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const onReady = (e) => {
    e.target.pauseVideo();
  };

  return (
    <>
      {isLoading ? (
        <p>Still loading...</p>
      ) : error ? (
        <p>{error.data.message}</p>
      ) : (
        <>
          <MDBContainerS className='text-white' movie={movie}>
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

                      <MDBCol lg='6' className='text-center'>
                        <YouTube videoId={movie.youtubeVideoId} opts={opts} onReady={onReady} />
                      </MDBCol>
                    </MDBRow>
                  </MDBCol>
                </MDBCol>
              </MDBCol>
            </MDBRow>
          </MDBContainerS>
        </>
      )}
    </>
  );
};

export default MovieDetails;
