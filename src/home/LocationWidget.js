import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import hoboken from "../assets/img/hoboken.png";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import "./styles.css";


export default function LocationWidget(props) {
    const { expand } = props;
    let animation = "";
    if (expand) {
        animation = "widget-expand";
    } else {
        animation = "";
    }

    return (
        <Paper elevation={3} className={`widget-root flex-row-reverse ${animation}`} >
            <img src={hoboken} alt="avatar" className={`widget-image`} />
            <div className={`widget-text`}>
                <Typography variant="h5" gutterBottom>Hoboken, NJ</Typography>
                <LocationOnIcon style={{ fontSize: "36px", width: "100%" }}/>
            </div>
        </Paper>
    )
}