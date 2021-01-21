import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import styled, { keyframes } from "styled-components";
import fadeInLeft from "react-animations/lib/fadeInLeft";
import profile_pic from "../assets/img/profile-pic.jpg";


const useStyles = makeStyles({
    root: {
        width: "400px",
        height: "150px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        borderRadius: "1rem",
    },
    image: {
        height: "100%",
        width: "auto",
        borderRadius: "1rem",
    },
    nameAndTitleParent: {
        textAlign: "center"
    }
});

const FadeInLeft = styled.div`animation: 2s ${keyframes`${fadeInLeft}`}`;


export default function ProfileWidget(props) {
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <img src={profile_pic} alt="avatar" className={classes.image} />
            <div className={classes.nameAndTitleParent}>
                <FadeInLeft><Typography variant="h5" gutterBottom>Scott Russell</Typography></FadeInLeft>
                <FadeInLeft><Typography variant="h6" gutterBottom>Software Developer</Typography></FadeInLeft>
            </div>
        </div>
    )
}