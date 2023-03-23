/* globals React */
import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from "react-dom/client";
import EmployeeDirectory from "./EmployeeDirectory.jsx";

// ReactDOM.render(<EmployeeDirectory />, document.getElementById('contents'));

const root = ReactDOM.createRoot(document.getElementById("contents"));
root.render(
    <React.StrictMode>
        <EmployeeDirectory />
    </React.StrictMode>
);

if (module.hot) {
    module.hot.accept();
}