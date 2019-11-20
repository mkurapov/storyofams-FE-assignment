import React,  {memo} from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Search from './Search';
import Favourites from './Favourites';


const Main = memo(() => {
  return (
    <React.Fragment>
      <div>
        <Switch>
          <Route exact path='/'> 
            <Search></Search> 
          </Route>
          <Route exact path='/favourites'>
            <Favourites></Favourites>
          </Route>
        </Switch>
      </div>
      <div className="bottom-nav">
        <Link to="/">
          <button>Search</button>
        </Link>
        <Link to="/favourites">
          <button>Favourites</button>
        </Link>
      </div>
    </React.Fragment>
  );
})

export default Main;