import React, { useEffect } from 'react';
import classes from './Content.module.css';

const Content= () => {

    const drawSome = () => {
      let canvas = document.getElementById('canvas')
      let ctx = canvas.getContext("2d");
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
      ctx.font = 'bold 5em Georgia'
      ctx.fillStyle = 'white'
      ctx.fillText(1, canvas.width/2, 50)
    };
    useEffect(() => {
      drawSome();
    });
    window.addEventListener("resize", function() {
      drawSome();
    });
    return (
      <div className={classes.content}>
        <canvas id="canvas" ></canvas>
      </div>
    );
}
  
  export default Content;