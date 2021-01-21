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
    constructor(props) {
        super(props);
        this.state = {
            showProfileWidget: false,
            profileWidgetAnimation: "",
            expandProfileWidget: false,

            showLocationWidget: false,
            locationWidgetAnimation: "",
            expandLocationWidget: false
        };
    }

    componentDidMount() {
        // this.startInitializationAnimation();
        // this.startLocationWidgetAnimation();
        this.startProfileWidgetAnimation();
    }

    startInitializationAnimation = () => {
        console.log("Starting the animations...");
        // Wait for 1 second before starting the animation flow.
        setTimeout(() => {
            this.startProfileWidgetAnimation();
        }, 1000);
    };

    startProfileWidgetAnimation = () => {
        // Making the ProfileWidget visible in the DOM via a fade in effect.
        this.setState({
            showProfileWidget: true,
            profileWidgetAnimation: "fade-in"
        });
        setTimeout(() => {
            // Expanding out the ProfileWidget text (AFTER 1.0 SECONDS).
            this.setState({ expandProfileWidget: true });
            // Closing the expanded ProfileWidget text  (AFTER 2.0 SECONDS).
            setTimeout(() => {
                this.setState({ expandProfileWidget: false });
                // Moving the ProfileWidget to its place (AFTER 1.0 SECONDS).
                setTimeout(() => {
                    this.setState({ profileWidgetAnimation: "move-profile-widget" });
                    this.startLocationWidgetAnimation()
                }, 500);
            }, 2000);
        }, 1000);
    };

    startLocationWidgetAnimation = () => {
        // Making the LocationWidget visible in the DOM via a fade in effect.
        this.setState({
            showLocationWidget: true,
            locationWidgetAnimation: "fade-in"
        });
        setTimeout(() => {
            // Expanding out the LocationWidget text (AFTER 1.0 SECONDS).
            this.setState({ expandLocationWidget: true });
            // Closing the expanded LocationWidget text  (AFTER 2.0 SECONDS).
            setTimeout(() => {
                this.setState({ expandLocationWidget: false });
                // Moving the LocationWidget to its place (AFTER 1.0 SECONDS).
                setTimeout(() => {
                    this.setState({ locationWidgetAnimation: "move-location-widget" });
                }, 500);
            }, 2000);
        }, 1000);
    };

    render() {
        const { 
            showProfileWidget, 
            profileWidgetAnimation,
            expandProfileWidget,
            showLocationWidget,
            locationWidgetAnimation,
            expandLocationWidget 
        } = this.state;

        return (
            <div className="glass">
                <div id="home-container">
                    <div className={`widget-layer`}>
                        {showProfileWidget &&
                            <div className={`first-widget ${profileWidgetAnimation}`}>
                                <ProfileWidget expand={expandProfileWidget} />
                            </div>
                        }
                    </div>

                    <div className={`widget-layer`}>
                        {showLocationWidget &&
                            <div className={`second-widget ${locationWidgetAnimation}`}>
                                <LocationWidget expand={expandLocationWidget} />
                            </div>
                        }
                    </div>


                    {/* <div id="second-widget">
                        <DescriptionWidget />
                    </div> */}

                    {/* <div id="third-widget">
                        <ExportResumeWidget />
                        <LinkedInWidget />
                        <GitHubWidget />
                        <ContactMeWidget />
                    </div> */}
                </div>
            </div>
        )
    }
}


export default Home;