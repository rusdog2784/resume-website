import React, { Component } from "react";
import under_construction from "Assets/Images/under_construction.png";


class Skills extends Component {

    render() {
        return (
            <div className={`skills-root`}>
                <h1 className={`view-title`}>Skills</h1>
                <img className={`under-construction-image`} src={under_construction} />
            </div>
        )
    }
}


export default Skills;