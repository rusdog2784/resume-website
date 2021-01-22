import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


export default function NavigationArrows(props) {
    const animation = props.animation;
    return (
        <div className={`navigation-arrows-root ${animation}`}>
            <Tooltip title="Navigate Left" placement="right">
                <Fab className={`navigate-button navigate-left`} aria-label="Navigate Left">
                    <NavigateBeforeIcon />
                </Fab>
            </Tooltip>

            <Tooltip title="Navigate Right" placement="left">
                <Fab className={`navigate-button navigate-right`} aria-label="Navigate Right">
                    <NavigateNextIcon />
                </Fab>
            </Tooltip>

            <Tooltip title="Navigate Down" placement="top">
                <Fab className={`navigate-button navigate-down`} aria-label="Navigate Down">
                    <ExpandMoreIcon />
                </Fab>
            </Tooltip>
        </div>
    )
}