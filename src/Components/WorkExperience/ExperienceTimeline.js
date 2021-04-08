import React, { Component } from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ThingeeIcon from "Assets/Images/ThingeeIcon.png";


export default class ExperienceTimeline extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: [
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
            ]
        }
        this.getTimelineItems = this.getTimelineItems.bind(this);
    }

    getTimelineItems() {
        const { jobs } = this.state;
        const timelineItems = jobs.map(job => {
            return (
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={`timeline-item-paper`}>
                            <Typography color="textSecondary">
                                {job.startTime} - {job.endTime}
                            </Typography>
                            <Typography component="h3">
                                {job.companyName}
                            </Typography>
                            <Typography>{job.jobTitle}</Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
            )
        });
        return timelineItems;
    }

    render() {
        const timelineItems = this.getTimelineItems();

        return (
            <div className={`experience-timeline-root`}>
                <Timeline align="alternate" className={`timeline-object`}>
                    {timelineItems}
                </Timeline>
            </div>
        )
    }
}