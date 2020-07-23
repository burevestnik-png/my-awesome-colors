import React from 'react';
import './Star.css';

const Star = ({selected = false, onClick}) =>
    <div className={(selected) ? "Star selected" : "Star"}
         onClick={onClick}>
    </div>

export default Star;
