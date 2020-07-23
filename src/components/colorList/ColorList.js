import React from 'react';

import './ColorList.css';

import Color from "../color/Color";

const ColorList = ({colors = [], onRate, onRemove}) =>
    <div className="ColorList">
        {
            (colors.length === 0) ?
                <NoColors /> :
                colors.map(color =>
                    <Color
                        key={color.id}
                        {...color}
                        onRate={(rating) => onRate(color.id, rating)}
                        onRemove={() => onRemove(color.id)}
                    />
                )
        }
    </div>;

export default ColorList;

const NoColors = () =>
    <div>
        <p>No colors listed. (Just add it)</p>
    </div>
