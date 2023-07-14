import React, { useContext, useEffect, useState } from 'react'
import { ApiContext } from '../../Context/ApiContext'
import Spaner from './../spaner/Spaner';


import Slider from "react-slick";
import { Link } from 'react-router-dom';

export default function AllCategories() {


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2

  }

  const { showCategories } = useContext(ApiContext);


  const [categories, setcategories] = useState(null)

  async function showCompontainCategories() {

    let { data } = await showCategories()
    setcategories(data.data.data);


  }


  useEffect(() => {



    showCompontainCategories()

  }, [])


  return <>
    {categories ?

      <div className="container overflow-hidden ">
        <div className="row">
        <Slider {...settings}>
          
          {categories.map((categ) =><div key={categ._id} className='col-md-2 mt-2'>
                        <div>
                            <img style={{height:"300px"}} className='w-100   p-1'  src={categ.image} alt=""/>
                        </div>
                        <h6 className='text-center p-2'>{categ.name}</h6>
                        <Link to={`Specificategory/${categ._id}`}>
                        <button className='btn btn-info' >Specifi Category</button>
                        </Link>
                    </div>)}
                </Slider>
        </div>
      </div>




      : <Spaner />}

  </>

}
