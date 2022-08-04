import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import Button from './components/button';
import { Provider } from 'react-redux'
import store from './store';

// ReactDOM.render(
//     <Button/>,
//   document.getElementById('root')
// );

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <Button/>
  </Provider>
);


