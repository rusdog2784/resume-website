import Paper from "@material-ui/core/Paper";
import profile_pic from 'assets/images/profile-pic.jpg';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    imageWrapper: {
        width: "125px",
        height: "125px",
        borderRadius: "1rem !important",
        backgroundColor: "black"
    },
    image: {
        height: "100%",
        width: "auto",
        borderRadius: "1rem"
    },
    textWrapper: {
        paddingLeft: "16px",
        width: "100%",
    },
    name: {
        fontSize: "1.75rem",
        paddingBottom: "4px"
    },
    line: {
        height: "1px",
        backgroundColor: "black",
        width: "100%"
    },
    location: {
        fontSize: "1rem",
        paddingTop: "4px"
    }
})

export default function ProfileWidget(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper elevation={3} className={classes.imageWrapper} >
                <img src={profile_pic} alt="avatar" className={classes.image} />
            </Paper>
            <div className={classes.textWrapper}>
                <div className={classes.name}>Scott Russell</div>
                <div className={classes.line}></div>
                <div className={classes.location}>Hoboken, NJ</div>
            </div>
        </div>
    )
}