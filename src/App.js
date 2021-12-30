import React, { Component } from "react";
import HUD from "Components/HUD/HUD";
import MobileMain from 'Components/Mobile/MobileMain';
// Stylesheet Imports
import "Assets/CSS/index.scss";
import "Assets/CSS/HUD.scss";
import "Assets/CSS/AboutMe.scss";
import "Assets/CSS/WorkExperience.scss";


class App extends Component {
    render() {
        let windowWidth = window.innerWidth;
        return (
            <div id="app-container">
                {windowWidth > 768 ? 
                    <HUD />
                    :
                    <MobileMain />
                }
            </div>
        )
    }
}


export default App;


// EOF
