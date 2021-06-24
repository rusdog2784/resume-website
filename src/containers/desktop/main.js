import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AboutMeContainer from 'containers/desktop/aboutMe';
import WorkExperienceContainer from 'containers/desktop/workExperience';
import SkillsContainer from 'containers/desktop/skills';
import HobbiesAndInterestsContainer from 'containers/desktop/hobbiesAndInterests';


const styles = {
    root: {
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
}


class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPosition: {
                x: 0,
                y: 0,
            },
            containers: [
                {
                    container: HobbiesAndInterestsContainer,
                    title: "Hobbies and Interests",
                    position: {
                        x: -1,
                        y: 0
                    }
                },
                {
                    container: AboutMeContainer,
                    title: "About Me",
                    position: {
                        x: 0,
                        y: 0
                    }
                },
                {
                    container: WorkExperienceContainer,
                    title: "Work Experience",
                    position: {
                        x: 1,
                        y: 0
                    }
                },
                {
                    container: SkillsContainer,
                    title: "Skills",
                    position: {
                        x: 0,
                        y: 1
                    }
                },
            ]
        }
        this.handleResumeSectionClick = this.handleResumeSectionClick.bind(this);
    }

    handleResumeSectionClick(position) {
        if (this.state.currentPosition.x !== position.x || this.state.currentPosition.y !== position.y) {
            this.setState({ currentPosition: position });
        }
    }

    render() {
        const {classes } = this.props;
        const { currentPosition, containers } = this.state;

        const translateX = (currentPosition.x * (100 / 3) * -1);
        const translateY = (currentPosition.y * (100 / 2) * -1);
        const resumeSectionsWrapperTransform = {
            'transform': `translateX(${translateX}%) translateY(${translateY}%)`
        }
        
        return (
            <div className={classes.root}>
                <div className={`resume-sections-wrapper`} style={resumeSectionsWrapperTransform}>
                    {containers.map((container) => {
                        return <
                            container.container 
                            title={container.title}
                            currentPosition={currentPosition}
                            handleResumeSectionClick={this.handleResumeSectionClick}
                            key={container.title}
                        />
                    })}
                </div>
            </div>
        )
    }
}


MainContainer.propTypes = {
    classes: PropTypes.object.isRequired
}
export default withStyles(styles)(MainContainer);