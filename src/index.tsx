import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';

// @ts-ignore
import App from './App.tsx';
// @ts-ignore
import reportWebVitals from './reportWebVitals.tsx';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
