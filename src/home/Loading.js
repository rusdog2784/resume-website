import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import "./styles.css";


export default function Loading(props) {
    const [progress, setProgress] = React.useState(0);
  
    React.useEffect(() => {
      const timer = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress >= 100) {
              props.start();
          }
          const diff = Math.random() * 25;
          return Math.min(oldProgress + diff, 100);
        });
      }, 500);
  
      return () => {
        clearInterval(timer);
      };
    }, []);
  
    return (
      <div className={`loading-root`}>
        <LinearProgress className={`linear-progress-bar`} variant="determinate" value={progress} />
      </div>
    );
  }