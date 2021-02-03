import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import GitHubIcon from '@material-ui/icons/GitHub';


export default function GitHubWidget(props) {
    const url = "https://github.com/rusdog2784";
    return (
        <Tooltip title="GitHub" placement="bottom">
            <Fab className={`fab`} aria-label="GitHub">
                <GitHubIcon />
            </Fab>
        </Tooltip>
    )
}