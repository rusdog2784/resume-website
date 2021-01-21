import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
    root: {
        width: "350px",
        height: "200px",
        backgroundColor: "green"
    },
    temp: {
        color: "white",
        margin: "0"
    }
});


export default function DescriptionWidget(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <p className={classes.temp}>Description Widget</p>
        </div>
    )
}