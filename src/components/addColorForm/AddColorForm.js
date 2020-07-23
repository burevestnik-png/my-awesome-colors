import React from 'react';

import './AddColorForm.css';

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
        </div>
    );
};

export default AddColorForm;
