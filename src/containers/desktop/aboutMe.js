import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { NavigationDirections } from 'data/constants';
import NavigationArrow from 'components/navigationArrow';
import ProfileWidget from 'components/aboutMe/profileWidget';


const styles = {
    root: {

    },
    arrows: {

    }
}


class AboutMeContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes, title } = this.props;

        return (
            <div className={`${classes.root} resume-section-container`}>
                <div className={classes.arrows}>
                    <NavigationArrow direction={NavigationDirections.left} tooltipTitle="Hobbies and Interests" action={}
                </div>
                !!! {title} !!!
            </div>
        )
    }
}


AboutMeContainer.propTypes = {
    classes: PropTypes.object.isRequired
}
export default withStyles(styles)(AboutMeContainer);