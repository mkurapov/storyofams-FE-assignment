import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Search from './Search';
import Favourites from './Favourites';
import { ReactComponent } from '*.svg';

const Main = () => {
  return (
    <React.Fragment>

    <Switch>
      <Route exact path='/' component={Search}></Route>
      <Route exact path='/favourites' component={Favourites}></Route>
    </Switch>
    <div>
    <Link to="/">
      <button>
        Search
      </button>
    </Link>
    <Link to="/favourites">
      <button>
        Favourites
      </button>
    </Link>
    </div>
    </React.Fragment>
  );
}

export default Main;