import React, { Component } from 'react';
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
// Icons
import GitHubIcon from '@material-ui/icons/GitHub';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GetAppIcon from "@material-ui/icons/GetApp";


export const FabWidgetTitles = {
    downloadCV: "Download CV",
    linkedIn: "LinkedIn",
    gitHub: "GitHub",
    contactMe: "Contact Me"
}


class FabWidget extends Component {
    constructor(props) {
        super(props);

        this.goToLink = this.goToLink.bind(this);
        this.downloadCV = this.downloadCV.bind(this);
        this.openContactMeModal = this.openContactMeModal.bind(this);

        this.state = {
            fabWidgets: {
                [FabWidgetTitles.downloadCV]: {
                    icon: (<GetAppIcon />),
                    action: (() => { 
                        this.downloadCV(); 
                    })
                },
                [FabWidgetTitles.linkedIn]: {
                    icon: (<LinkedInIcon />),
                    action: (() => {
                        this.goToLink("https://www.linkedin.com/in/rusdog2784/");
                    })
                },
                [FabWidgetTitles.gitHub]: { 
                    icon: (<GitHubIcon />),
                    action: (() => {
                        this.goToLink("https://github.com/rusdog2784/");
                    })
                },
                [FabWidgetTitles.contactMe]: {
                    icon: (<ModeCommentIcon />),
                    action: (() => {
                        this.openContactMeModal();
                    })
                }
            }
        };
    }

    goToLink(url) {
        var win = window.open(url, '_blank');
        win.focus();
    }

    downloadCV() {
        alert("Download CV Coming Soon!");
    }

    openContactMeModal() {
        alert("'Contact Me' modal coming soon. Just need to find the right styled component.");
    }

    render() {
        const { title } = this.props;
        const { fabWidgets } = this.state;

        const fabWidget = fabWidgets[title];

        return (
            <Tooltip title={title} placement="bottom">
                <Fab className={`fab`} aria-label={title} onClick={fabWidget.action}>
                    {fabWidget.icon}
                </Fab>
            </Tooltip>
        )
    }

}


export default FabWidget;