import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { makeStyles } from "@material-ui/core/styles";
import { workExperience } from "Data/workExperienceData";
import JobItem from "Components/WorkExperience/JobItem";


const useStyles = makeStyles({
    root: {
        height: "100%",
        overflow: "auto"
    }
});


export default function JobsTimeline(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <VerticalTimeline>
                {workExperience.map((job) => (
                    <JobItem job={job} />
                ))}
            </VerticalTimeline>
        </div>
    )
}