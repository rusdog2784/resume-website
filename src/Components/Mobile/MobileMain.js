import React, { Component } from 'react';
import Profile from "Components/Mobile/Profile";
import InteractionIcons from "Components/Mobile/InteractionIcons";
import HookStatement from "Components/Mobile/HookStatement";
import NavigationButtons from "Components/Mobile/NavigationButtons";
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
        alignItems: "center"
    },
    navigationButtonsWrapper: {
        flex: 1,
        width: "90%",
        display: "flex",
        justifyContent: "center",
    },
};


class MobileMain extends Component {
    render() {
        const { classes } = this.props;
        return (
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
        )
    }
}


MobileMain.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(MobileMain);