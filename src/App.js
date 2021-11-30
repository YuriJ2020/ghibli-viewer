import React from 'react';

import navBarWithSwitch from './components/NavBar';
import CustomSwitch from './switch';

const App = () => {
  return (
    <>
      <div className='App'>{navBarWithSwitch(CustomSwitch)}</div>
    </>

    // <>
    //   {isLoading ? (
    //     <p>Still loading...</p>
    //   ) : error ? (
    //     <p>{error.data.message}</p>
    //   ) : (
    //     <ul>
    //       {data.map((movie) => (
    //         <div key={movie.id}>
    //           <li>{movie.title}</li>
    //           <li>{movie.description}</li>
    //           <li>{movie.director}</li>
    //           <img src={`http://localhost:8080${movie.profileImage}`} alt='' />
    //         </div>
    //       ))}
    //     </ul>
    //   )}
    // </>
  );
};

export default App;
