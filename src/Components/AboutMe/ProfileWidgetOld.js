import Paper from "@material-ui/core/Paper";
import profile_pic from "Assets/Images/profile-pic.jpg";


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
                <h5>Scott Russell</h5>
                <div className={`underline`}></div>
                <h6>Software Developer</h6>
            </div>
        </Paper>
    )
}