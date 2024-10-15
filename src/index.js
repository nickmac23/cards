import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { renderToStaticMarkup } from 'react-dom/server';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// const html = renderToStaticMarkup(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
//
// const index = ```
//   <!DOCTYPE html>
//   <html lang="en">
//     <head>
//       <meta charset="utf-8" />
//       <meta name="viewport" content="width=device-width, initial-scale=1" />
//       <meta name="theme-color" content="#000000" />
//       <title>React App</title>
//       <style>
//        ${}
//       </style>
//     </head>
//     <body>
//       ${}
//     </body>
//   </html>
// ```
