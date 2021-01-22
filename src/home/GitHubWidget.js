import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import GitHubIcon from '@material-ui/icons/GitHub';
import "./styles.css";


export default function GitHubWidget(props) {
    return (
        <Tooltip title="GitHub" placement="right">
            <Fab className={`fab`} aria-label="GitHub">
                <GitHubIcon />
            </Fab>
        </Tooltip>
    )
}