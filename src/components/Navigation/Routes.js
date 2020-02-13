import React from 'react';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import Home from '../home';
import NowPlaying from '../Movies/NowPlaying';
import TopRated from '../Movies/TopRated';
import Popular from '../Movies/popular';
import Search from '../Search/searchMovies';
import Movie from '../Movies/Movie';

const Routes = () => (
<Router>
<Switch>
    <Route exact path='/' component={Home} />
    <Route path="/now_playing" component={NowPlaying}/>
    <Route path="/top_rated" component={TopRated}/>
    <Route  path="/popular" component={Popular}/>
    <Route  path="/search" component={Search}/>
    <Route path="/movie/:id" component={Movie}/>
</Switch>
  </Router>

)
export default Routes;