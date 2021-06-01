import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';
import { workExperience } from "Data/workExperienceData";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
    root: {
        height: "100%",
        overflow: "auto"
    }
})
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
    },
    dateStyle: {
        color: "black"
    }
}


function onClickFunction(event) {
    console.log(event);
}


export default function CustomTimeline(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <VerticalTimeline>
            {workExperience.map((job) => (
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={timelineStyles.contentStyle}
                    contentArrowStyle={timelineStyles.contentArrowStyle}
                    date={job.startTime + " - " + job.endTime}
                    dateClassName={timelineStyles.dateClass}
                    iconStyle={timelineStyles.iconStyle}
                    icon={<WorkIcon />}
                    onTimelineElementClick={ () => onClickFunction(job) }
                >
                    <h3 className="vertical-timeline-element-title">{job.jobTitle}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{job.companyName}</h4>
                    <p>
                        {job.description}
                    </p>
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
        </div>

        // <VerticalTimeline>
            // <VerticalTimelineElement
            //     className="vertical-timeline-element--work"
            //     contentStyle={timelineStyles.contentStyle}
            //     contentArrowStyle={timelineStyles.contentArrowStyle}
            //     date="Jan 2015 - May 2015"
            //     dateClassName={timelineStyles.dateClass}
            //     iconStyle={timelineStyles.iconStyle}
            //     icon={<WorkIcon />}
            //     onTimelineElementClick={ () => onClickFunction(1) }
            // >
            //     <h3 className="vertical-timeline-element-title">iOS Developer Intern</h3>
            //     <h4 className="vertical-timeline-element-subtitle">Thingee Corporation</h4>
            //     <p>
            //         Worked on proof of concepts for their main iOS iPad application.
            //     </p>
            // </VerticalTimelineElement>
        //     <VerticalTimelineElement
        //         className="vertical-timeline-element--work"
        //         contentStyle={timelineStyles.contentStyle}
        //         contentArrowStyle={timelineStyles.contentArrowStyle}
        //         date="Aug 2015 - Dec 2015"
        //         dateClassName={timelineStyles.dateClass}
        //         iconStyle={timelineStyles.iconStyle}
        //         icon={<WorkIcon />}
        //         onTimelineElementClick={ () => onClickFunction(2) }
        //     >
        //         <h3 className="vertical-timeline-element-title">Systems Engineering Intern</h3>
        //         <h4 className="vertical-timeline-element-subtitle">TalkPoint a PGI Company</h4>
        //         <p>
        //             Initial introduction into the power of Python.
        //         </p>
        //     </VerticalTimelineElement>
        // </VerticalTimeline>
    )
}