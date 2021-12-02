import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import { useGetAllMovieByIdQuery } from '../store/services/ghibliApi';

const MovieCard = (props) => {
  const { data } = useGetAllMovieByIdQuery('all');

  const {
    movie: { id, title, description, director, profileImage },
  } = props;

  return (
    <>
      {/* <ul> */}
      {/* {data.map((movie) => ( */}
      <div key={id}>
        <li>{title}</li>
        <li>{description}</li>
        <li>{director}</li>
        {/* <img src={`http://localhost:8080${movie.profileImage}`} alt='' /> */}
        <img src={profileImage} alt={title} />
      </div>
      {/* ))} */}
      {/* </ul> */}
    </>
    // <MDBCard style={{ maxWidth: '22rem' }}>
    //   <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
    //     <MDBCardImage src='https://mdbcdn.b-cdn.net/img/new/standard/nature/111.jpg' fluid alt='...' />
    //     <a>
    //       <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
    //     </a>
    //   </MDBRipple>
    //   <MDBCardBody>
    //     <MDBCardTitle>Card title</MDBCardTitle>
    //     <MDBCardText>
    //       Some quick example text to build on the card title and make up the bulk of the card's content.
    //     </MDBCardText>
    //     <MDBBtn href='#'>Button</MDBBtn>
    //   </MDBCardBody>
    // </MDBCard>
  );
};
export default MovieCard;
