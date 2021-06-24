import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    root: {

    }
}


class HobbiesAndInterestsContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes, title } = this.props;

        return (
            <div className={`${classes.root} resume-section-container`}>
                !!! {title} !!!
            </div>
        )
    }
}


HobbiesAndInterestsContainer.propTypes = {
    classes: PropTypes.object.isRequired
}
export default withStyles(styles)(HobbiesAndInterestsContainer);