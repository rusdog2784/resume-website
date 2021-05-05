import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column"
    },
    myTitle: {
        fontSize: "1.75rem",
        marginBottom: "24px"
    },
    myStatement: {
        fontSize: "1.5rem",
        fontWeight: "500"
    },
    line: {
        height: "0.5px",
        backgroundColor: "black",
        width: "100%"
    }
});


export default function HookStatement(props) {
    const classes = useStyles();
    const myTitle = "Software Developer";
    const myStatement = `Accomplished Software Developer that 
                        brings more to the table than just 
                        clean, resilient, and efficient code.`;

    return (
        <div className={classes.root} >
            <h1 className={classes.myTitle} >{myTitle}</h1>
            <div className={classes.line} ></div>
            <p className={classes.myStatement} >{myStatement}</p>
        </div>
    )
}