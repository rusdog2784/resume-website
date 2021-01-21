import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import profile_pic from "../assets/img/profile-pic.jpg";
import "./styles.css";


export default function ProfileWidget(props) {
    const { expand } = props;
    let animation = "";
    if (expand) {
        animation = "widget-expand";
    } else {
        animation = "";
    }

    return (
        <Paper elevation={3} className={`widget-root ${animation}`} >
            <img src={profile_pic} alt="avatar" className={`widget-image`} />
            <div className={`widget-text`}>
                <Typography variant="h5" gutterBottom>Scott Russell</Typography>
                <Typography variant="h6" gutterBottom>Software Developer</Typography>
            </div>
        </Paper>
    )
}