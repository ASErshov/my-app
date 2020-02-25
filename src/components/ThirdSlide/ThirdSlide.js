import React from 'react';
import './ThirdSlide.css';
import Toggle from './Toggle/Toggle';
import SlideHeader from './SlideHeader/SlideHeader';
import Content from './Content/Content';


const ThirdSlide= () => {
    let cls ='thirdSlide thirdSlideTwo'
    return (
        <div className={cls}>
            <div className='thirdSlide_centerBlock'>
                <SlideHeader />
                <Content />
                <Toggle />
            </div>
        </div>
    );
}

export default ThirdSlide;