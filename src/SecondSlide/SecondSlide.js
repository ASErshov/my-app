import React from 'react';
import Footer from '../Footer/Footer';
import './SecondSlide.css';


const SecondSlide= () => {
  return (
    <div className='secondSlide'>
        <div className='secondSlide_centerBlock'>
          <div className='secondSlide_contentBlock'>
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