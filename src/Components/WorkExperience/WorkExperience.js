import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import JobsTimeline from "components/WorkExperience/JobsTimeline";


const styles = {
    root: {
        position: "absolute",
        top: "0px",
        left: "50px",
        right: "50px",
        height: "100%",
        display: "flex",
        justifyContent: "center"
    },
    customTimelineWrapper: {
        width: "100%",
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
                <div className={classes.customTimelineWrapper}>
                    <JobsTimeline />
                </div>
            </div>
        )
    }
}


WorkExperience.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(WorkExperience);
