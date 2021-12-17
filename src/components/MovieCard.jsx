import React from 'react';
import { Link } from 'react-router-dom';

// import { useGetAllMovieByIdQuery } from '../store/services/ghibliApi';

import { MDBCard, MDBCardImage, MDBRipple, MDBCardText, MDBCardBody } from 'mdb-react-ui-kit';

import Fave from './Fave';

import RankSVG from '../assets/rank.svg';
import VideoCameraSVG from '../assets/video-camera.svg';

const MovieCard = (props) => {
  // const { data } = useGetAllMovieByIdQuery('all');
  const {
    movie: { id, title, summary, profileImage, rank, releaseYear },
  } = props;

  const detailsPath = `/movie/${id}`;

  return (
    <>
      <div className='py-3'>
        <MDBCard style={{ maxWidth: '17rem' }} className='mx-auto'>
          <Link to={detailsPath}>
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
              <MDBCardImage src={profileImage} alt={title} fluid />

              <div
                className='mask d-flex justify-content-center align-items-center px-3'
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
              >
                <p className='text-white'>{summary}</p>
              </div>
            </MDBRipple>
          </Link>
          <MDBCardBody className='p-0'>
            <MDBCardText className='py-2 px-2'>
              <div className='d-flex  align-items-center'>
                <span className='me-3'>
                  <img src={RankSVG} alt='' style={{ width: '2.5rem' }} />
                  {rank}
                </span>
                <span>
                  <img src={VideoCameraSVG} alt='' style={{ width: '1.8rem' }} />
                  &nbsp;
                  {releaseYear}
                </span>
                <span className='ms-5'>
                  <Fave />
                </span>
              </div>

              {/* <span className='d-flex  justify-content-end'>
                <img src={VideoCameraSVG} alt='' style={{ width: '1.4rem' }} />
                {releaseYear}
              </span> */}
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </div>
    </>
  );
};
export default MovieCard;
