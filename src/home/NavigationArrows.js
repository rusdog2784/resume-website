import React, { Component } from 'react';
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


export const NavigationDirection = {
    right: "RIGHT",
    left: "LEFT",
    top: "TOP",
    bottom: "BOTTOM"
}


class NavigationArrows extends Component {
    constructor(props) {
        super(props);

        this.handleArrowClick = this.handleArrowClick.bind(this);
    }

    handleArrowClick(param) {
        this.props.handleNavigationArrowClick(param);
    }

    render() {
        const { animation, arrowsToShow } = this.props;

        return (
            <div className={`navigation-arrows-root ${animation}`}>

                {arrowsToShow.includes(NavigationDirection.left) && 
                    <Tooltip title="Navigate Left" placement="right">
                        <Fab 
                            className={`navigate-button navigate-left`} 
                            onClick={() => {this.handleArrowClick(NavigationDirection.left)}} 
                            aria-label="Navigate Left"
                        >
                            <NavigateBeforeIcon />
                        </Fab>
                    </Tooltip>
                }

                {arrowsToShow.includes(NavigationDirection.right) && 
                    <Tooltip title="Navigate Right" placement="left">
                        <Fab 
                            className={`navigate-button navigate-right`} 
                            onClick={() => {this.handleArrowClick(NavigationDirection.right)}} 
                            aria-label="Navigate Right"
                        >
                            <NavigateNextIcon />
                        </Fab>
                    </Tooltip>
                }

                {arrowsToShow.includes(NavigationDirection.bottom) && 
                    <Tooltip title="Navigate Down" placement="top">
                        <Fab 
                            className={`navigate-button navigate-down`} 
                            onClick={() => {this.handleArrowClick(NavigationDirection.bottom)}} 
                            aria-label="Navigate Down"
                        >
                            <ExpandMoreIcon />
                        </Fab>
                    </Tooltip>
                }

                {arrowsToShow.includes(NavigationDirection.top) &&
                    <Tooltip title="Navigation Up" placement="bottom">
                        <Fab 
                            className={`navigate-button navigate-up`} 
                            onClick={() => {this.handleArrowClick(NavigationDirection.top)}} 
                            aria-label="Navigate Up"
                        >
                            <ExpandLessIcon />
                        </Fab>
                    </Tooltip>
                }

            </div>
        )
    } 
}


export default NavigationArrows;