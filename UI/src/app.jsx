/* globals React */
import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from "react-dom/client";
import { render } from "react-dom";
import { HashRouter as Router } from 'react-router-dom';
import Page from './Page.jsx';

// const element = (
//     <React.StrictMode>
//         <Router>
//             <Page />
//         </Router>
//     </React.StrictMode>
// );

// ReactDOM.render(element, document.getElementById('contents'));

const root = ReactDOM.createRoot(document.getElementById("contents"));
root.render(
    <React.StrictMode>
        <Router>
            <Page />
        </Router>
    </React.StrictMode>
);


if (module.hot) {
    module.hot.accept();
}