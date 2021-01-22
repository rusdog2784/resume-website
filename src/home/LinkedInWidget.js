import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import "./styles.css";


export default function LinkedInWidget(props) {
    return (
        <Tooltip title="LinkedIn" placement="left">
            <Fab className={`fab`} aria-label="Linked In">
                <LinkedInIcon />
            </Fab>
        </Tooltip>
    )
}