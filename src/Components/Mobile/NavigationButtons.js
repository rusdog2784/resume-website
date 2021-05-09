import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    buttonWrapper: {
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        marginLeft: "4px",
        marginRight: "4px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "white",
    },
    buttonTitle: {
        fontSize: "0.75rem",
    }
});


export default function NavigationButtons(props) {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <Button variant="contained" className={classes.buttonWrapper} >
                <div className={classes.buttonTitle}>Skills</div>
            </Button>
            <Button variant="contained" className={classes.buttonWrapper} >
                <div className={classes.buttonTitle}>Work Experience</div>
            </Button>
            <Button variant="contained" className={classes.buttonWrapper} >
                <div className={classes.buttonTitle}>Hobbies & Interests</div>
            </Button>
        </div>
    )
}