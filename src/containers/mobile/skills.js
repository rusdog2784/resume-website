import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    root: {

    }
}


class SkillsContainerMobile extends Component {
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


SkillsContainerMobile.propTypes = {
    classes: PropTypes.object.isRequired
}
export default withStyles(styles)(SkillsContainerMobile);