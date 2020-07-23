import React from 'react';

import './StarRating.css';

import Star from "../star/Star";

const StarRating = ({starsSelected = 0, totalStars = 5, onRate}) =>
    <div className="StarRating">
        {
            [...Array(totalStars)].map((value, index) =>
                <Star key={index}
                      selected={index < starsSelected}
                      onClick={() => onRate(index + 1)}/>
            )
        }
    </div>

export default StarRating;
