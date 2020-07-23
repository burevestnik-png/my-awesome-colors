import React from 'react';
import AddColorForm from "../addColorForm/AddColorForm";
import ParallaxWrapper from "../parallaxWrappe/ParallaxWrapper";

import './Header.css';

const Header = ({onNewColor}) => {
    return (
        <div className="Header">
            <AddColorForm onNewColor={onNewColor}/>
            <ParallaxWrapper/>
        </div>
    );
};

export default Header;
