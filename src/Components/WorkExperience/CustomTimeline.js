import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ThingeeIcon from "Assets/Images/ThingeeIcon.png";
import WorkIcon from '@material-ui/icons/Work';
import { makeStyles } from '@material-ui/core';
import Paper from "@material-ui/core/Paper";


const workExperience = [
    {
        companyName: "J.P. Morgan Chase",
        icon: ThingeeIcon,
        jobTitle: "Software Engineering Associate",
        startTime: "Dec 2020",
        endTime: "Present",
        timeFrame: "TBD",
        bullets: {
            during: [
                ``
            ],
            after: [
                ``
            ]
        }
    },
    {
        companyName: "J.P. Morgan Chase",
        icon: ThingeeIcon,
        jobTitle: "Software Engineering Analyst",
        startTime: "Jun 2018",
        endTime: "Dec 2020",
        timeFrame: "2 years 6 months",
        bullets: {
            during: [
                ``
            ],
            after: [
                ``
            ]
        }
    },
    {
        companyName: "J.P. Morgan Chase",
        icon: ThingeeIcon,
        jobTitle: "Technology Analyst Intern",
        startTime: "Jun 2017",
        endTime: "Aug 2017",
        timeFrame: "3 months",
        bullets: {
            during: [
                ``
            ],
            after: [
                ``
            ]
        }
    },
    {
        companyName: "Splash (SplashThat.com)",
        icon: ThingeeIcon,
        jobTitle: "Customer Success Operations Intern",
        startTime: "Aug 2016",
        endTime: "Dec 2016",
        timeFrame: "5 months",
        bullets: {
            during: [
                ``
            ],
            after: [
                ``
            ]
        }
    },
    {
        companyName: "Splash (SplashThat.com)",
        icon: ThingeeIcon,
        jobTitle: "Customer Success Intern",
        startTime: "May 2016",
        endTime: "Aug 2016",
        timeFrame: "4 months",
        bullets: {
            during: [
                ``
            ],
            after: [
                ``
            ]
        }
    },
    {
        companyName: "TalkPoint a PGI Company",
        icon: ThingeeIcon,
        jobTitle: "Systems Engineering Intern",
        startTime: "Aug 2015",
        endTime: "Dec 2015",
        timeFrame: "5 months",
        bullets: {
            during: [
                ``
            ],
            after: [
                ``
            ]
        }
    },
    {
        companyName: "Thingee Corporation",
        icon: ThingeeIcon,
        jobTitle: "iOS Developer Intern",
        startTime: "Jan 2015",
        endTime: "May 2015",
        timeFrame: "5 months",
        bullets: {
            during: [
                `Developed and integrated iOS proof of concepts 
                into the main product using Objective C.`
            ],
            after: [
                `Designed and developed my own iOS application 
                using Swift.`
            ]
        }
    }
];


const useStyles = makeStyles((theme) => ({
    root: {

    },
    date: {
        color: "black"
    }
}));
const timelineStyles = {
    contentStyle: {
        color: 'black',
        background: 'rgba(255, 255, 255)',
        boxShadow: "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)"
    },
    contentArrowStyle: {
        borderRight: '7px solid rgba(255, 255, 255, 0.8)'
    },
    iconStyle: {
        color: 'black',
        background: 'rgba(255, 255, 255, 0.8)',
        boxShadow: "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)"
    }
}


function onClickFunction(event) {
    console.log(event);
}


export default function CustomTimeline(props) {
    const classes = useStyles();

    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={timelineStyles.contentStyle}
                contentArrowStyle={timelineStyles.contentArrowStyle}
                date="Jan 2015 - May 2015"
                dateClassName={classes.date}
                iconStyle={timelineStyles.iconStyle}
                icon={<WorkIcon />}
                onTimelineElementClick={ () => onClickFunction(1) }
            >
                <h3 className="vertical-timeline-element-title">iOS Developer Intern</h3>
                <h4 className="vertical-timeline-element-subtitle">Thingee Corporation</h4>
                <p>
                    Worked on proof of concepts for their main iOS iPad application.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={timelineStyles.contentStyle}
                contentArrowStyle={timelineStyles.contentArrowStyle}
                date="Aug 2015 - Dec 2015"
                dateClassName={classes.date}
                iconStyle={timelineStyles.iconStyle}
                icon={<WorkIcon />}
                onTimelineElementClick={ () => onClickFunction(2) }
            >
                <h3 className="vertical-timeline-element-title">Systems Engineering Intern</h3>
                <h4 className="vertical-timeline-element-subtitle">TalkPoint a PGI Company</h4>
                <p>
                    Initial introduction into the power of Python.
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    )
}