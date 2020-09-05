import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AppPresenter from './AppPresenter';
import { LOGOUT_REQUEST } from '../../redux/types';

const AppContainer = () => {
  const { isAuthenticated, user } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch({
      type: LOGOUT_REQUEST,
    });
  }, [dispatch]);

  return <AppPresenter isLoggedIn={isAuthenticated} user={user} onLogout={onLogout} />;
};

export default AppContainer;
