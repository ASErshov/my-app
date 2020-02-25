import React from 'react';
import classes from  './Pulser.module.css';


const Pulser = () => {
  return (
    <div>
        <span className={classes.call_pulse}></span>
        <span className={classes.call_pulse2}></span>
    </div>
  )
};

export default Pulser;