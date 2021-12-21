import { Switch, Route, Redirect } from 'react-router-dom';

import MovieDetails from '../components/MovieDetails';
import MovieGrid from '../components/MovieGrid';
import NotFound from '../components/NotFound';

const CustomSwitch = () => {
  return (
    <Switch>
      <Route exact path='/ghibli-viewer/'>
        <MovieGrid />
      </Route>

      <Route path='/ghibli-viewer/category/:cid'>
        <MovieGrid />
      </Route>

      <Route path='/ghibli-viewer/search/:keyword'>
        <MovieGrid />
      </Route>

      <Route path='/ghibli-viewer/search'>
        <Redirect to='/ghibli-viewer' />
      </Route>

      <Route path='/ghibli-viewer/movie/:mid'>
        <MovieDetails />
      </Route>

      <Route exact path='/ghibli-viewer/notfound'>
        <NotFound />
      </Route>

      <Route path='/ghibli-viewer/'>
        <Redirect to='/ghibli-viewer/notfound' />
      </Route>
    </Switch>
  );
};

export default CustomSwitch;
