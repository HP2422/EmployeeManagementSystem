import React from 'react';
import { useParams } from "react-router-dom";

export default function employeeDelete({ match }) {
    // const { id } = match.params;
    const { id } = useParams();
    return (
        <h2>{`This is a placeholder for Deleting issue ${id}`}</h2>
    );
}