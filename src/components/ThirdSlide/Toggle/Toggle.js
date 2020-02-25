import React from 'react';
import './Toggle.css';

const Toggle= () => {
    return (
      <div className='toggle'>
        <input type="range" defaultValue="0" max="100"/>
      </div>
    );
  }
  
  export default Toggle;