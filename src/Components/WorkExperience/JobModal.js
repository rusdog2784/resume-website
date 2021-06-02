import React from "react";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
    root: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    },
    contentWrapper: {
        backgroundColor: "white",
    }
});


export default function JobModal(props) {
    const classes = useStyles();

    const duringBullets = props.job.bullets.during;
    const afterBullets = props.job.bullets.after; 

    return (
        // root
        <div className={classes.root}>
            <div className={classes.contentWrapper}>
                {/* What I Did During */}
                <div>
                    <h1>What I Achieved During</h1>
                    <ol>
                        { duringBullets.map((text) => {
                            return <li>{text}</li>
                        })}
                    </ol>
                </div>

                {/* What Happened After (Motivated Outcome) */}
                <div>
                    <h1>What I Accomplished After</h1> 
                    <ol>
                        { afterBullets.map((text) => {
                            return <li>{text}</li>
                        })}
                    </ol>
                </div>
            </div>
        </div>
    )
}