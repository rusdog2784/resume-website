import React, { Component } from "react";
import Home from "./Home";
import Grid from "./testing_stuff/Grid";


class App extends Component {
    render() {
        return (
            <div id="app-container">
                <div className={`background-img`}></div>
                <Grid />
            </div>
        )
    }
}


export default App;