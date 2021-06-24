import React, { Component } from "react";
import MainContainer from 'containers/desktop/main';
import MainContainerMobile from 'containers/mobile/main';
// Stylesheet Imports
import "assets/css/index.scss";
import "assets/css/layout.scss";


class App extends Component {
    render() {
        let windowWidth = window.innerWidth;
        return (
            <div id="app-container">
                {/* {windowWidth > 768 ? 
                    <MainContainer />
                    :
                    <MainContainerMobile />
                } */}
                <MainContainer />
            </div>
        )
    }
}


export default App;