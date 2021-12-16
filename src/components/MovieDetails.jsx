import React from 'react';
import { useParams } from 'react-router-dom';
// import _ from 'lodash';

import YouTube from 'react-youtube';

import { MDBContainer, MDBRow, MDBCol, MDBCardTitle } from 'mdb-react-ui-kit';
import styled from 'styled-components';

import { useGetMovieByIdQuery } from '../store/services/ghibliApi';

const DivS = (props) => {
  const { movie, className, children } = props;
  const DivStyled = styled.div`
    background-image: url(${movie.posterImage}), linear-gradient(to right, #2e2e2e, #ffffff);
    min-height: 86vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: multiply;
  `;
  return <DivStyled className={className} children={children}></DivStyled>;
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
          <MDBContainer className='text-white p-0' fluid>
            <DivS movie={movie}>
              <MDBRow>
                <MDBCol>
                  <MDBCol className='white-text'>
                    <MDBCol className='pt-2'>
                      <MDBCardTitle className='h1-responsive m-5 font-weight-bold'>{movie.title}</MDBCardTitle>
                      <MDBRow>
                        <MDBCol lg='6'>
                          <p className='mx-5 mb-4'>{movie.description}</p>
                          <MDBRow className='mx-5'>
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
                          <YouTube videoId={movie.trailer.youtubeVideoId} opts={opts} onReady={onReady} />
                        </MDBCol>
                      </MDBRow>
                    </MDBCol>
                  </MDBCol>
                </MDBCol>
              </MDBRow>
            </DivS>
          </MDBContainer>
        </>
      )}
    </>
  );
};

export default MovieDetails;
