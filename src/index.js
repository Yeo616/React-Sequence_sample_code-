import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DataInput from './routers/DataInput';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store'
import Email from './routers/Email';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider store={store}>
  //   {/* <App /> */}
  // </Provider>
  <BrowserRouter>
  <React.StrictMode>
    <Routes>
      <Route path="/" element = {<Email />}></Route>
      <Route path="/input" element = {<DataInput />}></Route>
    {/* // props */}
    </Routes>
  </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
