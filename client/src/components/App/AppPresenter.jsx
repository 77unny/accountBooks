import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from '../../routes/Home';
import Login from '../../routes/Login';

const LoggedOutRouters = () => (
  <Switch>
    <Route path={'/'} exact component={Login} />
    <Redirect from={'*'} to={'/'} />
  </Switch>
);

const LoggedInRouters = () => (
  <Switch>
    <Route path={'/'} exact component={Home} />
    <Redirect from={'*'} to={'/'} />
  </Switch>
);

const AppPresenter = ({ isLoggedIn }) => {
  return <BrowserRouter>{isLoggedIn ? <LoggedInRouters /> : <LoggedOutRouters />}</BrowserRouter>;
};

export default AppPresenter;

AppPresenter.propTypes = {
  isLoggedIn: PropTypes.bool,
};
