import React, { Component } from "react";
import ProfileWidget from "Components/AboutMe/ProfileWidget";
import LocationWidget from "Components/AboutMe/LocationWidget";
import DescriptionWidget from "Components/AboutMe/DescriptionWidget";
import FabWidget, { FabWidgetTitles } from "Components/AboutMe/FabWidget";


const animate = true;
const wait = (delay, ...args) => new Promise(resolve => setTimeout(resolve, delay, ...args));


class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showProfileWidget: false,
            profileWidgetAnimation: "",
            expandProfileWidget: false,

            showLocationWidget: false,
            locationWidgetAnimation: "",
            expandLocationWidget: false,

            showExportResumeWidget: false,
            exportResumeWidgetAnimation: "",

            showLinkedInWidget: false,
            linkedInWidgetAnimation: "",

            showGitHubWidget: false,
            gitHubWidgetAnimation: "",

            showContactMeWidget: false,
            contactMeWidgetAnimation: "",

            showDescriptionWidget: false,
            descriptionWidgetAnimation: ""
        };
    }

    componentDidMount() {
        this.startInitialAnimationSequence();
    }

    startInitialAnimationSequence = async() => {
        console.log("Starting the animations...");
        if (animate) {
            await wait(1000);
            await this.startProfileWidgetAnimation();
            await wait(100);
            await this.startLocationWidgetAnimation();
            await wait(500);
            await this.expandWidgets();
            await wait(100);
            await this.startExportResumeWidgetAnimation();
            await wait(100);
            await this.startLinkedInWidgetAnimation();
            await wait(100);
            await this.startGitHubWidgetAnimation();
            await wait(100);
            await this.startContactMeWidgetAnimation();
            await wait(1500);
            await this.collapseWidgets();
            await wait(100);
            await this.startDescriptionWidgetAnimation();
        } else {
            this.showAllWidgets();
        }
    };

    showAllWidgets = () => {
        this.setState({
            showProfileWidget: true,
            profileWidgetAnimation: "move-profile-widget",
            showLocationWidget: true,
            locationWidgetAnimation: "move-location-widget",
            showExportResumeWidget: true,
            exportResumeWidgetAnimation: "move-export-resume-widget",
            showLinkedInWidget: true,
            linkedInWidgetAnimation: "move-linked-in-widget",
            showGitHubWidget: true,
            gitHubWidgetAnimation: "move-git-hub-widget",
            showContactMeWidget: true,
            contactMeWidgetAnimation: "move-contact-me-widget",
            showNavigationArrows: true,
            navigationArrowsAnimation: "fade-in-slow",
            showDescriptionWidget: true,
            descriptionWidgetAnimation: "fade-in-slow"
        });
    }

    startProfileWidgetAnimation = async() => {
        await wait(250);
        this.setState({
            showProfileWidget: true,
            profileWidgetAnimation: "fade-in"
        });
        await wait(500);
        this.setState({ profileWidgetAnimation: "move-profile-widget" });
    }

    startLocationWidgetAnimation = async() => {
        await wait(250);
        this.setState({
            showLocationWidget: true,
            locationWidgetAnimation: "fade-in"
        });
        await wait(500);
        this.setState({ locationWidgetAnimation: "move-location-widget" });
    }

    expandWidgets = async() => {
        await wait(250);
        this.setState({
            expandProfileWidget: true,
            expandLocationWidget: true
        });
    }

    collapseWidgets = async() => {
        await wait(250);
        this.setState({
            expandProfileWidget: false,
            expandLocationWidget: false
        });
    }

    startExportResumeWidgetAnimation = async() => {
        await wait(250);
        this.setState({
            showExportResumeWidget: true,
            exportResumeWidgetAnimation: "fade-in"
        });
        await wait(250);
        this.setState({
            exportResumeWidgetAnimation: "move-export-resume-widget"
        });
    }

    startLinkedInWidgetAnimation = async() => {
        await wait(100);
        this.setState({
            showLinkedInWidget: true,
            linkedInWidgetAnimation: "fade-in"
        });
        await wait(250);
        this.setState({
            linkedInWidgetAnimation: "move-linked-in-widget"
        });
    }

    startGitHubWidgetAnimation = async() => {
        await wait(100);
        this.setState({
            showGitHubWidget: true,
            gitHubWidgetAnimation: "fade-in"
        });
        await wait(250);
        this.setState({
            gitHubWidgetAnimation: "move-git-hub-widget"
        });
    }

    startContactMeWidgetAnimation = async() => {
        await wait(100);
        this.setState({
            showContactMeWidget: true,
            contactMeWidgetAnimation: "fade-in"
        });
        await wait(250);
        this.setState({
            contactMeWidgetAnimation: "move-contact-me-widget"
        });
    }

    startDescriptionWidgetAnimation = async() => {
        await wait(100);
        this.setState({
            showDescriptionWidget: true,
            descriptionWidgetAnimation: "fade-in-slow"
        });
    }

    render() {
        const { 
            showProfileWidget, 
            profileWidgetAnimation,
            expandProfileWidget,

            showLocationWidget,
            locationWidgetAnimation,
            expandLocationWidget,

            showExportResumeWidget,
            exportResumeWidgetAnimation,

            showLinkedInWidget,
            linkedInWidgetAnimation,

            showGitHubWidget,
            gitHubWidgetAnimation,

            showContactMeWidget,
            contactMeWidgetAnimation,

            showDescriptionWidget,
            descriptionWidgetAnimation
        } = this.state;

        return (
            <div id="home-container">
                
                {showProfileWidget &&
                    <div className={`top-left-widget ${profileWidgetAnimation}`}>
                        <ProfileWidget expand={expandProfileWidget} />
                    </div>
                }

                {showLocationWidget && 
                    <div className={`top-right-widget ${locationWidgetAnimation}`}>
                        <LocationWidget expand={expandLocationWidget} />
                    </div>
                }

                {showExportResumeWidget &&
                    <div className={`bottom-widget ${exportResumeWidgetAnimation}`}>
                        <FabWidget title={FabWidgetTitles.downloadCV} />
                    </div>
                }

                {showLinkedInWidget &&
                    <div className={`bottom-widget ${linkedInWidgetAnimation}`}>
                        <FabWidget title={FabWidgetTitles.linkedIn} />
                    </div>
                }

                {showGitHubWidget &&
                    <div className={`bottom-widget ${gitHubWidgetAnimation}`}>
                        <FabWidget title={FabWidgetTitles.gitHub} />
                    </div>
                }

                {showContactMeWidget &&
                    <div className={`bottom-widget ${contactMeWidgetAnimation}`}>
                        <FabWidget title={FabWidgetTitles.contactMe} />
                    </div>
                }

                {showDescriptionWidget && 
                    <div className={`middle-widget ${descriptionWidgetAnimation}`}>
                        <DescriptionWidget />
                    </div>
                }
                
            </div>
        )
    }
}


export default AboutMe;