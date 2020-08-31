import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './store';
import App from './components/App';
import GlobalStyle from './styles/GlobalStyle';

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
