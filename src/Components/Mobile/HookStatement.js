import { makeStyles } from "@material-ui/core/styles";
import MyStoryModal from "components/mobile/MyStoryModal";


const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column"
    },
    myTitle: {
        fontSize: "1.75rem",
        marginBottom: "8px"
    },
    myStatement: {
        fontSize: "1.5rem",
        fontWeight: "500",
        marginTop: "16px",
        marginBottom: "16px"
    },
    line: {
        height: "0.5px",
        backgroundColor: "black",
        width: "100%"
    },
    buttonWrapper: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingBottom: "8px"
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
            <MyStoryModal />
        </div>
    )
}