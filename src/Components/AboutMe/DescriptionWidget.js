import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";


const descriptionText = "Accomplished Software Developer that brings more to the table than just clean, resilient, and efficient code.";


const useStyles = makeStyles({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
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
    const description = (
        <p className={`description-text`}>{descriptionText}</p>
    )

    return (
        <div className={classes.root}>
            <div className={classes.paper}>
                <h2 className={classes.text}>{description}</h2>
            </div>
        </div>
    )
}