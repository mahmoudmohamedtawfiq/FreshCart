import React, { useContext, useEffect, useState } from 'react'
import { ApiContext } from '../../Context/ApiContext'
import Spaner from '../spaner/Spaner';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';






export default function Products() {


  const { showProduct , addProductTocart } = useContext(ApiContext);

  const [product, setproduct] = useState(null)

  async function showProductsForProduct() {

    let [data] = await showProduct();
    setproduct(data.data.data)
    console.log(data.data.data);

  }


  async function handleAleart(id){
    const {response} = await addProductTocart(id);

    if (response?.data?.status === 'success') {

      toast.success(response.data.message);
    }
  }


  useEffect(() => {


    showProductsForProduct()


  }, [])



  return <>

    {product ?
      <div className="container">
        <div className="row">

          {product.map((product) => <div key={product._id} className="col-md-2 ">

            <div className='product cursor-pointer overflow-hidden p-3' >
              <Link to={`/AddProductDetalis/${product.id}`}>
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
              <button onClick={() => (handleAleart(product._id))} className='btn bg-main text-white w-100'>+ Add </button>

            </div>


          </div>
          )}
        </div>
      </div>


      : <Spaner />}

  </>
}
