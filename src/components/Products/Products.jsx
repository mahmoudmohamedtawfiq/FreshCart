import React, { useContext, useEffect, useState } from 'react'
import { ApiContext } from '../../Context/ApiContext'
import Spaner from '../spaner/Spaner';


   
export default function Products() {


  const {showProduct}= useContext(ApiContext);

  const [product, setproduct] = useState(null)
  async function showProductsForProduct(){

    let {response} = await showProduct()
console.log(response);
setproduct(response)

  }
  

  useEffect(  ()=>{


    showProductsForProduct()
    

  },[])

  return<>
  
  {product?
  
  <div className="container">
    <div className="row">
      {product.data.map((productss)=>{

        <div className="col-md-2">
          <div>{productss.brand.name}</div>
        </div>
      } )}
    </div>
  </div>
  
  
  :<Spaner/>}

  </>
}
