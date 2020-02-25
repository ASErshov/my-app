import React from 'react';
import Footer from '../Footer/Footer';
import './FirstSlide.css';
import Pulser from './Pulser/Pulser';


const FirstSlide = () => {
  return (
    <div className='firstSlide'>
        <div className='firstSlide_centerBlock'>
        <div className='pulser1'><Pulser /></div>
        <div className='pulser2'><Pulser /></div>
        <div className='pulser3'><Pulser /></div>
        <div className='pulser4'><Pulser /></div>
          <div className='firstSlide_contentBlock'>
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
          <Footer/>
        </div>
    </div>
  );
}

export default FirstSlide;