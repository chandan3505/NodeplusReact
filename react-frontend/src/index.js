// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const root = document.getElementById('root');

// Instead of ReactDOM.render, use createRoot().render
const reactRoot = ReactDOM.createRoot(root);
reactRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
