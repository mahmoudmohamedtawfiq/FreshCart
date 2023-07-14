
import React, { useContext, useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Spaner from './../spaner/Spaner';
import { ApiContext } from '../../Context/ApiContext';
import { toast } from 'react-hot-toast';



export default function FristComponentInHome() {


  const { addToCart  } = useContext(ApiContext)








  //  this companent for product ❤ 
  const [products, setproducts] = useState(null);
  

  async function viewProduct() {

    let { data } = await axios.get('https://route-ecommerce.onrender.com/api/v1/products')

    // toast.success('Add product To Cart')
    setproducts(data.data);

    
  };
  
  async function addProductTocart(productId) {

    let response = await addToCart(productId)

    if (response?.data?.status === 'success') {

      toast.success(response.data.message)
    }


  }


  useEffect(() => {

    viewProduct()


  }, [])
  return <>

    {products ?



      <div className="container mt-5">
        <div className="row">


          {products.map((product) => <div key={product._id} className="col-md-2 ">

            <div className='product cursor-pointer overflow-hidden p-3' >
              <Link to={`AddProductDetalis/${product.id}`}>
                <div className=" px-2 py-3">

                  <img className='w-100' src={product.imageCover} alt="" />
                  <span className='text-main fw-bolder font-sm'>{product.category.name}</span>
                  <h3 className='h6'>{product.title.split(' ').slice(0, 2).join(' ')}</h3>
                  <div className="d-flex justify-content-between ">

                    <span className='text-muted'>{product.price}</span>
                    <span><i className='fas fa-star rating-color font-sm'></i> Egy</span>
                  </div>
                </div>
                <div>

                </div>

              </Link>
              <button onClick={() => (addProductTocart(product._id))} className='btn bg-main text-white w-100'>+ Add </button>

            </div>


          </div>
          )}

        </div>
      </div> : <Spaner />}





  </>




}
