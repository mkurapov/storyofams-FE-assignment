import React,  {memo} from 'react';
import { Switch, Route, Link, NavLink, Redirect } from 'react-router-dom';

import Search from './Search';
import Favourites from './Favourites';

// It would be better to pull out the routes into an object, then loop over them
const Main = memo(() => {
  return (
    <React.Fragment>
        <Switch>
          <Route exact path='/'> 
            <Search></Search> 
          </Route>
          <Route exact path='/favourites'>
            <Favourites></Favourites>
          </Route>
        </Switch>
      <div className="bottom-nav">
          <NavLink to="/" exact className="link col-6" activeClassName="link--selected">
              <div>
                <div><svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11.1364" cy="11.1364" r="9.13636" stroke="#1B3CEA" strokeWidth="4"/><path d="M18.5606 18.5606L24.5 24.5" stroke="#1B3CEA" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
                <span>Search</span>
              </div>
          </NavLink>
        
          <NavLink to="/favourites" className="link col-6" activeClassName="link--selected">
              <div>
                <div><svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.1083 12.7572L23.1082 12.7574L13.8756 22.6067C13.384 23.1311 12.6154 23.1311 12.1238 22.6067L2.89124 12.7574C0.369587 10.0673 0.369587 5.68068 2.89124 2.9906C5.37837 0.337332 9.38237 0.337332 11.8695 2.9906L12.2701 3.41796L12.9997 4.19628L13.7293 3.41796L14.1297 2.9908L14.1299 2.99063C15.332 1.70763 16.9483 1 18.619 1C20.2896 1 21.9059 1.70756 23.108 2.99045L23.1083 2.99074C24.3129 4.27529 25 6.03089 25 7.874C25 9.71721 24.3128 11.4729 23.1083 12.7572Z" stroke="#1F2933" stroke-width="2"/></svg></div>
                <span>Favourites</span>
              </div>
          </NavLink>
      </div>
    </React.Fragment>
  );
})

export default Main;