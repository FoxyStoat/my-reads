import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';


// react-router-dom will listen to changes in the url
ReactDOM.render(
  <BrowserRouter><App /></BrowserRouter>,
 document.getElementById('root')
 )
