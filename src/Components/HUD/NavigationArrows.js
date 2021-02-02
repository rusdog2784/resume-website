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
        this.getIconForArrowDirection = this.getIconForArrowDirection.bind(this);
    }

    handleArrowClick(param) {
        this.props.handleNavigationArrowClick(param);
    }

    getIconForArrowDirection(direction) {
        if (direction === NavigationDirection.left) {
            return <NavigateBeforeIcon />;
        } else if (direction === NavigationDirection.right) {
            return <NavigateNextIcon />;
        } else if (direction === NavigationDirection.bottom) {
            return <ExpandMoreIcon />;
        } else {
            return <ExpandLessIcon />;
        }
    }

    render() {
        const { animation, arrowsToShow } = this.props;

        return (
            <div className={`navigation-arrows-root ${animation}`}>

                {arrowsToShow.map(arrow => {

                    const title = arrow.title;
                    const direction = arrow.direction;
                    const icon = this.getIconForArrowDirection(direction);
                    let placement = direction;
                    if (placement === NavigationDirection.top) placement = NavigationDirection.bottom.toLowerCase();
                    else if (placement === NavigationDirection.bottom) placement = NavigationDirection.top.toLowerCase();
                    else placement = placement.toLowerCase();

                    return (
                        <Tooltip title={title} placement={placement}>
                            <Fab 
                                className={`navigate-button navigate-${direction.toLowerCase()}`} 
                                onClick={() => {this.handleArrowClick(direction)}} 
                                aria-label={`Navigate ${direction}`}
                            >
                                {icon}
                            </Fab>
                        </Tooltip>
                    )
                })}

            </div>
        )
    } 
}


export default NavigationArrows;