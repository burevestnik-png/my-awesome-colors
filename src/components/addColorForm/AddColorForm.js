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
            <div className="form-info">
                <h2 className="animation a1">Welcome</h2>
                <h4 className="animation a2">Just add your favourite color</h4>
            </div>
            <form onSubmit={submitAction}>
                <input type="text"
                       ref={instance => _title = instance}
                       placeholder="color title..." required/>

                <input type="color"
                       ref={instance => _color = instance} required/>

                <button>Add</button>
            </form>
        </div>
    );
};

export default AddColorForm;
