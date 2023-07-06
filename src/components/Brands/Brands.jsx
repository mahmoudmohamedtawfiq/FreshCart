

import React, { useContext, useEffect, useState } from 'react'
import { ApiContext } from '../../Context/ApiContext'
import Spaner from './../spaner/Spaner';



export default function Brands() {

const [Product, setProduct] = useState(null)

  const  { getProduct  } = useContext(ApiContext);

  async function handle() {

 let  {data} =  await getProduct()

setProduct(data.data);


  };

  useEffect(()=>{

    handle();

  },[])


  

  return <>{Product?  
  
  <div className="container  bg-secondary">
     <div className="container">
    <div className="row">
   {Product.data.map((ahmed)=>{

return<>
 <div className="col-md-2 p-2 bg-secondary">
<img className='w-100 rounded-5' src={ahmed.brand.image} alt="" />
  <h6> Category :{ahmed.brand.name}</h6>
<h6>{ahmed.brand.slug}</h6>
<div className='d-flex'>
<h6 ><span className='text-main'> price :{ahmed.price}</span></h6>
<span className='ps-5'><i className='fas fa-star rating-color font-sm'></i> Egy</span>
</div>


  </div>

</>
})}

    </div>
  </div>
  
  </div>
  
  :   <Spaner/> }
 
  
  </>
}






