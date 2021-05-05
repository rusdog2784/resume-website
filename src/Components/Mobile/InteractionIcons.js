import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import GitHubIcon from '@material-ui/icons/GitHub';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GetAppIcon from "@material-ui/icons/GetApp";


const useStyles = makeStyles({
    root: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start"
    },
    fabWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
    },
    fabButton: {
        backgroundColor: "white"
    },
    fabTitle: {
        paddingTop: "8px",
        fontSize: "0.75rem"
    }
});


function goToLink(url) {
    var newWindow = window.open(url, "_blank");
    newWindow.focus();
}


export default function InteractionIcons(props) {
    const classes = useStyles();
    const linkedInURL = "https://www.linkedin.com/in/rusdog2784/";
    const gitHubURL = "https://github.com/rusdog2784/";

    return (
        <div className={classes.root} >
            <div className={classes.fabWrapper} >
                <Fab 
                    aria-label={"LinkedIn"} 
                    className={classes.fabButton} 
                    onClick={() => { goToLink(linkedInURL); }}
                    disableRipple 
                >
                    <LinkedInIcon />
                </Fab>
                <div className={classes.fabTitle}>LinkedIn</div>
            </div>
            <div className={classes.fabWrapper} >
                <Fab 
                    aria-label={"GitHub"} 
                    className={classes.fabButton} 
                    onClick={() => { goToLink(gitHubURL); }}
                    disableRipple 
                >
                    <GitHubIcon />
                </Fab>
                <div className={classes.fabTitle}>GitHub</div>
            </div>
            <div className={classes.fabWrapper} >
                <Fab 
                    aria-label={"Download CV"} 
                    className={classes.fabButton} 
                    onClick={() => { alert("Download CV Coming Soon!"); }}
                    disableRipple 
                >
                    <GetAppIcon />
                </Fab>
                <div className={classes.fabTitle}>Download CV</div>
            </div>
            <div className={classes.fabWrapper} >
                <Fab 
                    aria-label={"Contact Me"} 
                    className={classes.fabButton} 
                    onClick={() => { alert("Contact Me Coming Soon!"); }}
                    disableRipple 
                >
                    <ModeCommentIcon />
                </Fab>
                <div className={classes.fabTitle}>Contact Me</div>
            </div>
        </div>
    )
}