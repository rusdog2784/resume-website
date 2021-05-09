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
        height: "98%",
        width: "98%",
        marginTop: "2%",
        marginBottom: "2%",
        margin: "0px auto",
        borderRadius: "8px",
        backgroundColor: "white",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        paddingTop: "30px",
        paddingBottom: "24px",
        overflow: "scroll"
    },
    closeButton: {
        position: "absolute",
        right: "4px",
        top: "16px"
    },
}));


export default function MyStoryModal() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const paragraph1 = `
        I love the concept of a moonshot. It’s not the satisfaction you might 
        get from being told you can’t do something then actually doing it. But instead, it’s 
        the journey you go on when trying to accomplish the impossible. The experiences and 
        life lessons you pick up along the way. In my life and in my career, I try to approach 
        everything I do with the same notion of chasing a moonshot.`
    const paragraph2 = `
        To bring you up to speed, I’d consider myself as having the charm and charisma of a 
        born and raised Southern Californian with the work ethic of a New Yorker. In 2013, I 
        packed my bags and moved from Newport Beach, CA to Hoboken, NJ to attend and play 
        volleyball for Stevens Institute of Technology. It’s there where I majored in Computer 
        Engineering and discovered the capabilities of technology. I was fortunate enough to 
        gain work experience through internships, play volleyball at a collegiate level, and 
        surround myself with people who pushed and inspired me on a daily basis. More 
        importantly, I’ve also learned how to figure things out on my own, and when to ask for 
        help. These skills, traits, or whatever else you’d call it are the pillars of my success. 
        I’ve created my foundation and now it’s time to build my church.`   
    const paragraph3 = `
        This website is the foundation to my so-called church. While looking through this site, 
        you’ll get a small glimpse into some of the work I’ve done as well as the some of the 
        projects I’ve completed, and/or am currently working on. If you see anything that stands 
        out to you, or have any questions, comments, concerns or praises, please feel free to 
        send them my way by clicking on the Contact Me button on the About Me page. Just know 
        that I enjoy taking whatever resources are at my disposal and using them to solve big 
        problems.`;

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
            <p>
               {paragraph1}
            </p>
            <p>
               {paragraph2}
            </p>
            <p>
               {paragraph3}
            </p>
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