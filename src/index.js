import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { SMSContextProvider } from './context/SMSContext';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <SMSContextProvider>
      <App />
    </SMSContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);