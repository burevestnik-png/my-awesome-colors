import React from 'react';

import './Color.css';

import StarRating from "../StarRating/StarRating";

const Color = ({title, color, rating = 0, onRate, onRemove}) =>
    <section className="Color">
        <div className="card-front"
             style={{backgroundColor: color}}>
        </div>
        <div className="card-back">
            <h1>{title}</h1>
            <span>Star it:</span>
            <StarRating starsSelected={rating}
                        onRate={onRate}/>
            <button onClick={onRemove}>X</button>
        </div>
    </section>

export default Color;
