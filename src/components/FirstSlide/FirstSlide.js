import React from 'react';
import Footer from '../Footer/Footer';
import classes from './FirstSlide.module.css';
import Pulser from './Pulser/Pulser';


const FirstSlide = () => {
  return (
    <div className={classes.firstSlide}>
        <div className={classes.firstSlide_centerBlock}>
        <div className={classes.pulser1}><Pulser /></div>
        <div className={classes.pulser2}><Pulser /></div>
        <div className={classes.pulser3}><Pulser /></div>
        <div className={classes.pulser4}><Pulser /></div>
          <div className={classes.firstSlide_contentBlock}>
              <div>
                Всегда ли цели терапии СД2<br/>
                на поверхности?
              </div>
              <div>
                Цель по HbA1c
              </div>
              <div>
                Гипогликемия
              </div>
              <div>
                Осложнения СД
              </div>
              <div>
                СС риски
              </div>
          </div>
          <Footer link="/secondslide"/>
        </div>
    </div>
  );
}

export default FirstSlide;