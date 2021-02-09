import React, { Component } from "react";
import under_construction from "Assets/Images/under_construction.png";


class Hobbies extends Component {

    render() {
        return (
            <div className={`hobbies-root`}>
                <h1 className={`view-title`}>Hobbies and Interests</h1>
                <img className={`under-construction-image`} src={under_construction} />
            </div>
        )
    }
}


export default Hobbies;