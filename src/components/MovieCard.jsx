import React from 'react';
import { Link } from 'react-router-dom';

// import { useGetAllMovieByIdQuery } from '../store/services/ghibliApi';

import { MDBCard, MDBCardImage, MDBRipple, MDBCardText, MDBCardBody, MDBIcon } from 'mdb-react-ui-kit';

import Fave from './Fave';

const MovieCard = (props) => {
  // const { data } = useGetAllMovieByIdQuery('all');
  const {
    movie: { id, title, summary, profileImage, rank, releaseYear },
  } = props;

  const detailsPath = `/ghibli-viewer/movie/${id}`;

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
                <span className='text-white'>{summary}</span>
              </div>
            </MDBRipple>
          </Link>
          <MDBCardBody className='py-0' style={{ backgroundColor: '#26A69A' }}>
            <MDBCardText className='py-2' style={{ whiteSpace: 'nowrap' }}>
              <span className='d-flex align-items-center'>
                <span className='me-3'>
                  <MDBIcon fas icon='crown' size='lg' color='warning' />
                  &nbsp;
                  {rank}
                </span>
                <span>
                  <MDBIcon fas icon='video' size='lg' style={{ color: '#607D8B' }} />
                  &nbsp;
                  <span>{releaseYear}</span>
                </span>
                <span className='ms-4'>
                  <Fave id={id} />
                </span>
              </span>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </div>
    </>
  );
};
export default MovieCard;
