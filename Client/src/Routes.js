import React from 'react';
import { Router, Switch, Route } from "react-router-dom";
import App from './App';
import CharacterPage from './CharacterPage';
import Favorites from './Favorites';

import history from './history';

export default function Routes() {
  return (
    <Router history={history}>
        <Switch>
      <Route path="/" exact component={App} />
      <Route path="/CharacterPage/:id" component={CharacterPage} />
      <Route path="/Favorites/" component={Favorites}/>
    </Switch>
</Router>
  );
}