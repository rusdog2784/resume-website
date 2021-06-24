import { NavigationDirections } from 'data/constants';
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        
    },
    arrow: {
        position: "absolute !important",
        width: "36px !important",
        backgroundColor: "white !important",
        borderRadius: "4px !important",
        '& .left': {
            top: "50%",
            left: "12px",
            transform: "translate(0, -50%);"
        },
        '& .right': {
            top: "50%",
            right: "12px",
            transform: "translate(0, -50%);"
        },
        '& .up': {
            top: "12px",
            left: "50%",
            transform: "translate(-50%, 0)",
            width: "56px !important",
            height: "20px !important"
        },
        '& .down': {
            bottom: "12px",
            left: "50%",
            transform: "translate(-50%, 0)",
            width: "56px !important",
            height: "20px !important"
        },
        '&:hover': {
            backgroundColor: "rgba(255, 255, 255, 0.1) !important"
        }
    }
})


export default function NavigationArrow(props) {
    const classes = useStyles();
    const { direction, tooltipTitle, action } = props;

    let arrowIcon = <NavigateBeforeIcon />;
    let tooltipPlacement = NavigationDirections.left.toLowerCase();
    let arrowClass = `${classes.arrow} left`;
    if (direction === NavigationDirections.right) {
        arrowIcon = <NavigateNextIcon />;
        tooltipPlacement = NavigationDirections.right.toLowerCase();
        arrowClass = `${classes.arrow} right`;
    } else if (direction === NavigationDirections.up) {
        arrowIcon = <ExpandLessIcon />;
        tooltipPlacement = NavigationDirections.down.toLowerCase();
        arrowClass = `${classes.arrow} up`;
    } else if (direction === NavigationDirections.down) {
        arrowIcon = <ExpandMoreIcon />;
        tooltipPlacement = NavigationDirections.up.toLowerCase();
        arrowClass = `${classes.arrow} down`;
    }
    
    return (
        <Tooltip title={tooltipTitle} placement={tooltipPlacement}>
            <Fab 
                className={arrowClass} 
                onClick={action} 
                aria-label={`Navigate ${direction}`}
            >
                {arrowIcon}
            </Fab>
        </Tooltip>
    )
};