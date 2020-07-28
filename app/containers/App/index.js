/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from './routes'
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

export default function App() {
  const showRoute= (routes) =>{
    let xhtml = null;
    if(routes.length > 0 ){
      xhtml = routes.map((route, index)=> {
        return (
          <Route key={index} exact={route.exact} path={route.path} component={route.main}/>
        );
      });
    }
    return <Switch>{xhtml}</Switch>;
  }
  
  return (
    <div>
      <Footer />
      <Switch>
        {showRoute(routes)}
      </Switch>
      <GlobalStyle />
    </div>
  );
}
