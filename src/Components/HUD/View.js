import React, { Component } from 'react';
import AboutMe from "Components/AboutMe/AboutMe";
import NavigationArrows, { NavigationDirection } from "Components/HUD/NavigationArrows";


class View extends Component {
    constructor(props) {
        super(props);

        this.handleViewClick = this.handleViewClick.bind(this);
        this.handleNavigationArrowClick = this.handleNavigationArrowClick.bind(this);
        this.getViewComponent = this.getViewComponent.bind(this);
        this.getArrowsToShow = this.getArrowsToShow.bind(this);

        this.slide = React.createRef();
    }

    handleViewClick(event) {
        this.props.handleViewClick(this.props.view.position);
    }

    handleNavigationArrowClick(direction) {
        let newPosition = {...this.props.view.position};
        if (direction === NavigationDirection.left) {
            newPosition.x -= 1;
        } else if (direction === NavigationDirection.right) {
            newPosition.x += 1;
        } else if (direction === NavigationDirection.bottom) {
            newPosition.y += 1;
        } else if (direction === NavigationDirection.top) {
            newPosition.y -= 1;
        }
        this.props.handleViewClick(newPosition);
    }

    getViewComponent() {
        if (this.props.view.title === "About Me") {
            return <AboutMe />
        }
    }

    getArrowsToShow() {
        let arrowsToShow = [{}];
        if (this.props.view.title === "About Me") {
            arrowsToShow = [
                {
                    title: "Hobbies and Interests",
                    direction: NavigationDirection.left
                },
                {
                    title: "Work Experience",
                    direction: NavigationDirection.right
                },
                {
                    title: "Skills",
                    direction: NavigationDirection.bottom
                }
            ]
        } else if (this.props.view.title === "Work Experience") {
            arrowsToShow = [
                {
                    title: "About Me",
                    direction: NavigationDirection.left
                }
            ]
        } else if (this.props.view.title === "Hobbies and Interests") {
            arrowsToShow = [
                {
                    title: "About Me",
                    direction: NavigationDirection.right
                }
            ]
        } else if (this.props.view.title === "Skills") {
            arrowsToShow = [
                {
                    title: "About Me",
                    direction: NavigationDirection.top
                }
            ]
        }
        return arrowsToShow;
    }

    render() {
        const { position } = this.props.view;
        const currentPosition = this.props.currentPosition;

        let classNames = "view glass-effect";
        if (currentPosition.x === position.x && currentPosition.y === position.y) {
            classNames += ' view--current';
        } else if (currentPosition.x - 1 === position.x) {
            classNames += ' view--left';
        } else if (currentPosition.x + 1 === position.x) {
            classNames += ' view--right';
        } else if (currentPosition.x === 0 && currentPosition.y - 1 === position.y) {
            classNames += ' view--top';
        } else if (currentPosition.x === 0 && currentPosition.y + 1 === position.y) {
            classNames += ' view--bottom';
        }

        const navigationArrowsAnimation = "fade-in-slow";

        return (
            <div className={classNames} onClick={this.handleViewClick}>
                <div className={`blur`}></div>
                <NavigationArrows 
                    animation={navigationArrowsAnimation} 
                    arrowsToShow={this.getArrowsToShow()} 
                    handleNavigationArrowClick={this.handleNavigationArrowClick}
                />
                <div>
                    {this.getViewComponent()}
                </div>
            </div>
        )
    }
}


export default View;