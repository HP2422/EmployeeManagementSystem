import React from 'react';
import { Switch, Link, Routes, Route, Redirect, Navigate } from 'react-router-dom';
import EmployeeDirectory from './EmployeeDirectory.jsx';
import EmployeeReport from './EmployeeReport.jsx';
import EmployeeEdit from './EmployeeEdit.jsx';


const NotFound = () => <h1>Page Not Found</h1>;
export default function Contents() {
    console.log("CONTENTS");
    return (
        <Routes>
            {/* <Navigate exact from="/" to="/employeeDirectory" /> */}
            <Route path="/employeeDirectory" element={<EmployeeDirectory />}> </Route>
            <Route path="/employeeEdit/:id" element={<EmployeeEdit />}> </Route>
            <Route path="/employeeReport" element={<EmployeeReport />}> </Route>
            <Route component={NotFound}> </Route>
        </Routes>
    );
}