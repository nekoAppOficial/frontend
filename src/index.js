import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App page={`dashboard`} />} />
        <Route exact path="/login" element={<App page={`login`} />} />
        <Route exact path="/register" element={<App page={`register`} />} />
        <Route exact path="/channels/@me" element={<App page={`dashboard`} 
        chat={false}
        />} />
        <Route exact path="/channels/@me/friends/add" element={<App page={`dashboard`} 
        chat={false}
        />} />
        <Route exact path="/channels/@me/:chatID" element={<App page={`dashboard`}
        chat={true}
        />} />
      </Routes>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
