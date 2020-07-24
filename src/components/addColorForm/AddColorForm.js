import React from 'react';
import {Link} from 'react-scroll';

import './AddColorForm.css';
import arrow from '../../resourses/svg/arrow_to_bottom.svg';

const AddColorForm = ({onNewColor}) => {
    let _title, _color;
    const submitAction = event => {
        event.preventDefault();

        onNewColor(_title.value, _color.value);
        _title.value = '';
        _color.value = '';
        _title.focus()
    }

    return (
        <div className="AddColorForm">
            <h2 className="animated a1">Welcome</h2>
            <h4 className="animated a2">Just add your favourite color</h4>
            <form onSubmit={submitAction}>
                <input type="text"
                       className="animated a3"
                       ref={instance => _title = instance}
                       placeholder="Color title..." required/>

                <input type="color"
                       className="animated a4"
                       ref={instance => _color = instance} required/>

                <button className="animated a5">ADD</button>
            </form>
            <Link activeClass="active"
                  className="scroll-link"
                  to="color-list"
                  spy={true}
                  smooth={true}
                  duration={500}>
                <ArrowWrapper/>
            </Link>
        </div>
    );
};

export default AddColorForm;

const ArrowWrapper = () =>
    <div className="arrow-wrapper">
        <span className="animated a6">Check out <br/>your library</span>
        <img className="animated a7" src={arrow} alt="Svg"/>
    </div>
