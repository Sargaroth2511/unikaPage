
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.scss';
import App from './App';


console.log(process.env.REACT_APP_SPACE_ID)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


