
import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';


export default function FristComponentInHome() {

  const [products, setproducts] = useState([]);

  async function viewProduct() {

    let { data } = await axios.get('https://route-ecommerce.onrender.com/api/v1/products')
    setproducts(data.data)
   
  }
  useEffect(() => {
    viewProduct()
  
   
  }, [])
  

  return <div className="container">
 <div className="row">
    {products.map((product)=><div key={product.name} className="col-md-2">
      <div className="product px-2 py-3">
    
        <img  className='w-100'  src={product.imageCover}alt=""/>
        <span className='text-main fw-bolder font-sm'>{product.category.name }</span>
        <h3 className='h6'>{product.title.split(' ').slice(0,2).join(' ')}</h3>
        <div className="d-flex justify-content-between ">

          <span className='text-muted'>{product.price}</span>
          <span><i className='fas fa-star rating-color '> </i></span>
        </div>
        <button className='btn bg-main text-white w-100'>+ Add </button>
      </div>
    </div>
    )}
  </div>
  </div>
  
}
