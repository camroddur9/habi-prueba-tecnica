import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {configureStore} from './redux/store'

import App from './App';

import './styles/style.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={configureStore()}>
      <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
