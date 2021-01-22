import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import GetAppIcon from "@material-ui/icons/GetApp";
import "./styles.css";


export default function ExportResumeWidget(props) {
    return (
        <Tooltip title="Download CV" placement="left">
            <Fab className={`fab`} aria-label="Download Resume">
                <GetAppIcon />
            </Fab>
        </Tooltip>
    )
}