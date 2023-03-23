import React from 'react';
import Contents from './Contents.jsx';
function NavBar() {
    return (
        <nav>
            <a href="/">Home</a>
            {' | '}
            <a href="/#/employeeDirectory">Employee List</a>
            {' | '}
            <a href="/#/employeeReport">Report</a>
        </nav>
    );
}
export default function Page() {
    console.log("DFGHJKDFGHJK");
    return (
        <div>
            <NavBar />
            <Contents />
        </div>
    );
}