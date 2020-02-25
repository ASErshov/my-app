import React from 'react';
import Footer from '../Footer/Footer';
import classes from './SecondSlide.module.css';


const SecondSlide= () => {
  return (
    <div className={classes.secondSlide}>
        <div className={classes.secondSlide_centerBlock}>
          <div className={classes.secondSlide_contentBlock}>
              <div>
                Основа терапии -<br/>
                патогенез СД2
              </div>
          </div>
          <Footer/>
        </div>
    </div>
  );
}

export default SecondSlide;