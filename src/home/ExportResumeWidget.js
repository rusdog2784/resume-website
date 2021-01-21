import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
    root: {
        width: "75px",
        height: "75px",
        borderRadius: "50%",
        backgroundColor: "green"
    }
});


export default function ExportResumeWidget(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        </div>
    )
}