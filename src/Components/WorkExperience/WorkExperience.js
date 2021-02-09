import React, { Component } from "react";
import under_construction from "Assets/Images/under_construction.png";

// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_timeline

class WorkExperience extends Component {

    render() {
        return (
            <div className={`work-experience-root`}>
                <h1 className={`view-title`}>Work Experience</h1>
                <img className={`under-construction-image`} src={under_construction} />
            </div>
        )
    }
}


export default WorkExperience;