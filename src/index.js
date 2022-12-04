import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './vendor/normalize.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
  apiKey: "AIzaSyCLBYkYuG7kvat9Ld4v9_rddRUsqXBCmpk",
  authDomain: "unleash-16eb3.firebaseapp.com",
  databaseURL: "https://unleash-16eb3-default-rtdb.firebaseio.com",
  projectId: "unleash-16eb3",
  storageBucket: "unleash-16eb3.appspot.com",
  messagingSenderId: "180420289215",
  appId: "1:180420289215:web:c00209f8b824cb3d669c0a",
  measurementId: "G-0CQ5X1VCWC"
};



const Context = createContext();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={'String'}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
