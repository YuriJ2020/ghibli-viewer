import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './index.css';
import { store } from './store/store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
