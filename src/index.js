import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateProvider } from './components/StateProvider';
import reducer, { initialSate } from './reducer';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialSate={initialSate} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
