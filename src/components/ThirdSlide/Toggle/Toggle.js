import React from 'react';
import classes from './Toggle.module.css';

const Toggle= () => {
    return (
      <div className={classes.toggle}>
        <input type="range" defaultValue="0" max="100"/>
      </div>
    );
  }
  
  export default Toggle;