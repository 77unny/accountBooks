import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './store';
import App from './components/App';
import GlobalStyle from './styles/GlobalStyle';
import { USER_LOADING_REQUEST } from './redux/types';

const loadUser = () => {
  console.log(store.getState().auth);
  try {
    store.dispatch({
      type: USER_LOADING_REQUEST,
      payload: localStorage.getItem('token'),
    });
  } catch (e) {
    console.log(e);
  }
};

loadUser();

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
