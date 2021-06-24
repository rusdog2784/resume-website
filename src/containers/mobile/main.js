import React, { Component } from 'react';
import Profile from 'components/mobile/Profile';
import InteractionIcons from "components/mobile/InteractionIcons";
import HookStatement from "components/mobile/HookStatement";
import NavigationButtons from "components/mobile/NavigationButtons";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";


const styles = {
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingLeft: "2%",
        paddingRight: "2%", 
        width: "100%",
        height: "100%",
        overflow: "auto",
        background: "linear-gradient(to right bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3))"
    },
    profileWrapper: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "24px"
    },
    interactionIconsWrapper: {
        flex: 1,
        width: "90%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    hookStatementWrapper: {
        flex: 2,
        width: "90%",
        display: "flex",
        alignItems: "flex-start"
    },
    navigationButtonsWrapper: {
        flex: 1,
        width: "90%",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start"
    },
};


class MainContainerMobile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPosition: {
                x: 0,
                y: 0,
            },
            views: [
                
            ]
        }
    }

    handleNavigationClick(position) {
        if (this.state.currentPosition.x !== position.x || this.state.currentPosition.y !== position.y) {
            this.setState({ currentPosition: position });
        }
    }

    render() {
        const { classes } = this.props;
        const { currentPosition } = this.state;

        const translateX = (currentPosition.x * (100 / 3) * -1);
        const translateY = (currentPosition.y * (100 / 2) * -1);
        const wrapperTransform = {
            'transform': `translateX(${translateX}%) translateY(${translateY}%)`
        }

        return (
            <div className="grid-root">
                {/* <div className="views-wrapper" style={wrapperTransform}> */}
                    <div className={classes.root}>
                        <div className={classes.profileWrapper}>
                            <Profile />
                        </div>
                        <div className={classes.interactionIconsWrapper}>
                            <InteractionIcons />
                        </div>
                        <div className={classes.hookStatementWrapper}>
                            <HookStatement />
                        </div>
                        <div className={classes.navigationButtonsWrapper}>
                            <NavigationButtons />
                        </div>
                    </div>
                {/* </div> */}
            </div>
        )
    }
}


MainContainerMobile.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(MainContainerMobile);