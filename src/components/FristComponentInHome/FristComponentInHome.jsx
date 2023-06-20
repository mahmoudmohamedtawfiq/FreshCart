
import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Spaner from './../spaner/Spaner';


export default function FristComponentInHome() {

  const [products, setproducts] = useState(null);

  async function viewProduct() {

    let { data } = await axios.get('https://route-ecommerce.onrender.com/api/v1/products')
    setproducts(data.data)

  }


  useEffect(() => {

    viewProduct()


  }, [])
  console.log(products);
  return <>

      {products ?
      
      
      
      
<div className="container">
        <div className="row">


 {products.map((product) => <div key={product._id} className="col-md-2">

            <Link to={`AddProductDetalis/${product.id}`}>
              <div className="product cursor-pointer px-2 py-3">

                <img className='w-100' src={product.imageCover} alt="" />
                <span className='text-main fw-bolder font-sm'>{product.category.name}</span>
                <h3 className='h6'>{product.title.split(' ').slice(0, 2).join(' ')}</h3>
                <div className="d-flex justify-content-between ">

                  <span className='text-muted'>{product.price}</span>
                  <span><i className='fas fa-star rating-color font-sm '> </i> Egy</span>
                </div>
                <button className='btn bg-main text-white w-100'>+ Add </button>
              </div>
              <div>

              </div>
            </Link>

          </div>
          )}

        </div>
      </div>:<Spaner/>}





  </>




}
