import React, { Component } from "react";
import HUD from "Components/HUD/HUD";
// Stylesheet Imports
import "Assets/CSS/index.scss";
import "Assets/CSS/HUD.scss";
import "Assets/CSS/AboutMe.scss";
import "Assets/CSS/WorkExperience.scss";


class App extends Component {
    render() {
        return (
            <div id="app-container">
                <HUD />
            </div>
        )
    }
}


export default App;