import ModeCommentIcon from '@material-ui/icons/ModeComment';
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";


export default function ContactMeWidget(props) {
    return (
        <Tooltip title="Contact Me" placement="bottom">
            <Fab className={`fab`} aria-label="Contact Me">
                <ModeCommentIcon />
            </Fab>
        </Tooltip>
    )
}