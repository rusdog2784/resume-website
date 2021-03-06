import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import hoboken from "Assets/Images/hoboken.png";
import LocationOnIcon from '@material-ui/icons/LocationOn';


function goToLink(url) {
    var win = window.open(url, '_blank');
    win.focus();
}


export default function LocationWidget(props) {
    const { expand } = props;
    let animation = "";
    if (expand) {
        animation = "widget-expand";
    } else {
        animation = "";
    }
    const mapsURL = "https://www.google.com/maps/place/Hoboken,+NJ/@40.7449903,-74.0551648,13.25z/data=!4m5!3m4!1s0x89c257608d1533d1:0x44b6ca6a1137bf87!8m2!3d40.7439905!4d-74.0323626";

    return (
        <Paper elevation={3} className={`widget-root flex-row-reverse ${animation}`} >
            <img src={hoboken} alt="avatar" className={`widget-image pointer`} onClick={() => {goToLink(mapsURL)}} />
            <div className={`widget-text`}>
                <h5>Hoboken, NJ</h5>
                <LocationOnIcon style={{ fontSize: "36px", width: "100%" }}/>
            </div>
        </Paper>
    )
}