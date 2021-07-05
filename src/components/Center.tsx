import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Survey, Board } from './routes/index';

const Center = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/survey' component={Survey} />
        <Route path='/board' component={Board} />
      </Switch>
    </div>
  );
};

export default Center;
