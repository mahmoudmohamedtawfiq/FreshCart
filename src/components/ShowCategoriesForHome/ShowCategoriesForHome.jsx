
import React, { useEffect, useState } from 'react';
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

    }, []);



    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
          initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return <>
        <div className="container mt-5 pt-4 ">
            <div>
                <Slider {...settings}>
                    {Categories.map((categ) => <div>
                        <div>
                            <img style={{height:"250px"}} className='w-100'  src={categ.image} alt=""/>
                        </div>
                        <h6 className='text-center p-2 text-main'>{categ.name}</h6>
                    </div>)}
                </Slider>
             
            </div>
        </div>

    </>
};