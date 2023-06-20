
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import axios from 'axios';


export default function ShowCategoriesForHome() {

    const [Categories, setCategories] = useState([]);

    async function CategoriesForHome() {


        let { data } = await axios.get('https://route-ecommerce.onrender.com/api/v1/categories')

        setCategories(data.data);
    };

useEffect(() => {

    CategoriesForHome()
 
}, [])


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
    };

    return <>
    <div className="container">
   <div>
            <h2 className='text-main'>Categories </h2>
            <Slider {...settings}>
                {Categories.map((categ)=> <div>
                    
                    <div>
                    <img   className='w-100' src={categ.image} alt="" />

                    </div>
                </div>)} 
            
               
            </Slider>
        </div>
    </div>
     
    </>
}