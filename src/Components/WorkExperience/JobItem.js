import React from "react";
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import Modal from '@material-ui/core/Modal';
import WorkIcon from '@material-ui/icons/Work';
import JobModal from "components/WorkExperience/JobModal";
import Backdrop from '@material-ui/core/Backdrop';


const itemStyles = {
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


export default function JobItem(props) {
    const { job } = props;

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={itemStyles.contentStyle}
                contentArrowStyle={itemStyles.contentArrowStyle}
                date={job.startTime + " - " + job.endTime}
                dateClassName={itemStyles.dateClass}
                iconStyle={itemStyles.iconStyle}
                icon={<WorkIcon />}
                onTimelineElementClick={ handleOpen }
            >
                <h3 className="vertical-timeline-element-title">{job.jobTitle}</h3>
                <h4 className="vertical-timeline-element-subtitle">{job.companyName}</h4>
                <p>
                    {job.description}
                </p>
            </VerticalTimelineElement>
            <Modal
                aria-labelledby={job.jobTitle + " @ " + job.companyName}
                aria-describedby={job.jobTitle + " @ " + job.companyName}
                open={open}
                onClose={handleClose}
                disableEnforceFocus 
            >
                <JobModal job={job} />
            </Modal>
        </>
    )
}