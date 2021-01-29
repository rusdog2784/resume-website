import React, { Component } from "react";
import Home from "./Home";
import Slides from "./Slides";


class App extends Component {
    render() {
        return (
            <div id="app-container">
                <Slides />
            </div>
        )
    }
}


export default App;