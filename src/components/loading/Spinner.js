import React from 'react';
import './styles/Spinner.css';

function Spinner() {
    return (
        <div className="spinner-overlay">
            <div className="spinner"></div>
        </div>
    );
}

export default Spinner;