import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExperienceTimeline from "Components/WorkExperience/ExperienceTimeline";
import under_construction from "Assets/Images/under_construction.png";
import CustomTimeline from "Components/WorkExperience/CustomTimeline";


const styles = {
    root: {
        position: "absolute",
        top: "0px",
        left: "0px",
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        zIndex: "-1"
    },
    customTimelineWrapper: {
        width: "90%",
        paddingTop: "24px",
        paddingLeft: "32px",
        paddingBottom: "84px"
    },
}


class WorkExperience extends Component {

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <h1 className={`view-title`}>Work Experience</h1>
                {/* <img className={`under-construction-image`} src={under_construction} /> */}
                {/* <ExperienceTimeline /> */}

                <div className={classes.customTimelineWrapper}>
                    <CustomTimeline />
                </div>
            </div>
        )
    }
}


WorkExperience.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(WorkExperience);
