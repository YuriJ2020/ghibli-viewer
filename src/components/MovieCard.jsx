import React from 'react';
import { Link } from 'react-router-dom';

// import { useGetAllMovieByIdQuery } from '../store/services/ghibliApi';

import { MDBCard, MDBCardImage, MDBRipple } from 'mdb-react-ui-kit';

const MovieCard = (props) => {
  // const { data } = useGetAllMovieByIdQuery('all');
  const {
    movie: { id, title, summary, profileImage },
  } = props;

  const detailsPath = `/movie/${id}`;

  return (
    <>
      <div className='py-3'>
        <MDBCard style={{ maxWidth: '18rem' }} className='mx-auto'>
          <Link to={detailsPath}>
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
              <MDBCardImage src={profileImage} alt={title} fluid />

              <div
                className='mask d-flex justify-content-center align-items-center px-3'
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
              >
                <p className='text-white'>{summary}</p>
              </div>
            </MDBRipple>
          </Link>
        </MDBCard>
      </div>
    </>
  );
};
export default MovieCard;
