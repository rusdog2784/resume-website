import React, { Component } from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";


const styles = {
    root: {

    }
}


class ResumeSectionsContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes } = this.props;

        return (
            <div className={classes.root}>
                
            </div>
        )
    }
}


ResumeSectionsContainer.propTypes = {
    classes: PropTypes.object.isRequired
}
export default withStyles(styles)(ResumeSectionsContainer);