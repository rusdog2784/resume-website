import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles((theme) => ({
    root: {
    },
    button: {
        backgroundColor: "black",
        color: "white",
        fontSize: "0.75rem"
    },
    modalRoot: {
        position: "absolute",
        height: "90%",
        width: "95%",
        top: "5%",
        left: "2.5%",
        paddingLeft: "24px",
        paddingRight: "20px",
        paddingTop: "38px",
        paddingBottom: "24px",
        borderRadius: "8px",
        backgroundColor: "rgba(255, 255, 255, 0.90)",
        boxShadow: theme.shadows[5],
    },
    paragraphsWrapper: {
        height: "100%",
        paddingTop: "8px",
        overflow: "scroll"
    },
    paragraph: {
        fontSize: "1rem",
        paddingRight: "4px"
    },
    closeButton: {
        position: "absolute",
        right: "0px",
        top: "0px"
    },
}));


export default function MyStoryModal() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const paragraphs = [
        // `I love the concept of a moonshot. It’s not the satisfaction you might 
        // get from being told you can’t do something then actually doing it. But instead, it’s 
        // the journey you go on when trying to accomplish the impossible. The experiences and 
        // life lessons you pick up along the way. In my life and in my career, I try to approach 
        // everything I do with the same notion of chasing a moonshot.`,

        `To bring you up to speed, I’d consider myself as having the charm and charisma of a 
        born and raised Southern Californian with the work ethic of a New Yorker. In 2013, I 
        packed my bags and moved from Newport Beach, CA to Hoboken, NJ to attend and play 
        volleyball for Stevens Institute of Technology. It’s there where I majored in Computer 
        Engineering and discovered the capabilities of technology. I was fortunate enough to 
        gain work experience through internships, play volleyball at a collegiate level, and 
        surround myself with people who pushed and inspired me on a daily basis. More 
        importantly, I’ve also learned how to figure things out on my own, and when to ask for 
        help. These skills, traits, or whatever else you’d call it are the pillars of my success. 
        I’ve created my foundation and now it’s time to build my church.`,

        `This website is the foundation to my so-called church. While looking through this site, 
        you’ll get a small glimpse into some of the work I’ve done as well as the some of the 
        projects I’m working on, or completed. If you see anything that stands 
        out to you, or have any questions, comments, concerns or praises, please feel free to 
        send them my way by clicking on the Contact Me button on the About Me page. Just know 
        that I enjoy taking whatever resources are at my disposal and using them to solve big 
        problems.`
    ];

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const modalBody = (
        <div className={classes.modalRoot}>
            <IconButton className={classes.closeButton} onClick={handleClose} >
                <CloseIcon />
            </IconButton>
            <div className={classes.paragraphsWrapper} >
                {paragraphs.map(item => {
                    return (
                        <p className={classes.paragraph}>{item}</p>
                    )
                })}
            </div>
        </div>
    );

    return (
        <div className={classes.root}>
            <Button variant="contained" className={classes.button} onClick={handleOpen} >
                My Story
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="my-story-modal"
            >
                {modalBody}
            </Modal>
        </div>
    );
}