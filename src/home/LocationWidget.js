import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
    root: {
        width: "150px",
        height: "150px",
        backgroundColor: "green"
    },
    temp: {
        color: "white",
        margin: "0"
    }
});


export default function LocationWidget(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <p className={classes.temp}>Location Widget</p>
        </div>
    )
}