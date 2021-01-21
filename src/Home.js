import React, { Component } from "react";
import ProfileWidget from "./home/ProfileWidget";
import LocationWidget from "./home/LocationWidget";
import DescriptionWidget from "./home/DescriptionWidget";
import ExportResumeWidget from "./home/ExportResumeWidget";
import LinkedInWidget from "./home/LinkedInWidget";
import ContactMeWidget from "./home/ContactMeWidget";
import GitHubWidget from "./home/GitHubWidget";
import "./home.css";


class Home extends Component {
    render() {
        return (
            <div className="glass">
                <div id="home-container">
                    <div id="first-row">
                        <ProfileWidget />
                        <LocationWidget />
                    </div>
                    <div id="second-row">
                        <DescriptionWidget />
                    </div>
                    <div id="third-row">
                        <ExportResumeWidget />
                        <LinkedInWidget />
                        <GitHubWidget />
                        <ContactMeWidget />
                    </div>
                </div>
            </div>
        )
    }
}


export default Home;