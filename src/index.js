import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./App.css";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

/* Redux */
import { Provider } from 'react-redux';
import { store } from '../src/Redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
