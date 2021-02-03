import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    paper: {
        borderRadius: "1rem"
    },
    text: {
        color: "black",
        margin: "0",
        textAlign: "center",
        padding: "8px",
    }
});


export default function DescriptionWidget(props) {
    const classes = useStyles();
    const description = '"Sometimes you gotta run before you can walk." - Tony Stark.';

    return (
        <div className={classes.root}>
            <Paper elevatation={3} className={classes.paper}>
                <h5 className={classes.text}>{description}</h5>
            </Paper>
        </div>
    )
}