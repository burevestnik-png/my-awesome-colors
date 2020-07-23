import React from 'react';

import './Color.css';

import StarRating from "../StarRating/StarRating";

const Color = ({title, color, rating = 0, onRate, onRemove}) =>
    <section className="Color">
            <h1>{title}</h1>
            <button onClick={onRemove}>X</button>
            <div className="color"
                 style={{backgroundColor: color}}>
            </div>
            <div>
                    <StarRating starsSelected={rating}
                                onRate={onRate} />
            </div>
    </section>;

export default Color;
