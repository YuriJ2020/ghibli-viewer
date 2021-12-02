import { Routes, Route } from 'react-router-dom';

// import MovieDetails from '../components/MovieDetails';
import MovieGrid from '../components/MovieGrid';
import NotFound from '../components/NotFound';

const CustomSwitch = () => (
  <>
    <Routes>
      <Route path='/' element={<MovieGrid />}>
        {/* <Route path='/category/:cid'>
        <MovieGrid />
      </Route> */}
        {/* <Route path='/movie/:mid'>
        <MovieDetails />
      </Route> */}
      </Route>
      <Route path='/notfound' element={<NotFound />}></Route>

      {/* <Route exact path='/notfound'>
        <NotFound />
      </Route> */}
      {/* Default route */}
      {/* <Route path='/'>
        <Route to='/notfound' />
      </Route> */}
    </Routes>
  </>
);

export default CustomSwitch;
