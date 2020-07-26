import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';

import './index.css';
import App from './components/App';
import {Provider} from "react-redux";

ReactDOM.render(
    <Provider>
        <App/>
    </Provider>,
    document.getElementById('root')
);
