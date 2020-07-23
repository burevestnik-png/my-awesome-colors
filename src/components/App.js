import React, {Component} from 'react';
import {v4} from "uuid";

import './App.css';
import Main from "./main/Main";
import Header from "./header/Header";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            colors: []
        }

        this.addColor = this.addColor.bind(this);
    }

    addColor(title, color) {
        const colors = [
            ...this.state.colors,
            {
                id: v4(),
                title,
                color,
                rating: 0
            }
        ]

        this.setState({
            colors
        })
    }

    render() {
        const {addColor} = this;

        return (
            <div className="App">
                <Header onNewColor={addColor}/>
                <Main/>
            </div>
        );
    }
}

export default App;