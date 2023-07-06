
import Slider from 'react-slick';

import  cart1 from '../../img/slider-image-1.jpeg';
import  cart2 from '../../img/slider-image-2.jpeg';
import  cart3 from '../../img/slider-image-3.jpeg';
import  cart5 from '../../img/slider-image-5.jpeg';
import  cart6 from '../../img/slider-image-6.png';
import  cart7 from '../../img/slider-image-7.jpeg';

import React from 'react'

export default function ShowCategoriesForHomeTwo() {
 
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
 
 
 
 
 return <>
  
  <div className="container">
        <div className="row">
        <div>
     
        <Slider {...settings}>
          <div>
            <img src={cart1} height={300} className='w-100'  alt=''/>
          </div>
          <div>
            <img src={cart2} height={300} className='w-100'  alt=''/>
          </div>
          <div>
            <img src={cart3} height={300} className='w-100'  alt=''/>
          </div>
          <div>
            <img src={cart5} height={300} className='w-100'  alt=''/>
          </div>
          <div>
            <img src={cart6} height={300} className='w-100'  alt=''/>
          </div>
          <div>
            <img src={cart7} height={300} className='w-100'  alt=''/>
          </div>
   
        </Slider>
      </div>
        </div>
  </div>
     
  
  </>
}
