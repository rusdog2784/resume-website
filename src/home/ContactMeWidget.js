import ModeCommentIcon from '@material-ui/icons/ModeComment';
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import "./styles.css";


export default function ContactMeWidget(props) {
    return (
        <Tooltip title="Contact Me" placement="right">
            <Fab className={`fab`} aria-label="Contact Me">
                <ModeCommentIcon />
            </Fab>
        </Tooltip>
    )
}