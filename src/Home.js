import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import ProfileWidget from "./home/ProfileWidget";
import LocationWidget from "./home/LocationWidget";
import DescriptionWidget from "./home/DescriptionWidget";
import ExportResumeWidget from "./home/ExportResumeWidget";
import LinkedInWidget from "./home/LinkedInWidget";
import ContactMeWidget from "./home/ContactMeWidget";
import GitHubWidget from "./home/GitHubWidget";
import Loading from "./home/Loading";
import NavigationArrows from "./home/NavigationArrows";
import "./home.css";


const animate = true;
const wait = (delay, ...args) => new Promise(resolve => setTimeout(resolve, delay, ...args));


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLoadingWidget: true,

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

            showNavigationArrows: false,
            navigationArrowsAnimation: ""
        };
    }

    componentDidMount() {
        // this.startInitialAnimationSequence();
    }

    startInitialAnimationSequence = async() => {
        console.log("Starting the animations...");
        // No longer loading, so remove that component.
        this.setState({
            showLoadingWidget: false
        });
        if (animate) {
            await wait(100);
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
            // await wait(1000);
            // await this.expandWidgets();
            await wait(1500);
            await this.showNavigationArrows();
            await wait(100);
            await this.collapseWidgets();
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
            navigationArrowsAnimation: "fade-in-slow"
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

    showNavigationArrows = async() => {
        await wait(100);
        this.setState({
            showNavigationArrows: true,
            navigationArrowsAnimation: "fade-in-slow"
        });
    }

    render() {
        const { 
            showLoadingWidget,

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

            showNavigationArrows,
            navigationArrowsAnimation
        } = this.state;

        return (
            <div id="home-container">
                {showNavigationArrows &&
                    <NavigationArrows animation={navigationArrowsAnimation}/>
                }

                {showLoadingWidget &&
                    <Paper elevation={3} className={`loading-widget`}>
                        <Typography variant="h4">Loading...</Typography>
                        <Loading start={this.startInitialAnimationSequence}/>
                    </Paper>
                }
                
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
                        <ExportResumeWidget />
                    </div>
                }

                {showLinkedInWidget &&
                    <div className={`bottom-widget ${linkedInWidgetAnimation}`}>
                        <LinkedInWidget />
                    </div>
                }

                {showGitHubWidget &&
                    <div className={`bottom-widget ${gitHubWidgetAnimation}`}>
                        <GitHubWidget />
                    </div>
                }

                {showContactMeWidget &&
                    <div className={`bottom-widget ${contactMeWidgetAnimation}`}>
                        <ContactMeWidget />
                    </div>
                }
            </div>
        )
    }
}


export default Home;